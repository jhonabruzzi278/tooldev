import { useState } from 'react';
import { cn } from '@/lib/utils';

interface ToolShareButtonsProps {
  toolName: string;
  toolUrl: string;
}

export default function ToolShareButtons({ toolName, toolUrl }: ToolShareButtonsProps) {
  const [saved, setSaved] = useState(() => {
    try {
      const savedTools = JSON.parse(localStorage.getItem('savedTools') || '[]');
      return savedTools.includes(toolUrl);
    } catch {
      return false;
    }
  });
  const [copied, setCopied] = useState(false);

  const handleShare = async () => {
    if (navigator.share) {
      await navigator.share({ title: toolName, url: toolUrl });
    } else {
      await navigator.clipboard.writeText(toolUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleSave = () => {
    try {
      const savedTools = JSON.parse(localStorage.getItem('savedTools') || '[]');
      if (saved) {
        const updated = savedTools.filter((u: string) => u !== toolUrl);
        localStorage.setItem('savedTools', JSON.stringify(updated));
        setSaved(false);
      } else {
        savedTools.push(toolUrl);
        localStorage.setItem('savedTools', JSON.stringify(savedTools));
        setSaved(true);
      }
    } catch {
      // ignore
    }
  };

  return (
    <div className="flex items-center gap-1">
      <button
        onClick={handleShare}
        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors"
        aria-label={copied ? '¡Copiado!' : 'Compartir'}
      >
        <svg className="size-3.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" x2="15.42" y1="13.51" y2="17.49"/><line x1="15.41" x2="8.59" y1="6.51" y2="10.49"/></svg>
        {copied ? '¡Copiado!' : 'Compartir'}
      </button>
      <button
        onClick={handleSave}
        className={cn(
          'inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-colors',
          saved
            ? 'text-primary bg-primary/10 hover:bg-primary/15'
            : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
        )}
        aria-label={saved ? 'Quitar de guardados' : 'Guardar'}
      >
        <svg className="size-3.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill={saved ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"/></svg>
        {saved ? 'Guardado' : 'Guardar'}
      </button>
    </div>
  );
}
