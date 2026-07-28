import { useState, useEffect } from 'react';
import { Icon } from '@/components/ui/Icon';
import { getFavorites, removeFavorite } from '@/lib/favorites';
import { getCategoryName } from '@/lib/categories';

export interface ToolEntry {
  id: string;
  name: string;
  description: string;
  category: string;
  slug: string;
  pricing: string;
  openSource: boolean;
  featured: boolean;
  verified: boolean;
  logo?: string;
}

export interface FavoritesListProps {
  tools: ToolEntry[];
  locale?: 'es' | 'en';
}

const PRICING_LABEL: Record<'es' | 'en', Record<string, string>> = {
  es: { gratis: 'GRATIS', freemium: 'FREEMIUM', pago: 'PAGO', 'open-source': 'OPEN SOURCE' },
  en: { gratis: 'FREE', freemium: 'FREEMIUM', pago: 'PAID', 'open-source': 'OPEN SOURCE' },
};

interface FavoriteCardProps {
  tool: ToolEntry;
  locale: 'es' | 'en';
  onRemove: (toolId: string) => void;
}

function FavoriteCard({ tool, locale, onRemove }: FavoriteCardProps) {
  const href = locale === 'en' ? `/en/tools/${tool.slug}` : `/tools/${tool.slug}`;
  const pricingLabel = PRICING_LABEL[locale][tool.pricing] ?? tool.pricing;

  return (
    <li className="list-none">
      <a
        href={href}
        className="group relative block h-full border border-border p-5 hover:bg-muted/40 transition-colors font-mono"
      >
        {tool.verified && (
          <span className="absolute top-4 right-11 text-accent-lime text-sm" aria-hidden="true">✦</span>
        )}
        <button
          onClick={(e) => { e.preventDefault(); e.stopPropagation(); onRemove(tool.id); }}
          className="absolute top-3 right-3 z-10 p-1.5 rounded-[3px] text-destructive hover:text-destructive/80 hover:scale-110 transition-all"
          aria-label={locale === 'en' ? `Remove ${tool.name} from favorites` : `Quitar ${tool.name} de favoritos`}
        >
          <Icon icon="tabler:heart-filled" width={18} height={18} />
        </button>

        <div className="flex items-center gap-2 mb-3 pr-16">
          {tool.logo && (
            <span className="inline-flex items-center justify-center shrink-0 overflow-hidden size-5">
              <img src={tool.logo} alt="" className="max-w-full max-h-full object-contain" loading="lazy" decoding="async" />
            </span>
          )}
          <h3 className="text-sm truncate">{tool.name}</h3>
        </div>

        <p className="text-xs text-muted-foreground leading-relaxed line-clamp-2 mb-4">{tool.description}</p>

        <div className="flex items-center gap-2 flex-wrap">
          <span className="text-[10px] uppercase tracking-wider px-1.5 py-0.5 rounded-[2px] border border-border text-muted-foreground">
            {pricingLabel}
          </span>
          {tool.featured && (
            <span className="text-[10px] uppercase tracking-wider px-1.5 py-0.5 rounded-[2px] border-2 border-accent-lime bg-accent-lime/10 text-accent-lime font-semibold inline-flex items-center gap-1">
              <Icon icon="tabler:sparkles-filled" width={10} height={10} />
              {locale === 'en' ? 'Featured' : 'Destacada'}
            </span>
          )}
          <span className="text-[10px] uppercase tracking-wider px-1.5 py-0.5 rounded-[2px] border border-border text-muted-foreground">
            {getCategoryName(tool.category)}
          </span>
          {tool.openSource && (
            <span className="text-[10px] uppercase tracking-wider px-1.5 py-0.5 rounded-[2px] border border-border text-muted-foreground inline-flex items-center gap-1">
              <Icon icon="tabler:code" width={10} height={10} />
              Open Source
            </span>
          )}
        </div>
      </a>
    </li>
  );
}

function SkeletonGrid() {
  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4" aria-hidden="true">
      {[0, 1, 2].map((i) => (
        <li key={i} className="list-none border border-border p-5 animate-pulse">
          <div className="flex items-center gap-2 mb-4">
            <div className="size-5 rounded-[3px] bg-muted" />
            <div className="h-3.5 w-24 rounded-[2px] bg-muted" />
          </div>
          <div className="h-2.5 w-full rounded-[2px] bg-muted mb-2" />
          <div className="h-2.5 w-2/3 rounded-[2px] bg-muted mb-4" />
          <div className="h-4 w-16 rounded-[2px] bg-muted" />
        </li>
      ))}
    </ul>
  );
}

function EmptyState({ locale }: { locale: 'es' | 'en' }) {
  const toolsHref = locale === 'en' ? '/en/tools' : '/tools';

  return (
    <div className="flex flex-col items-center text-center py-16 px-4 border border-dashed border-border font-mono">
      <div className="mb-5 inline-flex items-center justify-center size-14 rounded-full border border-border text-muted-foreground/50">
        <Icon icon="tabler:heart" width={26} height={26} />
      </div>
      <h2 className="text-base text-foreground mb-2">
        {locale === 'en' ? 'No favorites yet' : 'Aún no tienes favoritos'}
      </h2>
      <p className="text-sm text-muted-foreground max-w-sm mb-6">
        {locale === 'en'
          ? 'Browse the catalog and tap the heart icon on any tool to save it here for quick access.'
          : 'Explora el catálogo y toca el ícono de corazón en cualquier herramienta para guardarla aquí.'}
      </p>
      <a
        href={toolsHref}
        className="inline-flex items-center gap-1.5 h-9 px-4 rounded-[3px] border border-border text-sm hover:bg-muted hover:border-foreground/30 transition-colors"
      >
        {locale === 'en' ? 'Explore tools' : 'Explorar herramientas'}
        <Icon icon="tabler:arrow-right" width={14} height={14} />
      </a>
    </div>
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

  if (!hydrated) {
    return <SkeletonGrid />;
  }

  const favoriteTools = tools.filter((tool) => favoriteIds.includes(tool.id));

  if (favoriteTools.length === 0) {
    return <EmptyState locale={locale} />;
  }

  return (
    <div className="font-mono">
      <p className="text-xs text-muted-foreground mb-4">
        {favoriteTools.length}{' '}
        {locale === 'en'
          ? favoriteTools.length === 1 ? 'saved tool' : 'saved tools'
          : favoriteTools.length === 1 ? 'herramienta guardada' : 'herramientas guardadas'}
      </p>
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4" role="list">
        {favoriteTools.map((tool) => (
          <FavoriteCard
            key={tool.id}
            tool={tool}
            locale={locale}
            onRemove={handleRemove}
          />
        ))}
      </ul>
    </div>
  );
}
