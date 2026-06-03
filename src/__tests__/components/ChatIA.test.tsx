import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import ChatIA from '@/components/shared/ChatIA';

describe('ChatIA', () => {
  beforeEach(() => {
    vi.restoreAllMocks();
  });

  it('should render the chat button', () => {
    render(<ChatIA />);
    expect(screen.getByRole('button', { name: /abrir chat ia/i })).toBeInTheDocument();
  });

  it('should open chat when button is clicked', () => {
    render(<ChatIA />);
    fireEvent.click(screen.getByRole('button', { name: /abrir chat ia/i }));
    expect(screen.getByText('Asistente ToolDev')).toBeInTheDocument();
  });

  it('should show initial greeting message', () => {
    render(<ChatIA />);
    fireEvent.click(screen.getByRole('button', { name: /abrir chat ia/i }));
    expect(screen.getByText(/¡Hola! Cuéntame qué necesitas/i)).toBeInTheDocument();
  });

  it('should close chat when close button is clicked', () => {
    render(<ChatIA />);
    fireEvent.click(screen.getByRole('button', { name: /abrir chat ia/i }));
    expect(screen.getByText('Asistente ToolDev')).toBeInTheDocument();
    fireEvent.click(screen.getByRole('button', { name: /cerrar chat/i }));
    expect(screen.queryByText('Asistente ToolDev')).not.toBeInTheDocument();
  });

  it('should have input with maxLength attribute', () => {
    render(<ChatIA />);
    fireEvent.click(screen.getByRole('button', { name: /abrir chat ia/i }));
    const input = screen.getByRole('textbox');
    expect(input).toHaveAttribute('maxLength', '500');
  });

  it('should have aria-label on input', () => {
    render(<ChatIA />);
    fireEvent.click(screen.getByRole('button', { name: /abrir chat ia/i }));
    const input = screen.getByRole('textbox', { name: /escribe tu mensaje/i });
    expect(input).toBeInTheDocument();
  });

  it('should have aria-live region for messages', () => {
    render(<ChatIA />);
    fireEvent.click(screen.getByRole('button', { name: /abrir chat ia/i }));
    const logRegion = screen.getByRole('log');
    expect(logRegion).toHaveAttribute('aria-live', 'polite');
  });

  it('should disable input while loading', async () => {
    vi.stubGlobal('fetch', vi.fn(() => new Promise(() => {})));
    render(<ChatIA />);
    fireEvent.click(screen.getByRole('button', { name: /abrir chat ia/i }));

    const input = screen.getByRole('textbox');
    fireEvent.change(input, { target: { value: 'test message' } });
    fireEvent.keyDown(input, { key: 'Enter' });

    await waitFor(() => {
      expect(input).toBeDisabled();
    });
  });

  it('should send message on Enter key', async () => {
    const mockFetch = vi.fn(() =>
      Promise.resolve(new Response(JSON.stringify({ reply: 'Respuesta de prueba' }), { status: 200 }))
    );
    vi.stubGlobal('fetch', mockFetch);

    render(<ChatIA />);
    fireEvent.click(screen.getByRole('button', { name: /abrir chat ia/i }));

    const input = screen.getByRole('textbox');
    fireEvent.change(input, { target: { value: 'necesito una base de datos' } });
    fireEvent.keyDown(input, { key: 'Enter' });

    await waitFor(() => {
      expect(screen.getByText('necesito una base de datos')).toBeInTheDocument();
    });
  });

  it('should not send empty message', () => {
    const mockFetch = vi.fn();
    vi.stubGlobal('fetch', mockFetch);

    render(<ChatIA />);
    fireEvent.click(screen.getByRole('button', { name: /abrir chat ia/i }));

    const input = screen.getByRole('textbox');
    fireEvent.keyDown(input, { key: 'Enter' });

    expect(mockFetch).not.toHaveBeenCalled();
  });

  it('should display error message on API failure', async () => {
    vi.stubGlobal('fetch', vi.fn(() =>
      Promise.resolve(new Response(JSON.stringify({ error: 'Error de conexión' }), { status: 500 }))
    ));

    render(<ChatIA />);
    fireEvent.click(screen.getByRole('button', { name: /abrir chat ia/i }));

    const input = screen.getByRole('textbox');
    fireEvent.change(input, { target: { value: 'test' } });
    fireEvent.keyDown(input, { key: 'Enter' });

    await waitFor(() => {
      expect(screen.getByText(/error/i)).toBeInTheDocument();
    });
  });

  it('should truncate input to 500 characters', () => {
    render(<ChatIA />);
    fireEvent.click(screen.getByRole('button', { name: /abrir chat ia/i }));

    const input = screen.getByRole('textbox');
    const longText = 'a'.repeat(600);
    fireEvent.change(input, { target: { value: longText } });

    expect(input).toHaveAttribute('maxLength', '500');
  });
});
