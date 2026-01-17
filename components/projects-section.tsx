"use client"

import { useState } from "react"
import { X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"


const projects = [
  {
    title: "Walking and Talking – Collaboration Platform",
    problem: "Production issues and feature gaps in an active platform.",
    solution: "Fixed bugs and enhanced backend features.",
    tech: ["Python", "Django", "MySQL", "React", "Ionic"],
    details:
      "Worked on Django-based backend to fix production issues and add new features for an organization culture and collaboration platform.",
  },
  {
    title: "LOGAC – Vendor & Route Optimization System",
    problem: "Manual vendor management and inefficient route planning.",
    solution:
      "Automated business logic and optimized routing using backend-driven algorithms.",
    tech: ["Node.js", "Express", "Python", "PostgreSQL", "Sequelize"],
    details:
      "Created business algorithms using Python and built REST APIs with Express.js. Managed complex data models via Sequelize ORM for vendor and logistics optimization.",
  },
  {
    title: "ELSA – Initiative & Integration Platform",
    problem: "Unstable integrations and broken modules affected delivery.",
    solution: "Stabilized integrations and fixed full-stack issues.",
    tech: ["React", "Node.js", "Express", "PostgreSQL", "Sequelize"],
    details:
      "Resolved full-stack issues in integrations and initiatives modules, improving API stability, frontend reliability, and overall system consistency.",
  },
  {
    title: "VOLVO – CRM System",
    problem: "Lack of centralized system for service and sales tracking.",
    solution: "Developed CRM modules for automotive operations.",
    tech: ["React", "Node.js", "PostgreSQL", "Sequelize"],
    details:
      "Led CRM development for tracking automotive service and sales operations, focusing on modular architecture and data consistency.",
  },
  {
    title: "Green Story – Sustainability Platform",
    problem: "Brands lacked visibility into lifecycle and sustainability data.",
    solution:
      "Built backend services and dashboards for lifecycle assessment and traceability.",
    tech: ["Node.js", "NestJS", "Next.js", "TypeORM", "PostgreSQL"],
    details:
      "Worked on sustainability-focused tools for lifecycle assessments and supply-chain transparency. Developed APIs, data models, dashboards, and integrated third-party services for enterprise clients.",
  },
  {
    title: "Vantaan Taksi – Booking Management System",
    problem: "Operational inefficiencies in travel booking workflows.",
    solution: "Improved backend and frontend booking flows.",
    tech: ["React", "Node.js", "MySQL", "Sequelize"],
    details:
      "Improved booking and management services by enhancing backend APIs and frontend workflows.",
  },
  {
    title: "HSDS – Education Management System",
    problem: "Manual handling of course and student data.",
    solution: "Built backend and frontend modules for data management.",
    tech: ["React", "Node.js"],
    details:
      "Designed and implemented backend and frontend modules for managing course and student data.",
  },
  {
    title: "Dizpatch – Travel Booking Mobile App",
    problem: "Need for real-time updates in mobile travel bookings.",
    solution: "Built real-time UI and booking features.",
    tech: ["React Native"],
    details:
      "Developed mobile UI and real-time booking features using React Native and Firebase.",
  },
  {
    title: "Cyber Friend – Privacy-Focused App",
    problem: "Users needed a secure and privacy-focused mobile application.",
    solution: "Built secure mobile features with real-time backend.",
    tech: ["Flutter"],
    details:
      "Developed a secure and privacy-focused mobile application using Flutter and Firebase.",
  },
  {
    title: "Gold Bank – Fintech & E-commerce Platform",
    problem: "Need for a modern e-commerce and banking-style frontend.",
    solution: "Built dynamic frontend and backend services.",
    tech: ["React", "Next.js", "Node.js"],
    details:
      "Worked on e-commerce backend services and dynamic frontend for a fintech-style web platform.",
  },
  {
    title: "Ahmedia Restaurant – Food Ordering System",
    problem: "No unified system for food ordering across mobile and web.",
    solution: "Built end-to-end food ordering platform.",
    tech: ["Node.js", "Flutter", "React", "MySQL"],
    details:
      "Developed a food ordering system for both mobile and web, including backend APIs and user-facing interfaces.",
  },
  {
    title: "HMIS – Pilgrimage Management System",
    problem: "Manual handling of pilgrimage logistics and bookings.",
    solution: "Digitized booking and logistics workflows.",
    tech: ["PHP", "CodeIgniter", "MySQL"],
    details:
      "Managed pilgrimage logistics, booking modules, and backend workflows for operational efficiency.",
  },
  {
    title: "POS+ – Billing & Inventory System",
    problem: "Manual billing and inventory tracking.",
    solution: "Built POS system with inventory and payments.",
    tech: ["PHP", "CodeIgniter", "MySQL"],
    details:
      "Developed a billing, inventory, and payment management system for business operations.",
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
