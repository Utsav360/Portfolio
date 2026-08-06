import { site } from '../../data/site'
import { skillCategories } from '../../data/skills'
import { useScrollReveal } from '../../lib/useScrollReveal'

export function About() {
  const techStack = skillCategories.flatMap((c) => c.skills).slice(0, 14)
  const reveal = useScrollReveal<HTMLDivElement>()

  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="border-t"
      style={{ borderColor: 'var(--color-border)' }}
    >
      <div ref={reveal.ref} className={`reveal mx-auto max-w-6xl px-4 py-20 sm:px-6 ${reveal.isVisible ? 'is-visible' : ''}`}>
        <h2 id="about-heading" className="text-3xl sm:text-4xl">
          A bit more about me
        </h2>

        <div className="mt-8 max-w-2xl">
          <p className="leading-relaxed" style={{ color: 'var(--color-text)' }}>
            {site.intro}
          </p>
          <p className="mt-4 text-sm" style={{ color: 'var(--color-muted)' }}>
            Currently {site.currentRole.toLowerCase()} at{' '}
            <span style={{ color: 'var(--color-heading)', fontWeight: 500 }}>{site.currentCompany}</span>.
          </p>
          <p className="glass-panel mt-6 p-5 text-sm leading-relaxed" style={{ color: 'var(--color-text)' }}>
            {site.funFact}
          </p>

          <div className="mt-8 flex flex-wrap gap-2" aria-label="Tech stack">
            {techStack.map((tech) => (
              <span
                key={tech}
                className="rounded-full border px-3 py-1 text-xs"
                style={{ borderColor: 'var(--color-border)', color: 'var(--color-muted)' }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
