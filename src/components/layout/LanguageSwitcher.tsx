import { Icon } from '@iconify/react';
import type { Locale } from '@/lib/i18n/translations';

interface LanguageSwitcherProps {
  locale: Locale;
}

export default function LanguageSwitcher({ locale }: LanguageSwitcherProps) {
  const otherLocale: Locale = locale === 'es' ? 'en' : 'es';
  const href = otherLocale === 'en' ? '/en' : '/';

  return (
    <a
      href={href}
      className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-medium text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors"
      aria-label={locale === 'es' ? 'Switch to English' : 'Cambiar a Español'}
    >
      <Icon icon="tabler:language" width={14} height={14} />
      {otherLocale === 'en' ? 'EN' : 'ES'}
    </a>
  );
}
