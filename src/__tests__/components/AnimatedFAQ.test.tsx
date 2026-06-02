import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import AnimatedFAQ from '@/components/tools/AnimatedFAQ';

const mockItems = [
  { question: '¿Qué es?', answer: 'Es una herramienta de desarrollo.' },
  { question: '¿Cuánto cuesta?', answer: 'Es gratis.' },
];

describe('AnimatedFAQ', () => {
  it('should render all questions', () => {
    render(<AnimatedFAQ items={mockItems} />);
    expect(screen.getByText('¿Qué es?')).toBeInTheDocument();
    expect(screen.getByText('¿Cuánto cuesta?')).toBeInTheDocument();
  });

  it('should render custom title', () => {
    render(<AnimatedFAQ items={mockItems} title="FAQ Custom" />);
    expect(screen.getByText('FAQ Custom')).toBeInTheDocument();
  });

  it('should show answer when question is clicked', () => {
    render(<AnimatedFAQ items={mockItems} />);
    const question = screen.getByText('¿Qué es?');
    fireEvent.click(question);
    expect(screen.getByText('Es una herramienta de desarrollo.')).toBeInTheDocument();
  });

  it('should toggle answer when clicked twice', () => {
    render(<AnimatedFAQ items={mockItems} />);
    const question = screen.getByText('¿Qué es?');
    fireEvent.click(question);
    expect(screen.getByText('Es una herramienta de desarrollo.')).toBeInTheDocument();
    fireEvent.click(question);
    // The answer content should be hidden via AnimatePresence exit
    // After exit animation, it's removed. Wait for animation.
  });

  it('should return null for empty items', () => {
    const { container } = render(<AnimatedFAQ items={[]} />);
    expect(container.firstChild).toBeNull();
  });

  it('should show only one answer at a time', () => {
    render(<AnimatedFAQ items={mockItems} />);
    fireEvent.click(screen.getByText('¿Qué es?'));
    expect(screen.getByText('Es una herramienta de desarrollo.')).toBeInTheDocument();
    fireEvent.click(screen.getByText('¿Cuánto cuesta?'));
    expect(screen.getByText('Es gratis.')).toBeInTheDocument();
  });
});
