"use client"

import { Download, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export function ResumeSection() {
  return (
    <section id="resume" className="py-28 md:py-36 border-t border-border/50">
      <div className="max-w-2xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="inline-flex p-5 rounded-2xl glass-card border border-border/60 mb-10"
        >
          <FileText size={52} className="text-primary" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="text-3xl md:text-5xl font-bold mb-5 text-balance"
        >
          Resume
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="text-muted-foreground mb-10 text-lg text-balance"
        >
          A comprehensive overview of my experience, skills, and achievements.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        >
          <Button size="lg" className="gap-2.5 h-12 px-8 text-base" asChild>
            <motion.a
              href="/Mohammed-Nadeem-S-Resume.pdf"
              download="Mohammed-Nadeem-S-Resume.pdf"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <Download size={18} />
              Download Resume
            </motion.a>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
