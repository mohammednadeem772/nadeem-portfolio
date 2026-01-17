"use client"

import { Mail, Linkedin, MessageCircle, MapPin } from "lucide-react"
import { motion } from "framer-motion"

const contacts = [
  {
    icon: Mail,
    label: "Email",
    value: "mohammednadeem772@gmail.com",
    href: "mailto:mohammednadeem772@gmail.com",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "Connect on LinkedIn",
    href: "https://www.linkedin.com/in/mohammed-nadeem-a6558312a",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "Send a message",
    href: "https://wa.me/917418828073?text=Hi%20Nadeem%2C%20I%20came%20across%20your%20portfolio%20website%20and%20would%20like%20to%20connect%20regarding%20an%20opportunity.",
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  },
}

export function ContactSection() {
  return (
    <section id="contact" className="py-28 md:py-36 border-t border-border/50">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-5 text-balance">{"Get in Touch"}</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg text-balance">
            Open to remote, hybrid, and onsite opportunities, including full-time roles and long-term contracts.
          </p>
        </motion.div>

        <motion.div
          className="flex flex-col md:flex-row justify-center gap-6 mb-14"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {contacts.map((contact) => (
            <motion.a
              key={contact.label}
              href={contact.href}
              target={contact.href.startsWith("http") ? "_blank" : undefined}
              rel={contact.href.startsWith("http") ? "noopener noreferrer" : undefined}
              variants={itemVariants}
              whileHover={{ y: -4, transition: { duration: 0.3 } }}
              className="flex items-center gap-5 p-6 rounded-2xl border border-border/60 glass-card hover:border-primary/30 transition-all duration-400"
            >
              <motion.div
                className="p-3.5 rounded-xl bg-primary/10 text-primary"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <contact.icon size={24} />
              </motion.div>
              <div>
                <div className="text-xs text-muted-foreground uppercase tracking-wider mb-1.5">{contact.label}</div>
                <div className="text-sm font-medium">{contact.value}</div>
              </div>
            </motion.a>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="flex items-center justify-center gap-2 text-muted-foreground"
        >
          <MapPin size={16} />
          <span className="text-sm">India · Open to Remote, Hybrid & Onsite Opportunities</span>
        </motion.div>
      </div>
    </section>
  )
}
