"use client"

import { ArrowDown, Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/4 -left-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/4 -right-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl"
          animate={{
            scale: [1.1, 1, 1.1],
            opacity: [0.4, 0.3, 0.4],
          }}
          transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 2 }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-primary/3 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.05, 1],
            opacity: [0.2, 0.35, 0.2],
          }}
          transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 1 }}
        />

        {/* Code-inspired grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(128,128,128,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(128,128,128,0.03)_1px,transparent_1px)] bg-[size:72px_72px]" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-8 text-balance"
        >
          <span className="text-gradient-animate">Mohammed Nadeem S</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="text-xl md:text-2xl lg:text-3xl text-foreground/90 font-light mb-5 text-balance"
        >
          I design and build reliable production systems.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="text-base md:text-lg text-muted-foreground mb-12"
        >
          Full Stack Developer with 7+ years of experience building and maintaining real-world web and mobile applications.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-wrap justify-center gap-8 mb-14"
        >
          {["Production Systems", "Web & Mobile Applications", "End-to-End Delivery"].map((signal, index) => (
            <motion.div
              key={signal}
              className="flex items-center gap-2.5 text-sm text-muted-foreground group cursor-default"
              whileHover={{ x: 3 }}
              transition={{ duration: 0.2 }}
            >
              <div className="w-1.5 h-1.5 rounded-full bg-primary group-hover:scale-150 group-hover:shadow-[0_0_12px_var(--primary)] transition-all duration-400" />
              <span className="group-hover:text-foreground transition-colors duration-300">{signal}</span>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button size="lg" className="gap-2 group h-12 px-8 text-base" asChild>
            <motion.a href="#projects" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              Explore Work
              <ArrowDown size={16} className="group-hover:translate-y-1 transition-transform duration-300" />
            </motion.a>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="gap-2 bg-transparent group h-12 px-8 text-base border-border/60 hover:border-primary/40 hover:bg-primary/5"
            asChild
          >
            <motion.a href="#resume" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Download size={16} className="group-hover:scale-110 transition-transform duration-300" />
              Download Resume
            </motion.a>
          </Button>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
      >
        <motion.div
          className="flex flex-col items-center gap-3"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        >
          <span className="text-xs text-muted-foreground/50 uppercase tracking-[0.2em]">Scroll</span>
          <ArrowDown size={18} className="text-muted-foreground/50" />
        </motion.div>
      </motion.div>
    </section>
  )
}
