const FAVORITES_KEY = 'tooldev-favorites';

export function getFavorites(): string[] {
  if (typeof window === 'undefined') return [];
  try {
    const stored = localStorage.getItem(FAVORITES_KEY);
    return stored ? JSON.parse(stored) : [];
  } catch {
    return [];
  }
}

export function isFavorite(toolId: string): boolean {
  const favorites = getFavorites();
  return favorites.includes(toolId);
}

export function addFavorite(toolId: string): void {
  const favorites = getFavorites();
  if (!favorites.includes(toolId)) {
    favorites.push(toolId);
    localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites));
  }
}

export function removeFavorite(toolId: string): void {
  const favorites = getFavorites();
  const filtered = favorites.filter(id => id !== toolId);
  localStorage.setItem(FAVORITES_KEY, JSON.stringify(filtered));
}

export function toggleFavorite(toolId: string): boolean {
  if (isFavorite(toolId)) {
    removeFavorite(toolId);
    return false;
  } else {
    addFavorite(toolId);
    return true;
  }
}
