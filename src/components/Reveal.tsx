import type { PropsWithChildren } from "react";
import { motion } from "framer-motion";

type RevealProps = PropsWithChildren<{
  className?: string;
  delay?: number;
  duration?: number;
  y?: number;
  amount?: number;
}>;

export function Reveal({
  children,
  className,
  delay = 0,
  duration = 0.7,
  y = 35,
  amount = 0.18,
}: RevealProps) {
  return (
    <motion.div
      className={className}
      initial={{
        opacity: 0,
        y,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount,
      }}
      transition={{
        duration,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
}