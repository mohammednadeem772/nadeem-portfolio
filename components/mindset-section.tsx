"use client"

import { GitBranch, Cpu, Bug, FileCode } from "lucide-react"
import { motion } from "framer-motion"

const mindsets = [
  { icon: GitBranch, label: "Architecture Thinking" },
  { icon: Cpu, label: "Scalability & Maintainability" },
  { icon: Bug, label: "Production Debugging" },
  { icon: FileCode, label: "Code That Lasts" },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, scale: 0.9, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  },
}

export function MindsetSection() {
  return (
    <section className="py-28 md:py-36 border-y border-border/50">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-5 text-balance">Engineering Mindset</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg text-balance">
            Thinking in systems, not just code.
          </p>
        </motion.div>

        <motion.div
          className="flex flex-wrap justify-center gap-4 md:gap-5"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {mindsets.map((item) => (
            <motion.div
              key={item.label}
              variants={itemVariants}
              whileHover={{ scale: 1.03, y: -2 }}
              transition={{ duration: 0.25 }}
              className="flex items-center gap-3.5 px-6 py-4 rounded-full border border-border/60 glass-card hover:border-primary/30 cursor-default transition-colors duration-400"
            >
              <item.icon size={18} className="text-primary" />
              <span className="text-sm font-medium">{item.label}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
