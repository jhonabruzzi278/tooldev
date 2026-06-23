import { useState, useEffect } from 'react';
import { Icon } from '@iconify/react';
import { cn } from '@/lib/utils';
import { isFavorite, toggleFavorite } from '@/lib/favorites';

interface FavoriteButtonProps {
  toolId: string;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'icon' | 'button';
  className?: string;
}

export default function FavoriteButton({ 
  toolId, 
  size = 'md',
  variant = 'icon',
  className = ''
}: FavoriteButtonProps) {
  const [isFav, setIsFav] = useState(false);
  const [animating, setAnimating] = useState(false);

  useEffect(() => {
    setIsFav(isFavorite(toolId));
  }, [toolId]);

  const handleToggle = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const newState = toggleFavorite(toolId);
    setIsFav(newState);
    setAnimating(true);
    setTimeout(() => setAnimating(false), 400);
  };

  const iconSize = size === 'sm' ? 16 : size === 'lg' ? 24 : 20;

  if (variant === 'button') {
    return (
      <button
        onClick={handleToggle}
        className={cn(
          'inline-flex items-center gap-2 px-4 py-2 rounded-xl border text-sm font-medium transition-all duration-200',
          isFav
            ? 'bg-destructive/10 border-destructive/30 text-destructive hover:bg-destructive/20'
            : 'bg-background border-border text-muted-foreground hover:border-destructive/50 hover:text-destructive',
          className
        )}
        aria-label={isFav ? 'Quitar de favoritos' : 'Agregar a favoritos'}
      >
        <Icon
          icon={isFav ? 'tabler:heart-filled' : 'tabler:heart'}
          width={iconSize}
          height={iconSize}
          className={cn('transition-transform duration-300', animating && 'scale-125')}
        />
        {isFav ? 'Guardado' : 'Guardar'}
      </button>
    );
  }

  return (
    <button
      onClick={handleToggle}
      className={cn(
        'p-1.5 rounded-full transition-all duration-200',
        isFav ? 'text-destructive hover:text-destructive/80' : 'text-muted-foreground hover:text-destructive',
        className
      )}
      aria-label={isFav ? 'Quitar de favoritos' : 'Agregar a favoritos'}
    >
      <Icon
        icon={isFav ? 'tabler:heart-filled' : 'tabler:heart'}
        width={iconSize}
        height={iconSize}
        className={cn('transition-transform duration-300', animating && 'scale-125')}
      />
    </button>
  );
}

