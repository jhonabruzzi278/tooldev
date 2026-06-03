import { describe, it, expect } from 'vitest';
import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';

interface VercelHeader {
  key: string;
  value: string;
}

interface VercelConfig {
  headers?: Array<{
    source: string;
    headers: VercelHeader[];
  }>;
}

describe('vercel.json security headers', () => {
  const vercelPath = resolve(process.cwd(), 'vercel.json');
  const vercelConfig: VercelConfig = JSON.parse(readFileSync(vercelPath, 'utf-8'));

  const globalHeaders = vercelConfig.headers?.find(h => h.source === '/(.*)')?.headers || [];
  const headerMap = new Map(globalHeaders.map(h => [h.key, h.value]));

  it('should have headers configuration', () => {
    expect(vercelConfig.headers).toBeDefined();
    expect(vercelConfig.headers!.length).toBeGreaterThan(0);
  });

  it('should have X-Content-Type-Options header', () => {
    expect(headerMap.get('X-Content-Type-Options')).toBe('nosniff');
  });

  it('should have X-Frame-Options header set to DENY', () => {
    expect(headerMap.get('X-Frame-Options')).toBe('DENY');
  });

  it('should have X-XSS-Protection header', () => {
    expect(headerMap.get('X-XSS-Protection')).toBe('1; mode=block');
  });

  it('should have Referrer-Policy header', () => {
    expect(headerMap.get('Referrer-Policy')).toBe('strict-origin-when-cross-origin');
  });

  it('should have Permissions-Policy header restricting sensitive APIs', () => {
    const policy = headerMap.get('Permissions-Policy');
    expect(policy).toBeDefined();
    expect(policy).toContain('camera=()');
    expect(policy).toContain('microphone=()');
    expect(policy).toContain('geolocation=()');
  });

  it('should have Strict-Transport-Security (HSTS) header', () => {
    const hsts = headerMap.get('Strict-Transport-Security');
    expect(hsts).toBeDefined();
    expect(hsts).toContain('max-age=');
    expect(hsts).toContain('includeSubDomains');
    expect(hsts).toContain('preload');
  });

  it('should have Content-Security-Policy header', () => {
    const csp = headerMap.get('Content-Security-Policy');
    expect(csp).toBeDefined();
    expect(csp).toContain("default-src 'self'");
  });

  it('CSP should restrict script sources', () => {
    const csp = headerMap.get('Content-Security-Policy')!;
    expect(csp).toContain('script-src');
  });

  it('CSP should restrict frame-ancestors to none', () => {
    const csp = headerMap.get('Content-Security-Policy')!;
    expect(csp).toContain("frame-ancestors 'none'");
  });

  it('CSP should restrict base-uri to self', () => {
    const csp = headerMap.get('Content-Security-Policy')!;
    expect(csp).toContain("base-uri 'self'");
  });

  it('CSP should allow forms to Formspree', () => {
    const csp = headerMap.get('Content-Security-Policy')!;
    expect(csp).toContain('form-action');
    expect(csp).toContain('https://formspree.io');
  });
});
