import { describe, it, expect } from 'vitest';
import { getLicenseInfo, getLicenseExplanation } from '@/lib/licenses';

describe('licenses', () => {
  it('getLicenseInfo returns info for a known permissive license', () => {
    const info = getLicenseInfo('MIT');
    expect(info).not.toBeNull();
    expect(info?.type).toBe('permissive');
    expect(info?.name).toBe('MIT');
  });

  it('getLicenseInfo returns info for a known strong-copyleft license', () => {
    const info = getLicenseInfo('AGPL-3.0');
    expect(info?.type).toBe('strong-copyleft');
  });

  it('getLicenseInfo returns info for a known source-available license', () => {
    const info = getLicenseInfo('MongoDB Server Side Public License (SSPL)');
    expect(info?.type).toBe('source-available');
  });

  it('getLicenseInfo returns null for an unknown license', () => {
    expect(getLicenseInfo('Not-A-Real-License')).toBeNull();
  });

  it('getLicenseExplanation returns the explanation text for a known license', () => {
    const explanation = getLicenseExplanation('Apache-2.0');
    expect(explanation).toContain('patentes');
  });

  it('getLicenseExplanation returns null for an unknown license', () => {
    expect(getLicenseExplanation('Not-A-Real-License')).toBeNull();
  });
});
