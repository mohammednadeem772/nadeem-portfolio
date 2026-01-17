"use client";

import { Layers, Box, Shield, Zap } from "lucide-react";
import { motion } from "framer-motion";

const values = [
  {
    icon: Layers,
    title: "Systems over Short-Term Fixes",
    description:
      "I focus on building maintainable systems with clear architecture rather than quick patches that break later.",
  },
  {
    icon: Box,
    title: "Production-Ready Engineering",
    description:
      "Experienced in working with live systems—debugging production issues, improving reliability, and shipping stable features.",
  },
  {
    icon: Shield,
    title: "Ownership & Accountability",
    description:
      "I take responsibility across the stack, from understanding requirements to deployment and post-release support.",
  },
  {
    icon: Zap,
    title: "Practical Solutions over Hype",
    description:
      "I choose proven technologies and pragmatic solutions that fit business needs instead of chasing trends.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export function ValueSection() {
  return (
    <section id="about" className="py-28 md:py-36">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-5 text-balance">
            Why Work With Me
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg text-balance">
            A mindset shaped by years of building systems that matter.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {values.map((value) => (
            <motion.div
              key={value.title}
              variants={itemVariants}
              whileHover={{ y: -4, transition: { duration: 0.3 } }}
              className="group relative p-8 rounded-2xl border border-border/60 glass-card hover:border-primary/30 transition-all duration-400"
            >
              <div className="flex items-start gap-6">
                <motion.div
                  className="p-3.5 rounded-xl bg-primary/10 text-primary group-hover:bg-primary/15 transition-colors duration-400"
                  whileHover={{ scale: 1.05, rotate: 3 }}
                  transition={{ duration: 0.3 }}
                >
                  <value.icon size={24} />
                </motion.div>
                <div>
                  <h3 className="text-lg font-semibold mb-2.5 group-hover:text-primary transition-colors duration-300">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
