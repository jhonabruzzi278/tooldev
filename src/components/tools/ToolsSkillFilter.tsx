import { useState, useEffect } from 'react';
import { Icon } from '@iconify/react';
import { cn } from '@/lib/utils';

interface ToolsSkillFilterProps {
  totalCount: number;
  skillCount: number;
  gridSelector: string;
  label: string;
  locale?: 'es' | 'en';
}

export default function ToolsSkillFilter({
  totalCount,
  skillCount,
  gridSelector,
  label,
  locale = 'es',
}: ToolsSkillFilterProps) {
  const [active, setActive] = useState(false);

  useEffect(() => {
    const grid = document.querySelector(gridSelector);
    if (!grid) return;
    const cards = grid.querySelectorAll<HTMLElement>('[data-verified]');
    cards.forEach((card) => {
      const hasSkill = card.dataset.verified === 'true';
      card.classList.toggle('hidden', active && !hasSkill);
    });
  }, [active, gridSelector]);

  const shownCount = active ? skillCount : totalCount;
  const shownLabel = locale === 'en'
    ? shownCount === 1 ? 'tool' : 'tools'
    : shownCount === 1 ? 'herramienta' : 'herramientas';

  return (
    <div className="flex flex-wrap items-center gap-3 mb-6 font-mono">
      <button
        type="button"
        onClick={() => setActive((v) => !v)}
        aria-pressed={active}
        className={cn(
          'inline-flex items-center gap-1.5 px-3 py-1.5 rounded-[3px] border text-[10px] uppercase tracking-wider transition-colors',
          active
            ? 'border-accent-lime text-accent-lime bg-accent-lime/10'
            : 'border-foreground/45 text-muted-foreground hover:text-foreground hover:border-foreground/60'
        )}
      >
        <Icon icon="tabler:terminal-2" width={14} height={14} />
        {label}
        <span className="opacity-70">({skillCount})</span>
      </button>
      <span className="text-xs text-muted-foreground">
        {shownCount} {shownLabel}
      </span>
    </div>
  );
}
