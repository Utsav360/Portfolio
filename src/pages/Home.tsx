import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { SEO } from '../components/layout/SEO'
import { Hero } from '../components/hero/Hero'
import { About } from '../components/about/About'
import { SkillsCloud } from '../components/skills/SkillsCloud'
import { ProjectGrid } from '../components/projects/ProjectGrid'
import { OpenSource } from '../components/opensource/OpenSource'
import { ExperienceTimeline } from '../components/experience/ExperienceTimeline'
import { Education } from '../components/education/Education'
import { ContactCTA } from '../components/contact/ContactCTA'

export function Home() {
  const location = useLocation()

  useEffect(() => {
    if (location.hash) {
      document.querySelector(location.hash)?.scrollIntoView({ behavior: 'smooth' })
    }
  }, [location.hash])

  return (
    <>
      <SEO title="Portfolio" path="/" />
      <Hero />
      <About />
      <SkillsCloud />
      <ProjectGrid />
      <OpenSource />
      <ExperienceTimeline />
      <Education />
      <ContactCTA />
    </>
  )
}
