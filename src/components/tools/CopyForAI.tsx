import { useState } from 'react';
import { Icon } from '@iconify/react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import type { Locale } from '@/lib/i18n/translations';
import { translations } from '@/lib/i18n/translations';

interface CopyForAIProps {
  toolName: string;
  toolCategory: string;
  toolOpenSource: boolean;
  toolDescription: string;
  toolAlternatives: string[];
  toolPricing: string;
  toolTechnicalLevel: string;
  locale?: Locale;
}

export default function CopyForAI({
  toolName,
  toolCategory,
  toolOpenSource,
  toolDescription,
  toolAlternatives,
  toolPricing,
  toolTechnicalLevel,
  locale = 'es',
}: CopyForAIProps) {
  const [copied, setCopied] = useState(false);
  const lang = translations[locale];

  const generateSummary = () => {
    const lines = [
      `${lang.tools.category}: ${toolName}`,
      `${locale === 'en' ? 'Category' : 'Categoría'}: ${toolCategory}`,
      `${locale === 'en' ? 'Pricing' : 'Precio'}: ${toolPricing}`,
      `${locale === 'en' ? 'Level' : 'Nivel'}: ${toolTechnicalLevel}`,
      `${lang.tools.openSource}: ${toolOpenSource ? lang.tools.yes : lang.tools.no}`,
      '',
      toolDescription,
    ];
    if (toolAlternatives.length > 0) {
      lines.push('', `${locale === 'en' ? 'Alternatives' : 'Alternativas'}: ${toolAlternatives.join(', ')}.`);
    }
    return lines.join('\n');
  };

  const handleCopy = async () => {
    const summary = generateSummary();
    await navigator.clipboard.writeText(summary);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Button
      variant="outline"
      onClick={handleCopy}
      className={cn('gap-2 transition-all duration-300', copied && 'border-green-500/50 text-green-600 dark:text-green-400 bg-green-500/10')}
    >
      {copied ? (
        <>
          <Icon icon="tabler:check" width={16} height={16} />
          {lang.tools.copied}
        </>
      ) : (
        <>
          <Icon icon="tabler:copy" width={16} height={16} />
          {lang.tools.copyForAI}
        </>
      )}
    </Button>
  );
}
