import type { ComponentProps } from 'react';
import { Button } from '@/components/ui/button';

interface LinkButtonProps extends Omit<ComponentProps<typeof Button>, 'render'> {
  href: string;
}

export function LinkButton({ href, children, ...props }: LinkButtonProps) {
  return (
    <Button render={<a href={href} />} nativeButton={false} {...props}>
      {children}
    </Button>
  );
}
