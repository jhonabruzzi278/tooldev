import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent, act } from '@testing-library/react';
import ToolShareButtons from '@/components/tools/ToolShareButtons';

beforeEach(() => {
  localStorage.clear();
  vi.restoreAllMocks();
});

describe('ToolShareButtons', () => {
  it('should render share and save buttons', () => {
    render(<ToolShareButtons toolName="Test Tool" toolUrl="https://example.com/test" />);
    expect(screen.getByText('Compartir')).toBeInTheDocument();
    expect(screen.getByText('Guardar')).toBeInTheDocument();
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
  });

  it('should toggle save state when save button is clicked', () => {
    render(<ToolShareButtons toolName="Test" toolUrl="https://example.com/test" />);

    const saveBtn = screen.getByText('Guardar');
    fireEvent.click(saveBtn);

    expect(screen.getByText('Guardado')).toBeInTheDocument();

    const saved = JSON.parse(localStorage.getItem('savedTools') || '[]');
    expect(saved).toContain('https://example.com/test');

    fireEvent.click(screen.getByText('Guardado'));
    expect(screen.getByText('Guardar')).toBeInTheDocument();
  });

  it('should show saved state on mount if URL is in localStorage', () => {
    localStorage.setItem('savedTools', JSON.stringify(['https://example.com/test']));

    render(<ToolShareButtons toolName="Test" toolUrl="https://example.com/test" />);
    expect(screen.getByText('Guardado')).toBeInTheDocument();
  });
});
