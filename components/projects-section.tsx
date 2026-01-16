"use client"

import { useState } from "react"
import { X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

const projects = [
  {
    title: "E-Commerce Platform",
    problem: "Legacy system couldn't handle peak traffic",
    solution: "Rebuilt with microservices architecture",
    tech: ["Next.js", "Node.js", "PostgreSQL", "Redis", "AWS"],
    details:
      "Designed and implemented a scalable e-commerce platform handling 100k+ daily active users. Implemented real-time inventory management and optimized checkout flow reducing cart abandonment by 30%.",
  },
  {
    title: "Real-Time Analytics Dashboard",
    problem: "No visibility into business metrics",
    solution: "Built live dashboard with sub-second updates",
    tech: ["React", "WebSockets", "ClickHouse", "D3.js"],
    details:
      "Created a real-time analytics platform processing millions of events daily. Implemented efficient data pipelines and visualization components for executive decision-making.",
  },
  {
    title: "Mobile Banking App",
    problem: "Poor user experience on mobile",
    solution: "Native-feel cross-platform application",
    tech: ["React Native", "TypeScript", "GraphQL", "Biometrics"],
    details:
      "Developed a secure mobile banking application with biometric authentication, real-time transactions, and offline support. Achieved 4.8+ star rating on app stores.",
  },
  {
    title: "Content Management System",
    problem: "Content team blocked by engineering",
    solution: "Flexible headless CMS with visual editor",
    tech: ["Next.js", "Sanity", "TypeScript", "Vercel"],
    details:
      "Built a headless CMS enabling content teams to publish independently. Reduced content deployment time from days to minutes while maintaining brand consistency.",
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
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

export function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<(typeof projects)[0] | null>(null)

  return (
    <section id="projects" className="py-28 md:py-36 border-t border-border/50">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-5 text-balance">Selected Projects</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg text-balance">
            Real problems. Practical solutions. Lasting impact.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {projects.map((project) => (
            <motion.div
              key={project.title}
              variants={cardVariants}
              whileHover={{ y: -6, transition: { duration: 0.3 } }}
              onClick={() => setSelectedProject(project)}
              className="group relative p-7 rounded-2xl border border-border/60 glass-card hover:border-primary/30 transition-all duration-400 cursor-pointer"
            >
              <div className="aspect-video rounded-xl bg-secondary/40 mb-7 flex items-center justify-center overflow-hidden relative">
                <motion.div
                  className="text-5xl font-bold text-muted-foreground/20"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.4 }}
                >
                  {project.title.charAt(0)}
                </motion.div>
                <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
              </div>

              <h3 className="text-xl font-semibold mb-4 group-hover:text-primary transition-colors duration-300">
                {project.title}
              </h3>

              <div className="space-y-2.5 mb-5">
                <p className="text-sm text-muted-foreground">
                  <span className="text-foreground/70">Problem:</span> {project.problem}
                </p>
                <p className="text-sm text-muted-foreground">
                  <span className="text-foreground/70">Solution:</span> {project.solution}
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                {project.tech.slice(0, 4).map((t) => (
                  <span
                    key={t}
                    className="px-2.5 py-1 text-xs rounded-md bg-secondary/80 text-secondary-foreground group-hover:bg-primary/10 group-hover:text-primary transition-colors duration-300"
                  >
                    {t}
                  </span>
                ))}
                {project.tech.length > 4 && (
                  <span className="px-2.5 py-1 text-xs rounded-md bg-secondary/80 text-secondary-foreground">
                    +{project.tech.length - 4}
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-md"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 10 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="relative w-full max-w-2xl p-8 rounded-2xl border border-border/60 bg-card shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              >
                <motion.button
                  whileHover={{ rotate: 90, scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-5 right-5 p-2 rounded-lg hover:bg-secondary transition-colors"
                  onClick={() => setSelectedProject(null)}
                  aria-label="Close modal"
                >
                  <X size={20} />
                </motion.button>

                <h3 className="text-2xl font-bold mb-6">{selectedProject.title}</h3>

                <div className="space-y-5 mb-7">
                  <div>
                    <span className="text-sm font-medium text-primary">Problem</span>
                    <p className="text-muted-foreground mt-1">{selectedProject.problem}</p>
                  </div>
                  <div>
                    <span className="text-sm font-medium text-primary">Solution</span>
                    <p className="text-muted-foreground mt-1">{selectedProject.solution}</p>
                  </div>
                  <div>
                    <span className="text-sm font-medium text-primary">Details</span>
                    <p className="text-muted-foreground mt-1">{selectedProject.details}</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2.5">
                  {selectedProject.tech.map((t, index) => (
                    <motion.span
                      key={t}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.05, duration: 0.3 }}
                      className="px-3.5 py-1.5 text-sm rounded-lg bg-secondary text-secondary-foreground"
                    >
                      {t}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
