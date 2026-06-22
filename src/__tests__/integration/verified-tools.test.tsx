import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { readdirSync, readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import CopyForAI from '@/components/tools/CopyForAI';

const toolsDir = resolve(process.cwd(), 'src/content/tools');

describe('Verified Tools Integration', () => {
  describe('Content verification', () => {
    it('at least one tool file has verified: true in frontmatter', () => {
      const files = readdirSync(toolsDir).filter(f => f.endsWith('.md'));
      let hasVerified = false;
      for (const file of files) {
        const content = readFileSync(resolve(toolsDir, file), 'utf-8');
        const fmMatch = content.match(/^---\n([\s\S]*?)\n---/);
        if (fmMatch && fmMatch[1].match(/^verified:\s*true$/m)) {
          hasVerified = true;
          break;
        }
      }
      expect(hasVerified).toBe(true);
    });
  });

  describe('CopyForAI with toolVerified', () => {
    const baseProps = {
      toolName: 'Test Tool',
      toolCategory: 'frontend',
      toolOpenSource: true,
      toolDescription: 'A test tool',
      toolAlternatives: [],
      toolPricing: 'open-source',
      toolTechnicalLevel: 'intermedio',
      toolLicense: 'MIT',
      toolTags: ['test', 'tool', 'demo', 'vitest'],
      toolOfficialSite: 'https://example.com',
      toolGithub: 'https://github.com/test/tool',
      toolCompatibility: ['Web'],
      toolFeatures: ['Feature 1', 'Feature 2'],
      toolHowToUse: [{ step: 1, title: 'Step 1', description: 'Do this' }],
      toolWhenToUse: [{ title: 'Case 1', description: 'When you need...' }],
      toolExamples: [{ title: 'Example', code: 'console.log("hi")', output: 'hi' }],
      toolTips: [{ text: 'Tip 1' }],
      toolFaq: [{ question: 'Q?', answer: 'A.' }],
      locale: 'es' as const,
    };

    beforeEach(() => {
      Object.assign(navigator, {
        clipboard: {
          writeText: vi.fn().mockResolvedValue(undefined),
        },
      });
    });

    it('renders without error when toolVerified is true', () => {
      const { container } = render(<CopyForAI {...baseProps} toolVerified={true} />);
      expect(container).toBeDefined();
    });

    it('generates Installation section when toolVerified is true', async () => {
      render(<CopyForAI {...baseProps} toolVerified={true} />);
      const button = screen.getByRole('button');
      fireEvent.click(button);

      await waitFor(() => {
        expect(navigator.clipboard.writeText).toHaveBeenCalled();
      });

      const clipboardContent = (navigator.clipboard.writeText as ReturnType<typeof vi.fn>).mock.calls[0][0] as string;
      expect(clipboardContent).toContain('## Installation');
      expect(clipboardContent).toContain('npx tooldev-skills install test-tool');
    });

    it('does NOT generate Installation section when toolVerified is false', async () => {
      render(<CopyForAI {...baseProps} toolVerified={false} />);
      const button = screen.getByRole('button');
      fireEvent.click(button);

      await waitFor(() => {
        expect(navigator.clipboard.writeText).toHaveBeenCalled();
      });

      const clipboardContent = (navigator.clipboard.writeText as ReturnType<typeof vi.fn>).mock.calls[0][0] as string;
      expect(clipboardContent).not.toContain('## Installation');
      expect(clipboardContent).not.toContain('npx tooldev-skills install');
    });
  });
});
