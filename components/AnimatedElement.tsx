"use client";

import type React from "react";
import { motion } from "framer-motion";

interface AnimatedElementProps {
  children: React.ReactNode;
  delay?: number;
}

const AnimatedElement: React.FC<AnimatedElementProps> = ({
  children,
  delay = 0,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      data-oid="nn3wz8m"
    >
      {children}
    </motion.div>
  );
};

export default AnimatedElement;
