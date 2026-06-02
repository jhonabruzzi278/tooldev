import { motion } from "motion/react";
import { Children, type ReactNode } from "react";

interface StaggerRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export default function StaggerReveal({ children, className, delay = 0 }: StaggerRevealProps) {
  return (
    <div className={className}>
      {Children.map(children, (child, i) => (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-30px" }}
          transition={{ duration: 0.4, delay: delay + i * 0.08 }}
        >
          {child}
        </motion.div>
      ))}
    </div>
  );
}
