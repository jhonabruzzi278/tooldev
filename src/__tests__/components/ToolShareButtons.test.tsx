import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent, act } from '@testing-library/react';
import ToolShareButtons from '@/components/tools/ToolShareButtons';

beforeEach(() => {
  vi.restoreAllMocks();
});

describe('ToolShareButtons', () => {
  it('should render share button', () => {
    render(<ToolShareButtons toolName="Test Tool" toolUrl="https://example.com/test" />);
    expect(screen.getByText('Compartir')).toBeInTheDocument();
  });

  it('should copy URL when share is clicked without navigator.share', async () => {
    const writeText = vi.fn().mockResolvedValue(undefined);
    Object.assign(navigator, {
      clipboard: { writeText },
      share: undefined,
    });

    render(<ToolShareButtons toolName="Test" toolUrl="https://example.com/test" />);
    await act(async () => {
      fireEvent.click(screen.getByText('Compartir'));
    });

    expect(writeText).toHaveBeenCalledWith('https://example.com/test');
    expect(screen.getByText('¡Copiado!')).toBeInTheDocument();
  });

  it('should use navigator.share when available', async () => {
    const share = vi.fn().mockResolvedValue(undefined);
    Object.assign(navigator, { share });

    render(<ToolShareButtons toolName="Test" toolUrl="https://example.com/test" />);
    await act(async () => {
      fireEvent.click(screen.getByText('Compartir'));
    });

    expect(share).toHaveBeenCalledWith({
      title: 'Test',
      url: 'https://example.com/test',
    });
  });
});
