import { useState } from 'react';
import { Icon } from '@iconify/react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
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
    <TooltipProvider>
      <div className="w-full flex flex-col items-center gap-2 mb-2 font-mono">
        <div className="flex items-center gap-0 border border-border overflow-hidden w-full max-w-lg">
          {/* Label */}
          <div className="flex items-center gap-2 px-3 py-2.5 border-r border-border shrink-0">
            <Icon icon="tabler:terminal-2" width={14} height={14} className="text-accent-lime shrink-0" />
            <span className="text-[10px] uppercase tracking-wider text-muted-foreground">
              skill
            </span>
          </div>

          {/* Command */}
          <span className="flex-1 px-3 py-2.5 text-sm text-foreground/70 dark:text-foreground/80 select-all truncate">
            {command}
          </span>

          {/* Copy button */}
          <Tooltip>
            <TooltipTrigger asChild>
              <button
                onClick={handleCopy}
                className={cn(
                  'px-3 py-2.5 border-l border-border shrink-0 transition-colors hover:bg-muted/40',
                  copied
                    ? 'text-accent-lime'
                    : 'text-muted-foreground hover:text-foreground'
                )}
                aria-label={locale === 'en' ? 'Copy install command' : 'Copiar comando'}
              >
                <Icon icon={copied ? 'tabler:check' : 'tabler:copy'} width={14} height={14} />
              </button>
            </TooltipTrigger>
            <TooltipContent>
              <p>{copied ? (locale === 'en' ? 'Copied!' : '¡Copiado!') : (locale === 'en' ? 'Copy command' : 'Copiar comando')}</p>
            </TooltipContent>
          </Tooltip>

          {/* Help link */}
          <Tooltip>
            <TooltipTrigger asChild>
              <a
                href={skillsHref}
                className="h-full px-3 py-2.5 border-l border-border text-muted-foreground hover:text-foreground hover:bg-muted/40 transition-colors flex items-center shrink-0"
                aria-label={locale === 'en' ? 'What are Skills?' : '¿Qué son las Skills?'}
              >
                <Icon icon="tabler:help-circle" width={14} height={14} />
              </a>
            </TooltipTrigger>
            <TooltipContent>
              <p>{locale === 'en' ? 'What are Skills?' : '¿Qué son las Skills?'}</p>
            </TooltipContent>
          </Tooltip>
        </div>

        <p className="text-[11px] text-muted-foreground">
          {locale === 'en' ? 'Install AI skill for this tool in your project' : 'Instala la skill de IA de esta herramienta en tu proyecto'}
        </p>
      </div>
    </TooltipProvider>
  );
}
