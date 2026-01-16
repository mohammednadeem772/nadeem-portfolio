"use client"

import { motion } from "framer-motion"

const experiences = [
  {
    period: "2022 — Present",
    role: "Senior Full Stack Engineer",
    company: "Tech Company",
    description:
      "Leading architecture decisions and building scalable microservices. Owned end-to-end delivery of critical product features serving millions of users.",
    impact: ["Scaled", "Led", "Owned"],
  },
  {
    period: "2019 — 2022",
    role: "Full Stack Engineer",
    company: "Growth Startup",
    description:
      "Built core product infrastructure from ground up. Implemented real-time features and optimized database performance for 10x traffic growth.",
    impact: ["Built", "Optimized", "Shipped"],
  },
  {
    period: "2017 — 2019",
    role: "Software Engineer",
    company: "Product Company",
    description:
      "Developed web and mobile applications. Established testing practices and improved deployment pipelines.",
    impact: ["Developed", "Established", "Improved"],
  },
  {
    period: "2016 — 2017",
    role: "Junior Developer",
    company: "Agency",
    description: "Started career building client projects. Learned fundamentals of production software development.",
    impact: ["Learned", "Delivered", "Grew"],
  },
]

export function ExperienceSection() {
  return (
    <section id="experience" className="py-28 md:py-36 border-t border-border/50">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-5 text-balance">Experience</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg text-balance">
            A journey of increasing responsibility and system complexity.
          </p>
        </motion.div>

        <div className="relative">
          <motion.div
            className="absolute left-0 md:left-1/2 top-0 w-px bg-border/60 md:-translate-x-1/2"
            initial={{ height: 0 }}
            whileInView={{ height: "100%" }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
          />

          <div className="space-y-14">
            {experiences.map((exp, index) => (
              <div
                key={exp.period}
                className={`relative pl-8 md:pl-0 ${
                  index % 2 === 0 ? "md:pr-[calc(50%+2.5rem)]" : "md:pl-[calc(50%+2.5rem)]"
                }`}
              >
                <motion.div
                  className="absolute left-0 md:left-1/2 top-0 w-3 h-3 rounded-full bg-primary border-4 border-background md:-translate-x-1/2"
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 + 0.3, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                >
                  <motion.div
                    className="absolute inset-0 rounded-full bg-primary"
                    animate={{ scale: [1, 2, 1], opacity: [0.4, 0, 0.4] }}
                    transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                  />
                </motion.div>

                <motion.div
                  initial={{
                    opacity: 0,
                    x: index % 2 === 0 ? -30 : 30,
                  }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: index * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  whileHover={{ y: -4, transition: { duration: 0.3 } }}
                  className="p-7 rounded-2xl border border-border/60 glass-card hover:border-primary/30 transition-all duration-400"
                >
                  <div className="text-xs text-primary font-mono mb-3 tracking-wide">{exp.period}</div>
                  <h3 className="text-xl font-semibold mb-1.5">{exp.role}</h3>
                  <div className="text-sm text-muted-foreground mb-4">{exp.company}</div>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-5">{exp.description}</p>
                  <div className="flex gap-2">
                    {exp.impact.map((verb, verbIndex) => (
                      <motion.span
                        key={verb}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 + verbIndex * 0.05 + 0.2, duration: 0.3 }}
                        className="px-2.5 py-1 text-xs rounded-md bg-primary/10 text-primary font-medium hover:bg-primary/20 transition-colors duration-300"
                      >
                        {verb}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
