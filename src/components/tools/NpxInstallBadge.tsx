import { useState } from 'react';
import { Icon } from '@iconify/react';
import { cn } from '@/lib/utils';

interface NpxInstallBadgeProps {
  toolName: string;
  locale?: 'es' | 'en';
}

export default function NpxInstallBadge({ toolName, locale = 'es' }: NpxInstallBadgeProps) {
  const [copied, setCopied] = useState(false);

  const slug = toolName.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
  const command = `npx tooldev-skills install ${slug}`;
  const skillsHref = locale === 'en' ? '/en/skills' : '/skills';

  const handleCopy = async () => {
    await navigator.clipboard.writeText(command);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full flex flex-col items-center gap-1.5 mb-2">
      <div className="flex items-center gap-2 rounded-xl border border-border/60 bg-muted/40 px-4 py-2.5 text-sm font-mono w-full max-w-md justify-between">
        <div className="flex items-center gap-2 min-w-0">
          <Icon icon="tabler:terminal-2" width={15} height={15} className="text-muted-foreground shrink-0" />
          <span className="text-foreground/80 select-all truncate">{command}</span>
        </div>
        <div className="flex items-center gap-1 shrink-0">
          <button
            onClick={handleCopy}
            className={cn(
              'p-1.5 rounded-md hover:bg-muted transition-colors',
              copied ? 'text-green-600 dark:text-green-400' : 'text-muted-foreground hover:text-foreground'
            )}
            aria-label={locale === 'en' ? 'Copy install command' : 'Copiar comando de instalación'}
          >
            <Icon icon={copied ? 'tabler:check' : 'tabler:copy'} width={14} height={14} />
          </button>
          <a
            href={skillsHref}
            className="p-1.5 rounded-md hover:bg-muted text-muted-foreground hover:text-foreground transition-colors"
            aria-label={locale === 'en' ? 'What are Skills?' : '¿Qué son las Skills?'}
            title={locale === 'en' ? 'What are Skills?' : '¿Qué son las Skills?'}
          >
            <Icon icon="tabler:help-circle" width={14} height={14} />
          </a>
        </div>
      </div>
      <span className="text-[11px] text-muted-foreground">
        {locale === 'en' ? 'Install AI skill for this tool' : 'Instalar skill de IA para esta herramienta'}
      </span>
    </div>
  );
}
