import { useState } from 'react';
import { Icon } from '@iconify/react';
import { Button } from '@/components/ui/button';
import type { Locale } from '@/lib/i18n/translations';

interface NavLink {
  href: string;
  label: string;
}

interface MobileMenuProps {
  links: NavLink[];
  locale?: Locale;
}

export default function MobileMenu({ links, locale = 'es' }: MobileMenuProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:hidden">
      <Button
        variant="ghost"
        size="icon"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Menú"
      >
        {isOpen ? <Icon icon="tabler:x" width={20} height={20} /> : <Icon icon="tabler:menu-2" width={20} height={20} />}
      </Button>

      {isOpen && (
        <div className="absolute top-16 left-0 right-0 bg-background border-b border-border shadow-lg z-50">
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-1">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-lg px-3 py-2.5 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href={locale === 'en' ? '/' : '/en'}
              className="text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-lg px-3 py-2.5 transition-colors border-t border-border/50 mt-2 pt-3"
            >
              {locale === 'en' ? 'Español' : 'English'}
            </a>
          </nav>
        </div>
      )}
    </div>
  );
}
