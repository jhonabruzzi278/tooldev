import { useState } from 'react';
import { Button } from '@/components/ui/button';

interface CopyForAIProps {
  toolName: string;
  toolCategory: string;
  toolOpenSource: boolean;
  toolDescription: string;
  toolAlternatives: string[];
}

export default function CopyForAI({
  toolName,
  toolCategory,
  toolOpenSource,
  toolDescription,
  toolAlternatives,
}: CopyForAIProps) {
  const [copied, setCopied] = useState(false);

  const generateSummary = () => {
    const lines = [
      `Nombre: ${toolName}`,
      `Categoría: ${toolCategory}`,
      `Open Source: ${toolOpenSource ? 'Sí' : 'No'}`,
      toolDescription,
    ];
    if (toolAlternatives.length > 0) {
      lines.push(`Alternativas: ${toolAlternatives.join(', ')}.`);
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
    <Button variant="outline" onClick={handleCopy}>
      {copied ? '¡Copiado!' : 'Copiar para IA'}
    </Button>
  );
}
