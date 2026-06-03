import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import ContactForm from '@/components/shared/ContactForm';

describe('ContactForm security', () => {
  beforeEach(() => {
    vi.restoreAllMocks();
  });

  it('should not expose email address in error message', async () => {
    vi.stubGlobal('fetch', vi.fn(() =>
      Promise.resolve(new Response('error', { status: 500 }))
    ));

    render(<ContactForm locale="es" />);

    const form = document.querySelector('form')!;
    fireEvent.submit(form);

    await waitFor(() => {
      const errorElements = document.querySelectorAll('.text-red-600');
      errorElements.forEach(el => {
        expect(el.textContent).not.toContain('jonathanguerra278@gmail.com');
      });
    });
  });

  it('should show generic error message on failure', async () => {
    vi.stubGlobal('fetch', vi.fn(() =>
      Promise.resolve(new Response('error', { status: 500 }))
    ));

    render(<ContactForm locale="es" />);

    const form = document.querySelector('form')!;
    fireEvent.submit(form);

    await waitFor(() => {
      const errorElement = document.querySelector('.text-red-600');
      expect(errorElement).toBeInTheDocument();
      expect(errorElement!.textContent).not.toContain('@');
    });
  });

  it('should have required attribute on all inputs', () => {
    render(<ContactForm locale="es" />);

    const nameInput = screen.getByLabelText(/nombre/i);
    const emailInput = screen.getByLabelText(/correo electr/i);
    const subjectInput = screen.getByLabelText(/asunto/i);
    const messageInput = screen.getByLabelText(/mensaje/i);

    expect(nameInput).toBeRequired();
    expect(emailInput).toBeRequired();
    expect(subjectInput).toBeRequired();
    expect(messageInput).toBeRequired();
  });

  it('should have email input with type email', () => {
    render(<ContactForm locale="es" />);

    const emailInput = screen.getByLabelText(/correo electr/i);
    expect(emailInput).toHaveAttribute('type', 'email');
  });

  it('should reset form after successful submission', async () => {
    vi.stubGlobal('fetch', vi.fn(() =>
      Promise.resolve(new Response('ok', { status: 200 }))
    ));

    render(<ContactForm locale="es" />);

    const nameInput = screen.getByLabelText(/nombre/i) as HTMLInputElement;
    fireEvent.change(nameInput, { target: { value: 'Test Name' } });

    const form = document.querySelector('form')!;
    fireEvent.submit(form);

    await waitFor(() => {
      expect(nameInput.value).toBe('');
    });
  });

  it('should disable submit button while sending', async () => {
    vi.stubGlobal('fetch', vi.fn(() => new Promise(() => {})));

    render(<ContactForm locale="es" />);

    const submitButton = screen.getByRole('button', { name: /enviar/i });
    const form = document.querySelector('form')!;
    fireEvent.submit(form);

    await waitFor(() => {
      expect(submitButton).toBeDisabled();
    });
  });
});
