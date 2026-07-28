import { useState } from 'react';
import { Icon } from '@/components/ui/Icon';

interface ToolShareButtonsProps {
  toolName: string;
  toolUrl: string;
}

export default function ToolShareButtons({ toolName, toolUrl }: ToolShareButtonsProps) {
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

  return (
    <button
      onClick={handleShare}
      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors border border-border"
      aria-label={copied ? '¡Copiado!' : 'Compartir'}
    >
      <Icon icon={copied ? 'tabler:check' : 'tabler:share-2'} width={16} height={16} />
      {copied ? '¡Copiado!' : 'Compartir'}
    </button>
  );
}
