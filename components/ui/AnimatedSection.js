"use client";

import { motion } from 'framer-motion';

export function AnimatedSection({ 
  children, 
  className = '', 
  delay = 0,
  staggerChildren = false
}) {
  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.6, 
        ease: "easeOut",
        delay,
        ...(staggerChildren && { staggerChildren: 0.1, delayChildren: delay })
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  if (staggerChildren) {
    return (
      <motion.div
        className={className}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {/* We need to map through children and wrap them in motion.div for staggering to work properly 
            if they aren't already motion components. For simplicity, we assume the user of this component
            will pass motion components as children if staggerChildren is true, or we can just apply it to the container. */}
        {children}
      </motion.div>
    );
  }

  return (
    <motion.div
      className={className}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      {children}
    </motion.div>
  );
}

// Helper component for staggered children
export function AnimatedItem({ children, className = '' }) {
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <motion.div variants={itemVariants} className={className}>
      {children}
    </motion.div>
  );
}

