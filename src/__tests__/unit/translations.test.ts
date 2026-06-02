import { describe, it, expect } from 'vitest';
import { translations, getTranslations, t } from '@/lib/i18n/translations';

describe('translations', () => {
  it('should have es and en locales', () => {
    expect(translations).toHaveProperty('es');
    expect(translations).toHaveProperty('en');
  });

  it('should have all nav keys in both locales', () => {
    const esNav = translations.es.nav as Record<string, string>;
    const enNav = translations.en.nav as Record<string, string>;
    expect(Object.keys(esNav).sort()).toEqual(Object.keys(enNav).sort());
    expect(esNav).toHaveProperty('tools');
    expect(esNav).toHaveProperty('categories');
    expect(esNav).toHaveProperty('about');
    expect(esNav).toHaveProperty('contact');
  });

  it('should have tools translations in both locales', () => {
    const esTools = translations.es.tools as Record<string, string>;
    expect(esTools.howToUse).toBe('Cómo usar');
    expect(esTools.whenToUse).toBe('Cuándo usarlo');
    expect(esTools.examples).toBe('Ejemplos');
    expect(esTools.tips).toBe('Tips y buenas prácticas');
    expect(esTools.faq).toBe('Preguntas frecuentes');
    expect(esTools.reportBroken).toBe('Reportar error');
    expect(esTools.sendFeedback).toBe('Enviar feedback');
  });

  it('should have site translations in both locales', () => {
    expect(translations.es.site.name).toBe('ToolDev');
    expect(translations.en.site.name).toBe('ToolDev');
  });

  it('getTranslations should return es by default', () => {
    const lang = getTranslations('es');
    expect(lang.site.name).toBe('ToolDev');
  });

  it('getTranslations should return english when requested', () => {
    const lang = getTranslations('en');
    expect(lang.nav.tools).toBe('Tools');
  });

  it('getTranslations should fallback to es for unknown locale', () => {
    const lang = getTranslations('fr' as any);
    expect(lang.site.name).toBe('ToolDev');
  });

  it('t() should resolve nested keys', () => {
    expect(t('es', 'site.name')).toBe('ToolDev');
    expect(t('es', 'nav.tools')).toBe('Herramientas');
    expect(t('en', 'nav.tools')).toBe('Tools');
  });

  it('t() should return key for missing translations', () => {
    expect(t('es', 'nonexistent.key')).toBe('nonexistent.key');
  });
});
