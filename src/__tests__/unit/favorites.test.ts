import { describe, it, expect, beforeEach } from 'vitest';
import { getFavorites, isFavorite, addFavorite, removeFavorite, toggleFavorite } from '@/lib/favorites';

describe('favorites', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('getFavorites returns empty array when nothing stored', () => {
    expect(getFavorites()).toEqual([]);
  });

  it('getFavorites returns parsed list from localStorage', () => {
    localStorage.setItem('tooldev-favorites', JSON.stringify(['astro', 'docker']));
    expect(getFavorites()).toEqual(['astro', 'docker']);
  });

  it('getFavorites returns empty array when stored value is invalid JSON', () => {
    localStorage.setItem('tooldev-favorites', '{not-valid-json');
    expect(getFavorites()).toEqual([]);
  });

  it('isFavorite returns false when tool is not stored', () => {
    expect(isFavorite('astro')).toBe(false);
  });

  it('isFavorite returns true when tool is stored', () => {
    localStorage.setItem('tooldev-favorites', JSON.stringify(['astro']));
    expect(isFavorite('astro')).toBe(true);
  });

  it('addFavorite adds a new tool id', () => {
    addFavorite('astro');
    expect(getFavorites()).toEqual(['astro']);
  });

  it('addFavorite does not duplicate an existing tool id', () => {
    addFavorite('astro');
    addFavorite('astro');
    expect(getFavorites()).toEqual(['astro']);
  });

  it('removeFavorite removes a stored tool id', () => {
    addFavorite('astro');
    addFavorite('docker');
    removeFavorite('astro');
    expect(getFavorites()).toEqual(['docker']);
  });

  it('removeFavorite is a no-op when tool id is not stored', () => {
    addFavorite('astro');
    removeFavorite('docker');
    expect(getFavorites()).toEqual(['astro']);
  });

  it('toggleFavorite adds and returns true when not previously favorited', () => {
    expect(toggleFavorite('astro')).toBe(true);
    expect(getFavorites()).toEqual(['astro']);
  });

  it('toggleFavorite removes and returns false when previously favorited', () => {
    addFavorite('astro');
    expect(toggleFavorite('astro')).toBe(false);
    expect(getFavorites()).toEqual([]);
  });
});
