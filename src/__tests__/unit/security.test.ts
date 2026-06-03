import { describe, it, expect, beforeEach } from 'vitest';
import {
  sanitizeInput,
  isRateLimited,
  getClientIP,
  clearRateLimitMap,
  MAX_MESSAGE_LENGTH,
  RATE_LIMIT_MAX_REQUESTS,
} from '@/lib/security';

describe('security - sanitizeInput', () => {
  it('should remove HTML tags', () => {
    expect(sanitizeInput('<script>alert("xss")</script>hola')).toBe('alert("xss")hola');
    expect(sanitizeInput('<b>negrita</b>')).toBe('negrita');
    expect(sanitizeInput('<a href="evil.com">click</a>')).toBe('click');
  });

  it('should remove script tags completely when empty', () => {
    expect(sanitizeInput('<script></script>')).toBe('');
    expect(sanitizeInput('<img src=x onerror=alert(1)>')).toBe('');
  });

  it('should remove nested HTML tags', () => {
    expect(sanitizeInput('<div><span>texto</span></div>')).toBe('texto');
  });

  it('should trim whitespace', () => {
    expect(sanitizeInput('   hola   ')).toBe('hola');
    expect(sanitizeInput('\n\t hola \n\t')).toBe('hola');
  });

  it('should truncate to MAX_MESSAGE_LENGTH', () => {
    const longInput = 'a'.repeat(MAX_MESSAGE_LENGTH + 100);
    expect(sanitizeInput(longInput)).toHaveLength(MAX_MESSAGE_LENGTH);
  });

  it('should remove control characters', () => {
    expect(sanitizeInput('hola\x00mundo')).toBe('holamundo');
    expect(sanitizeInput('hola\x1Fmundo')).toBe('holamundo');
    expect(sanitizeInput('hola\x7Fmundo')).toBe('holamundo');
  });

  it('should preserve valid text', () => {
    expect(sanitizeInput('necesito una base de datos')).toBe('necesito una base de datos');
    expect(sanitizeInput('¿Qué herramienta recomiendas?')).toBe('¿Qué herramienta recomiendas?');
  });

  it('should return empty string for only HTML', () => {
    expect(sanitizeInput('<script></script>')).toBe('');
  });

  it('should return empty string for only whitespace', () => {
    expect(sanitizeInput('   ')).toBe('');
    expect(sanitizeInput('\n\t')).toBe('');
  });

  it('should handle empty string', () => {
    expect(sanitizeInput('')).toBe('');
  });
});

describe('security - isRateLimited', () => {
  beforeEach(() => {
    clearRateLimitMap();
  });

  it('should allow first request', () => {
    expect(isRateLimited('192.168.1.1')).toBe(false);
  });

  it('should allow up to RATE_LIMIT_MAX_REQUESTS requests', () => {
    const ip = '192.168.1.1';
    for (let i = 0; i < RATE_LIMIT_MAX_REQUESTS; i++) {
      expect(isRateLimited(ip)).toBe(false);
    }
  });

  it('should block after RATE_LIMIT_MAX_REQUESTS requests', () => {
    const ip = '192.168.1.1';
    for (let i = 0; i < RATE_LIMIT_MAX_REQUESTS; i++) {
      isRateLimited(ip);
    }
    expect(isRateLimited(ip)).toBe(true);
  });

  it('should track different IPs independently', () => {
    const ip1 = '192.168.1.1';
    const ip2 = '192.168.1.2';

    for (let i = 0; i < RATE_LIMIT_MAX_REQUESTS; i++) {
      isRateLimited(ip1);
    }

    expect(isRateLimited(ip1)).toBe(true);
    expect(isRateLimited(ip2)).toBe(false);
  });
});

describe('security - getClientIP', () => {
  it('should extract IP from x-forwarded-for header', () => {
    const request = new Request('http://localhost', {
      headers: { 'x-forwarded-for': '192.168.1.1, 10.0.0.1' },
    });
    expect(getClientIP(request)).toBe('192.168.1.1');
  });

  it('should extract IP from x-real-ip header as fallback', () => {
    const request = new Request('http://localhost', {
      headers: { 'x-real-ip': '10.0.0.1' },
    });
    expect(getClientIP(request)).toBe('10.0.0.1');
  });

  it('should prefer x-forwarded-for over x-real-ip', () => {
    const request = new Request('http://localhost', {
      headers: {
        'x-forwarded-for': '192.168.1.1',
        'x-real-ip': '10.0.0.1',
      },
    });
    expect(getClientIP(request)).toBe('192.168.1.1');
  });

  it('should return unknown when no IP headers present', () => {
    const request = new Request('http://localhost');
    expect(getClientIP(request)).toBe('unknown');
  });

  it('should handle x-forwarded-for with spaces', () => {
    const request = new Request('http://localhost', {
      headers: { 'x-forwarded-for': ' 192.168.1.1 , 10.0.0.1' },
    });
    expect(getClientIP(request)).toBe('192.168.1.1');
  });
});
