import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('sending');

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
        method: 'POST',
        body: formData,
        headers: { Accept: 'application/json' },
      });

      if (response.ok) {
        setStatus('sent');
        form.reset();
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="name" className="block text-sm font-medium mb-1">Nombre</label>
        <Input id="name" name="name" required placeholder="Tu nombre" />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium mb-1">Correo electrónico</label>
        <Input id="email" name="email" type="email" required placeholder="tu@email.com" />
      </div>
      <div>
        <label htmlFor="subject" className="block text-sm font-medium mb-1">Asunto</label>
        <Input id="subject" name="subject" required placeholder="¿Sobre qué nos escribes?" />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium mb-1">Mensaje</label>
        <Textarea id="message" name="message" required placeholder="Tu mensaje..." className="min-h-[120px]" />
      </div>
      <Button type="submit" disabled={status === 'sending'} className="w-full">
        {status === 'sending' ? 'Enviando...' : status === 'sent' ? '¡Mensaje enviado!' : 'Enviar mensaje'}
      </Button>
      {status === 'sent' && (
        <p className="text-sm text-green-600 text-center">Gracias por tu mensaje. Te responderemos pronto.</p>
      )}
      {status === 'error' && (
        <p className="text-sm text-red-600 text-center">Hubo un error. Intenta de nuevo o escríbenos a contacto@tooldev.dev</p>
      )}
    </form>
  );
}
