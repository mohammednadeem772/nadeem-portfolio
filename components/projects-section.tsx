"use client"

import { useState } from "react"
import { X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"


const projects = [
  {
    title: "Green Story – Sustainability Platform",
    problem:
      "Sustainability and lifecycle data was fragmented across multiple systems, making it difficult for brands to generate accurate reports and meet compliance requirements.",
    solution:
      "Built scalable backend services and dashboards to centralize lifecycle assessment and supply-chain traceability data.",
    tech: ["Node.js", "NestJS", "Next.js", "TypeORM", "PostgreSQL"],
    details:
      "Contributed to backend services and dashboards for lifecycle assessments and supply-chain transparency. Designed REST APIs, optimized database schemas, and integrated third-party services to ensure consistent and reliable data flow across sustainability modules.",
  },
  {
    title: "LOGAC – Vendor & Route Optimization System",
    problem:
      "Vendor management and route planning relied heavily on manual processes, leading to inefficient logistics decisions and increased operational overhead.",
    solution:
      "Automated business logic and supported optimized routing through backend-driven algorithms and APIs.",
    tech: ["Node.js", "Express", "Python", "PostgreSQL", "Sequelize"],
    details:
      "Implemented business algorithms using Python and built REST APIs with Express.js. Designed and maintained relational data models using Sequelize ORM to support vendor coordination and logistics optimization workflows.",
  },
  {
    title: "ELSA – Initiative & Integration Platform",
    problem:
      "Frequent integration issues and unstable modules slowed feature delivery and increased ongoing maintenance effort.",
    solution:
      "Stabilized integrations and resolved full-stack issues to improve platform reliability.",
    tech: ["React", "Node.js", "Express", "PostgreSQL", "Sequelize"],
    details:
      "Resolved full-stack issues across integrations and initiatives modules. Improved API error handling, database interactions, and frontend stability to enable smoother and more reliable feature releases.",
  },
  {
    title: "VOLVO – CRM System",
    problem:
      "Service and sales data was distributed across tools, limiting visibility and operational efficiency for automotive teams.",
    solution:
      "Developed centralized CRM modules for service and sales tracking.",
    tech: ["React", "Node.js", "PostgreSQL", "Sequelize"],
    details:
      "Led development of CRM modules using React and Node.js, focusing on clean data models, consistent APIs, and maintainable architecture to support automotive service and sales operations.",
  },
  {
    title: "Walking and Talking – Collaboration Platform",
    problem:
      "Production bugs and missing backend features were impacting user experience on an active collaboration platform.",
    solution:
      "Stabilized the backend and delivered incremental feature improvements.",
    tech: ["Python", "Django", "MySQL", "React", "Ionic"],
    details:
      "Worked on a Django-based backend to fix production issues and add new features. Improved reliability of existing modules while supporting ongoing enhancements for collaboration workflows.",
  },
  {
    title: "Vantaan Taksi – Booking Management System",
    problem:
      "Operational inefficiencies in booking and management workflows affected daily travel operations.",
    solution:
      "Improved backend APIs and frontend flows for booking management.",
    tech: ["React", "Node.js", "MySQL", "Sequelize"],
    details:
      "Enhanced booking and management services by improving backend APIs and frontend workflows, resulting in more reliable travel booking operations.",
  },
  {
    title: "HSDS – Education Management System",
    problem:
      "Course and student data was managed manually, increasing errors and administrative effort.",
    solution:
      "Built structured backend and frontend modules for data management.",
    tech: ["React", "Node.js"],
    details:
      "Designed and implemented backend and frontend modules to manage course and student data efficiently, improving data consistency and usability.",
  },
  {
    title: "Dizpatch – Travel Booking Mobile App",
    problem:
      "Users needed real-time booking updates and a smooth mobile experience.",
    solution:
      "Delivered real-time booking features with a responsive mobile UI.",
    tech: ["React Native", "Firebase"],
    details:
      "Developed mobile UI and real-time booking features using React Native and Firebase, focusing on performance, real-time updates, and user-friendly travel workflows.",
  },
  {
    title: "Cyber Friend – Privacy-Focused Mobile App",
    problem:
      "Users required a secure and privacy-focused mobile application.",
    solution:
      "Implemented secure mobile features backed by real-time services.",
    tech: ["Flutter", "Firebase"],
    details:
      "Developed a secure and privacy-focused mobile application using Flutter and Firebase, with emphasis on data protection and real-time functionality.",
  },
  {
    title: "Gold Bank – Fintech & E-commerce Platform",
    problem:
      "The platform required a modern frontend and reliable backend services for fintech-style user flows.",
    solution:
      "Built dynamic frontend components and backend services.",
    tech: ["React", "Next.js", "Node.js"],
    details:
      "Worked on e-commerce backend services and dynamic frontend components to support fintech-style workflows and user interactions.",
  },
  {
    title: "Ahmedia Restaurant – Food Ordering System",
    problem:
      "Lack of a unified system for food ordering across mobile and web platforms.",
    solution:
      "Built an end-to-end food ordering platform.",
    tech: ["Node.js", "Flutter", "React", "MySQL"],
    details:
      "Developed a complete food ordering system for mobile and web, including backend APIs and user-facing interfaces for ordering and management.",
  },
  {
    title: "HMIS – Pilgrimage Management System",
    problem:
      "Pilgrimage logistics and bookings were handled manually, making coordination difficult.",
    solution:
      "Digitized booking and logistics workflows.",
    tech: ["PHP", "CodeIgniter", "MySQL"],
    details:
      "Implemented backend modules for managing pilgrimage logistics and bookings, improving operational efficiency and data organization.",
  },
  {
    title: "POS+ – Billing & Inventory System",
    problem:
      "Manual billing and inventory tracking caused inefficiencies and errors.",
    solution:
      "Built a POS system with inventory and payment management.",
    tech: ["PHP", "CodeIgniter", "MySQL"],
    details:
      "Developed a billing, inventory, and payment management system to support day-to-day business operations.",
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
