"use client";

import { motion } from "framer-motion";

export function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="py-10 border-t border-border/50"
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <div>
            © {new Date().getFullYear()} Mohammed Nadeem S. All rights reserved.
          </div>
          <div className="flex items-center gap-1.5">
            <span>From idea to</span>
            <span className="text-primary font-medium">production</span>
            <span className="opacity-70">— built with</span>
            <span className="text-primary font-medium">purpose</span>
          </div>
        </div>
      </div>
    </motion.footer>
  );
}
