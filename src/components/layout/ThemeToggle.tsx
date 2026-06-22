import { useState, useEffect } from 'react';
import { Icon } from '@iconify/react';
import { Button } from '@/components/ui/button';

type ThemeMode = 'light' | 'dark' | 'auto';

export default function ThemeToggle() {
  const [mode, setMode] = useState<ThemeMode>('auto');
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem('theme') as ThemeMode | null;
    const currentMode = stored || 'auto';
    setMode(currentMode);
    
    if (currentMode === 'auto') {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setIsDark(document.documentElement.classList.contains('dark') || prefersDark);
    } else {
      setIsDark(currentMode === 'dark');
    }
  }, []);

  useEffect(() => {
    if (mode === 'auto') {
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      const handleChange = (e: MediaQueryListEvent) => {
        const newDark = e.matches;
        setIsDark(newDark);
        document.documentElement.classList.toggle('dark', newDark);
      };
      
      mediaQuery.addEventListener('change', handleChange);
      return () => mediaQuery.removeEventListener('change', handleChange);
    }
  }, [mode]);

  const toggleTheme = () => {
    const modes: ThemeMode[] = ['light', 'dark', 'auto'];
    const currentIndex = modes.indexOf(mode);
    const nextMode = modes[(currentIndex + 1) % modes.length];
    
    setMode(nextMode);
    localStorage.setItem('theme', nextMode);
    
    if (nextMode === 'auto') {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setIsDark(prefersDark);
      document.documentElement.classList.toggle('dark', prefersDark);
    } else {
      const newDark = nextMode === 'dark';
      setIsDark(newDark);
      document.documentElement.classList.toggle('dark', newDark);
    }
  };

  const getIcon = () => {
    if (mode === 'light') return 'tabler:sun';
    if (mode === 'dark') return 'tabler:moon';
    // auto: muestra el icono del tema activo del sistema
    return 'tabler:device-desktop';
  };

  const getTooltip = () => {
    const labels: Record<ThemeMode, string> = {
      light: 'Modo claro — clic para modo oscuro',
      dark: 'Modo oscuro — clic para modo automático',
      auto: `Modo automático (${isDark ? 'oscuro' : 'claro'}) — clic para modo claro`,
    };
    return labels[mode];
  };

  const getLabel = () => getTooltip();

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      aria-label={getLabel()}
      title={getTooltip()}
      className="relative"
    >
      <Icon icon={getIcon()} width={20} height={20} />
      {mode === 'auto' && (
        <span className="absolute bottom-1 right-1 size-1.5 rounded-full bg-primary" />
      )}
    </Button>
  );
}
