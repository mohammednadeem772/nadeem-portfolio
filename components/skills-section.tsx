"use client"

import { motion } from "framer-motion"

const skillGroups = [
  {
    title: "Frontend Systems",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Redux", "React Query"],
  },
  {
    title: "Backend Systems",
    skills: ["Node.js", "Express", "PostgreSQL", "MongoDB", "Redis", "GraphQL"],
  },
  {
    title: "Mobile Systems",
    skills: ["React Native", "Expo", "iOS", "Android", "Push Notifications"],
  },
  {
    title: "Data & Cloud",
    skills: ["AWS", "GCP", "Supabase", "Firebase", "S3", "CloudFront"],
  },
  {
    title: "Tooling & DevOps",
    skills: ["Git", "Docker", "CI/CD", "GitHub Actions", "Vercel", "Testing"],
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
}

export function SkillsSection() {
  return (
    <section id="skills" className="py-28 md:py-36">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-5 text-balance">Technical Capabilities</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg text-balance">
            Tools and technologies I use to build production systems.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {skillGroups.map((group) => (
            <motion.div
              key={group.title}
              variants={cardVariants}
              whileHover={{ y: -4, transition: { duration: 0.3 } }}
              className="p-7 rounded-2xl border border-border/60 glass-card hover:border-primary/30 transition-all duration-400"
            >
              <h3 className="text-sm font-semibold text-primary mb-5 uppercase tracking-wider">{group.title}</h3>
              <div className="flex flex-wrap gap-2.5">
                {group.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: skillIndex * 0.03, duration: 0.3 }}
                    whileHover={{ scale: 1.05 }}
                    className="px-3 py-1.5 text-sm rounded-lg bg-secondary/80 text-secondary-foreground hover:bg-primary/15 hover:text-primary cursor-default transition-all duration-300"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
