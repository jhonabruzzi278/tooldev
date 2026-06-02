import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { cn } from '@/lib/utils';

interface FAQItem {
  question: string;
  answer: string;
}

interface AnimatedFAQProps {
  items: FAQItem[];
  title?: string;
}

export default function AnimatedFAQ({ items, title = "Preguntas frecuentes" }: AnimatedFAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  if (!items || items.length === 0) return null;

  return (
    <section className="mb-12">
      <h2 className="text-2xl font-bold mb-6">{title}</h2>
      <div className="flex flex-col gap-2">
        {items.map((faq, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: i * 0.08 }}
            className="rounded-xl border border-border/50 bg-muted/5 overflow-hidden"
          >
            <button
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
              className="w-full cursor-pointer px-5 py-4 font-medium text-sm flex items-center justify-between gap-3 select-none text-left"
            >
              <span className={cn("transition-colors", openIndex === i && "text-primary")}>
                {faq.question}
              </span>
              <motion.svg
                animate={{ rotate: openIndex === i ? 180 : 0 }}
                transition={{ duration: 0.2 }}
                className="size-4 text-muted-foreground shrink-0"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m6 9 6 6 6-6" />
              </motion.svg>
            </button>
            <AnimatePresence initial={false}>
              {openIndex === i && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <div className="px-5 pb-4 text-sm text-muted-foreground leading-relaxed">
                    <p>{faq.answer}</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
