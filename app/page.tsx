import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { ValueSection } from "@/components/value-section"
import { MindsetSection } from "@/components/mindset-section"
import { SkillsSection } from "@/components/skills-section"
import { ExperienceSection } from "@/components/experience-section"
import { ProjectsSection } from "@/components/projects-section"
import { ResumeSection } from "@/components/resume-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <ValueSection />
      <MindsetSection />
      <SkillsSection />
      <ExperienceSection />
      <ProjectsSection />
      <ResumeSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
