import { useState } from 'react';
import { Icon } from '@iconify/react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import type { Locale } from '@/lib/i18n/translations';
import { translations } from '@/lib/i18n/translations';

interface HowToUseStep {
  step: number;
  title: string;
  description: string;
}

interface WhenToUseCase {
  title: string;
  description: string;
}

interface Example {
  title: string;
  code: string;
  output?: string;
}

interface Tip {
  text: string;
}

interface FAQItem {
  question: string;
  answer: string;
}

interface CopyForAIProps {
  toolName: string;
  toolCategory: string;
  toolOpenSource: boolean;
  toolDescription: string;
  toolAlternatives: string[];
  toolPricing: string;
  toolTechnicalLevel: string;
  toolLicense: string;
  toolTags: string[];
  toolOfficialSite: string;
  toolGithub: string;
  toolCompatibility: string[];
  toolFeatures: string[];
  toolHowToUse: HowToUseStep[];
  toolWhenToUse: WhenToUseCase[];
  toolExamples: Example[];
  toolTips: Tip[];
  toolFaq: FAQItem[];
  toolVerified?: boolean;
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
  toolLicense,
  toolTags,
  toolOfficialSite,
  toolGithub,
  toolCompatibility,
  toolFeatures,
  toolHowToUse,
  toolWhenToUse,
  toolExamples,
  toolTips,
  toolFaq,
  toolVerified = false,
  locale = 'es',
}: CopyForAIProps) {
  const [copied, setCopied] = useState(false);

  const skillName = toolName.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');

  const generateSkill = () => {
    const lines: string[] = [];

    // Frontmatter
    lines.push('---');
    lines.push(`name: ${skillName}`);
    const triggers = toolTags.slice(0, 5).map(t => `"${toolName.toLowerCase()} ${t}"`);
    triggers.unshift(`"${toolName.toLowerCase()}"`);
    const triggerPhrases = triggers.slice(0, 4).join(', ');
    lines.push(`description: ${toolDescription} Úsala cuando el usuario mencione o pregunte sobre ${triggerPhrases}.`);
    lines.push('---');
    lines.push('');

    // Title
    lines.push(`# ${toolName}`);
    lines.push('');

    // Instructions
    lines.push('## Instructions');
    lines.push('- Usa esta guía como referencia oficial para entender, evaluar o implementar esta herramienta.');
    lines.push('- Toda la información está validada contra la documentación oficial y fuentes primarias.');
    if (toolOpenSource) lines.push('- Es una herramienta open source — verifica la licencia antes de uso comercial.');
    lines.push('');
    lines.push('## Key Information');
    lines.push(`- **Category:** ${toolCategory}`);
    lines.push(`- **Pricing:** ${toolPricing}`);
    if (toolLicense) lines.push(`- **License:** ${toolLicense}`);
    lines.push(`- **Technical Level:** ${toolTechnicalLevel}`);
    lines.push(`- **Compatibility:** ${toolCompatibility.join(', ')}`);
    lines.push(`- **Official Site:** ${toolOfficialSite}`);
    if (toolGithub) lines.push(`- **GitHub:** ${toolGithub}`);
    lines.push('');
    if (toolAlternatives.length > 0) {
      lines.push(`- **Alternatives:** ${toolAlternatives.join(', ')}`);
      lines.push('');
    }

    // Features
    if (toolFeatures.length > 0) {
      lines.push('## Features');
      for (const f of toolFeatures) {
        lines.push(`- ${f}`);
      }
      lines.push('');
    }

    // Steps (How to Use)
    if (toolHowToUse.length > 0) {
      lines.push('## Steps');
      for (const step of toolHowToUse) {
        lines.push(`### ${step.step}. ${step.title}`);
        lines.push(step.description);
        lines.push('');
      }
    }

    // When to Use
    if (toolWhenToUse.length > 0) {
      lines.push('## When to Use');
      for (const w of toolWhenToUse) {
        lines.push(`- **${w.title}:** ${w.description}`);
      }
      lines.push('');
    }

    // Examples
    if (toolExamples.length > 0) {
      lines.push('## Examples');
      for (const ex of toolExamples) {
        lines.push(`### ${ex.title}`);
        lines.push('```');
        lines.push(ex.code);
        lines.push('```');
        if (ex.output) {
          lines.push('');
          lines.push(`**Output:** ${ex.output}`);
        }
        lines.push('');
      }
    }

    // Tips
    if (toolTips.length > 0) {
      lines.push('## Tips');
      for (const tip of toolTips) {
        lines.push(`- ${tip.text}`);
      }
      lines.push('');
    }

    // FAQ
    if (toolFaq.length > 0) {
      lines.push('## FAQ');
      for (const faq of toolFaq) {
        lines.push(`- **${faq.question}** ${faq.answer}`);
      }
      lines.push('');
    }

    // Troubleshooting
    lines.push('## Troubleshooting');
    lines.push('- **Official Site Unreachable:** Verify the URL at ' + toolOfficialSite);
    if (toolGithub) lines.push('- **Source Code Issues:** Check the repository at ' + toolGithub + ' for known issues and discussions.');
    lines.push('- **Version Mismatch:** Always refer to the official docs for the latest version-specific guidance.');

    // Installation (only for verified tools)
    if (toolVerified) {
      lines.push('');
      lines.push('## Installation');
      lines.push(`npx tooldev-skills install ${skillName}`);
    }

    return lines.join('\n');
  };

  const handleCopy = async () => {
    const skill = generateSkill();
    await navigator.clipboard.writeText(skill);
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
          {translations[locale].tools.copied}
        </>
      ) : (
        <>
          <Icon icon="tabler:copy" width={16} height={16} />
          {translations[locale].tools.copyForAI}
        </>
      )}
    </Button>
  );
}
