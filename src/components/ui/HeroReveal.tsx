import { motion } from "motion/react";
import { Children, type ReactNode } from "react";

interface HeroRevealProps {
  children: ReactNode;
}

export default function HeroReveal({ children }: HeroRevealProps) {
  return (
    <>
      {Children.map(children, (child, i) => (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: i * 0.12, ease: "easeOut" }}
        >
          {child}
        </motion.div>
      ))}
    </>
  );
}
