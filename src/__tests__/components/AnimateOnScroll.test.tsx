import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import AnimateOnScroll from '@/components/ui/AnimateOnScroll';

describe('AnimateOnScroll', () => {
  it('should render children', () => {
    render(
      <AnimateOnScroll>
        <p data-testid="child">Test content</p>
      </AnimateOnScroll>
    );
    expect(screen.getByTestId('child')).toBeInTheDocument();
    expect(screen.getByText('Test content')).toBeInTheDocument();
  });

  it('should apply custom className', () => {
    const { container } = render(
      <AnimateOnScroll className="custom-class">
        <p>Content</p>
      </AnimateOnScroll>
    );
    expect(container.firstChild).toHaveClass('custom-class');
  });

  it('should start with initial animation state', () => {
    const { container } = render(
      <AnimateOnScroll>
        <p>Content</p>
      </AnimateOnScroll>
    );
    const div = container.firstChild as HTMLElement;
    expect(div.style.opacity).toBe('0');
    expect(div.style.transform).toBe('translateY(24px)');
  });
});
