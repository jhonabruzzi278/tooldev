import { useState, useEffect } from 'react';
import { Icon } from '@iconify/react';
import { Button } from '@/components/ui/button';
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

  useEffect(() => {
    setIsFav(isFavorite(toolId));
  }, [toolId]);

  const handleToggle = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const newState = toggleFavorite(toolId);
    setIsFav(newState);
  };

  const iconSize = size === 'sm' ? 16 : size === 'lg' ? 24 : 20;

  if (variant === 'button') {
    return (
      <Button
        variant={isFav ? 'default' : 'outline'}
        size={size === 'sm' ? 'sm' : 'default'}
        onClick={handleToggle}
        className={`gap-2 ${className}`}
        aria-label={isFav ? 'Quitar de favoritos' : 'Agregar a favoritos'}
      >
        <Icon 
          icon={isFav ? 'tabler:heart-filled' : 'tabler:heart'} 
          width={iconSize} 
          height={iconSize} 
        />
        {isFav ? 'Guardado' : 'Guardar'}
      </Button>
    );
  }

  return (
    <button
      onClick={handleToggle}
      className={`p-1.5 rounded-full transition-all hover:scale-110 ${
        isFav 
          ? 'text-red-500 hover:text-red-600' 
          : 'text-muted-foreground hover:text-red-500'
      } ${className}`}
      aria-label={isFav ? 'Quitar de favoritos' : 'Agregar a favoritos'}
    >
      <Icon 
        icon={isFav ? 'tabler:heart-filled' : 'tabler:heart'} 
        width={iconSize} 
        height={iconSize} 
      />
    </button>
  );
}
