import { useState, useEffect } from 'react';
import { Icon } from '@iconify/react';

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setIsDark(document.documentElement.classList.contains('dark'));
  }, []);

  const toggleTheme = () => {
    const root = document.documentElement;
    const nextDark = !isDark;
    root.classList.toggle('dark', nextDark);
    localStorage.setItem('theme', nextDark ? 'dark' : 'light');
    setIsDark(nextDark);
  };

  // Avoid hydration mismatch: render a neutral placeholder until mounted
  if (!mounted) {
    return (
      <button
        className="inline-flex items-center justify-center size-9 rounded-[3px] border border-border bg-muted text-muted-foreground"
        aria-label="Cambiar tema"
        disabled
      >
        <Icon icon="tabler:sun" width={22} height={22} />
      </button>
    );
  }

  return (
    <button
      onClick={toggleTheme}
      className="inline-flex items-center justify-center size-9 rounded-[3px] border border-accent-lime bg-accent-lime text-accent-lime-foreground hover:bg-accent-lime/85 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
      aria-label={isDark ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'}
      title={isDark ? 'Modo oscuro — clic para modo claro' : 'Modo claro — clic para modo oscuro'}
    >
      <Icon icon={isDark ? 'tabler:moon' : 'tabler:sun'} width={22} height={22} />
    </button>
  );
}
