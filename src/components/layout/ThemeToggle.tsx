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
    if (mode === 'auto') {
      return isDark ? 'tabler:device-desktop' : 'tabler:device-desktop';
    }
    return isDark ? 'tabler:sun' : 'tabler:moon';
  };

  const getLabel = () => {
    if (mode === 'auto') {
      return isDark 
        ? 'Tema automático (oscuro) - Clic para modo claro' 
        : 'Tema automático (claro) - Clic para modo oscuro';
    }
    return isDark ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro';
  };

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      aria-label={getLabel()}
      title={getLabel()}
    >
      <Icon icon={getIcon()} width={20} height={20} />
    </Button>
  );
}
