import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import type { Locale } from '@/lib/i18n/translations';
import { translations } from '@/lib/i18n/translations';

interface ContactFormProps {
  locale?: Locale;
}

export default function ContactForm({ locale = 'es' }: ContactFormProps) {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');
  const lang = translations[locale];

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('sending');

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch('https://formspree.io/f/maqzyyde', {
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
        <label htmlFor="name" className="block text-sm font-medium mb-1">{lang.contact.formName}</label>
        <Input id="name" name="name" required placeholder={lang.contact.formPlaceholderName} />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium mb-1">{lang.contact.formEmail}</label>
        <Input id="email" name="email" type="email" required placeholder={lang.contact.formPlaceholderEmail} />
      </div>
      <div>
        <label htmlFor="subject" className="block text-sm font-medium mb-1">{lang.contact.formSubject}</label>
        <Input id="subject" name="subject" required placeholder={lang.contact.formPlaceholderSubject} />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium mb-1">{lang.contact.formMessage}</label>
        <Textarea id="message" name="message" required placeholder={lang.contact.formPlaceholderMessage} className="min-h-[120px]" />
      </div>
      <Button type="submit" disabled={status === 'sending'} className="w-full">
        {status === 'sending' ? lang.contact.formSending : status === 'sent' ? lang.contact.formSent : lang.contact.formSubmit}
      </Button>
      {status === 'sent' && (
        <p className="text-sm text-green-600 text-center">{lang.contact.formSentMsg}</p>
      )}
      {status === 'error' && (
        <p className="text-sm text-red-600 text-center">{lang.contact.formError}</p>
      )}
    </form>
  );
}
