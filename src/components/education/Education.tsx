import { GraduationCap } from 'lucide-react'
import { education } from '../../data/education'
import { useScrollReveal } from '../../lib/useScrollReveal'

export function Education() {
  const reveal = useScrollReveal<HTMLDivElement>()

  return (
    <section id="education" aria-labelledby="education-heading" className="border-t" style={{ borderColor: 'var(--color-border)' }}>
      <div ref={reveal.ref} className={`reveal mx-auto max-w-4xl px-4 py-20 sm:px-6 ${reveal.isVisible ? 'is-visible' : ''}`}>
        <h2 id="education-heading" className="text-3xl sm:text-4xl">
          Education
        </h2>

        <div className="mt-8 grid gap-5 sm:grid-cols-2">
          {education.map((entry) => (
            <div key={entry.degree} className="card-surface card-surface-hover p-5">
              <GraduationCap size={20} style={{ color: 'var(--color-accent)' }} aria-hidden="true" />
              <p className="mt-3 text-xs font-medium tracking-wide" style={{ color: 'var(--color-accent)' }}>
                {entry.dates}
              </p>
              <h3 className="mt-1 text-base font-semibold" style={{ color: 'var(--color-heading)' }}>
                {entry.degree}
              </h3>
              <p className="text-sm font-medium" style={{ color: 'var(--color-muted)' }}>
                {entry.org}
              </p>
              <p className="mt-2 text-sm leading-relaxed" style={{ color: 'var(--color-text)' }}>
                {entry.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
