import { useState } from 'react';
import { Icon } from '@iconify/react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

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
        <div className="flex items-center gap-0 border border-foreground/45 bg-muted overflow-hidden w-full max-w-lg">
          {/* Label */}
          <div className="flex items-center gap-2 px-3 py-2.5 border-r border-foreground/20 shrink-0">
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
            <TooltipTrigger
              render={
                <button
                  onClick={handleCopy}
                  className="px-3 py-2.5 border-l border-foreground/20 shrink-0 bg-accent-lime text-accent-lime-foreground hover:bg-accent-lime/85 transition-colors"
                  aria-label={locale === 'en' ? 'Copy install command' : 'Copiar comando'}
                />
              }
            >
              <Icon icon={copied ? 'tabler:check' : 'tabler:copy'} width={14} height={14} />
            </TooltipTrigger>
            <TooltipContent>
              <p>{copied ? (locale === 'en' ? 'Copied!' : '¡Copiado!') : (locale === 'en' ? 'Copy command' : 'Copiar comando')}</p>
            </TooltipContent>
          </Tooltip>

          {/* Help link */}
          <Tooltip>
            <TooltipTrigger
              render={
                <a
                  href={skillsHref}
                  className="h-full px-3 py-2.5 border-l border-foreground/20 text-foreground/70 hover:text-accent-lime hover:bg-background/60 transition-colors flex items-center shrink-0"
                  aria-label={locale === 'en' ? 'What are Skills?' : '¿Qué son las Skills?'}
                />
              }
            >
              <Icon icon="tabler:help-circle" width={14} height={14} />
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
