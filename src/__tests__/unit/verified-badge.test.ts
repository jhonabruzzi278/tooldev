import { describe, it, expect } from 'vitest';
import { z } from 'zod';
import { translations } from '@/lib/i18n/translations';

// Recreate the relevant part of the schema for testing
// Mirrors the `verified` field definition in src/content.config.ts
const verifiedSchema = z.boolean().default(false);

describe('Verified Badge System', () => {
  describe('Content Schema - verified field', () => {
    it('should parse verified: true without errors and resolve to boolean true', () => {
      const result = verifiedSchema.parse(true);
      expect(result).toBe(true);
    });

    it('should parse verified: false without errors and resolve to boolean false', () => {
      const result = verifiedSchema.parse(false);
      expect(result).toBe(false);
    });

    it('should default to false when omitted (undefined)', () => {
      const result = verifiedSchema.parse(undefined);
      expect(result).toBe(false);
    });

    it('should reject non-boolean values', () => {
      expect(() => verifiedSchema.parse('true')).toThrow();
      expect(() => verifiedSchema.parse(1)).toThrow();
      expect(() => verifiedSchema.parse(null)).toThrow();
    });
  });

  describe('i18n translations', () => {
    it('should have non-empty tools.verified in ES locale', () => {
      const esTools = translations.es.tools as Record<string, string>;
      expect(esTools.verified).toBeDefined();
      expect(esTools.verified.length).toBeGreaterThan(0);
    });

    it('should have non-empty tools.verified in EN locale', () => {
      const enTools = translations.en.tools as Record<string, string>;
      expect(enTools.verified).toBeDefined();
      expect(enTools.verified.length).toBeGreaterThan(0);
    });

    it('should have non-empty tools.installSkill in ES locale', () => {
      const esTools = translations.es.tools as Record<string, string>;
      expect(esTools.installSkill).toBeDefined();
      expect(esTools.installSkill.length).toBeGreaterThan(0);
    });

    it('should have non-empty tools.installSkill in EN locale', () => {
      const enTools = translations.en.tools as Record<string, string>;
      expect(enTools.installSkill).toBeDefined();
      expect(enTools.installSkill.length).toBeGreaterThan(0);
    });
  });
});
