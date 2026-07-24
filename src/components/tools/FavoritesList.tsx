import { useState, useEffect } from 'react';
import { Icon } from '@iconify/react';
import { getFavorites, removeFavorite } from '@/lib/favorites';

export interface ToolEntry {
  id: string;
  name: string;
  description: string;
  category: string;
  slug: string;
}

export interface FavoritesListProps {
  tools: ToolEntry[];
  locale?: 'es' | 'en';
}

interface FavoritesListItemProps {
  tool: ToolEntry;
  locale: 'es' | 'en';
  onRemove: (toolId: string) => void;
}

function FavoritesListItem({ tool, locale, onRemove }: FavoritesListItemProps) {
  const href = locale === 'en' ? `/en/tools/${tool.slug}` : `/tools/${tool.slug}`;

  return (
    <li className="flex items-center gap-3 py-3 px-2 group font-mono">
      <a href={href} className="flex-1 min-w-0 flex items-center gap-3">
        <span className="text-sm text-foreground truncate">
          {tool.name}
        </span>
        <span className="text-[10px] uppercase tracking-wider px-1.5 py-0.5 rounded-[2px] border border-border text-muted-foreground shrink-0">
          {tool.category}
        </span>
        <span className="text-xs text-muted-foreground truncate hidden sm:inline">
          {tool.description}
        </span>
      </a>
      <button
        onClick={(e) => { e.preventDefault(); onRemove(tool.id); }}
        className="p-1.5 rounded-[3px] text-red-500 hover:text-red-600 hover:scale-110 transition-all shrink-0"
        aria-label={locale === 'en' ? `Remove ${tool.name} from favorites` : `Quitar ${tool.name} de favoritos`}
      >
        <Icon icon="tabler:heart-filled" width={18} height={18} />
      </button>
    </li>
  );
}

function EmptyState({ locale }: { locale: 'es' | 'en' }) {
  return (
    <p className="text-center text-muted-foreground py-12 text-sm font-mono">
      {locale === 'en'
        ? "You haven't saved any tools yet. Browse the catalog and click the heart icon to add tools here."
        : 'Aún no has guardado herramientas. Explora el catálogo y haz clic en el ícono de corazón para agregar herramientas aquí.'}
    </p>
  );
}

export default function FavoritesList({ tools, locale = 'es' }: FavoritesListProps) {
  const [favoriteIds, setFavoriteIds] = useState<string[]>([]);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setFavoriteIds(getFavorites());
    setHydrated(true);
  }, []);

  const handleRemove = (toolId: string) => {
    removeFavorite(toolId);
    setFavoriteIds((prev) => prev.filter((id) => id !== toolId));
  };

  const favoriteTools = tools.filter((tool) => favoriteIds.includes(tool.id));

  if (!hydrated) {
    return <EmptyState locale={locale} />;
  }

  if (favoriteTools.length === 0) {
    return <EmptyState locale={locale} />;
  }

  return (
    <ul className="divide-y divide-border/50" role="list">
      {favoriteTools.map((tool) => (
        <FavoritesListItem
          key={tool.id}
          tool={tool}
          locale={locale}
          onRemove={handleRemove}
        />
      ))}
    </ul>
  );
}
