import { Code2, ShoppingBag, Database, Headset } from 'lucide-react'
import { skillCategories } from '../../data/skills'
import type { ComponentType } from 'react'
import { useScrollReveal } from '../../lib/useScrollReveal'

const categoryIcons: Record<string, ComponentType<{ size?: number }>> = {
  'Languages & Frameworks': Code2,
  'CMS & E-Commerce': ShoppingBag,
  'Databases & Dev Tools': Database,
  'Support & Collaboration': Headset,
}

export function SkillsCloud() {
  const reveal = useScrollReveal<HTMLDivElement>()

  return (
    <section id="skills" aria-labelledby="skills-heading" className="border-t" style={{ borderColor: 'var(--color-border)' }}>
      <div ref={reveal.ref} className={`reveal mx-auto max-w-6xl px-4 py-20 sm:px-6 ${reveal.isVisible ? 'is-visible' : ''}`}>
        <h2 id="skills-heading" className="text-3xl sm:text-4xl">
          What I work with
        </h2>
        <p className="mt-3 text-base" style={{ color: 'var(--color-muted)' }}>
          Picked up across support work and client builds, not a bootcamp checklist.
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {skillCategories.map((cat) => {
            const Icon = categoryIcons[cat.category] ?? Code2
            return (
              <div key={cat.category} className="card-surface card-surface-hover p-5">
                <div className="flex items-center gap-2">
                  <Icon size={18} />
                  <h3 className="text-base font-semibold" style={{ color: 'var(--color-heading)' }}>
                    {cat.category}
                  </h3>
                </div>
                <p className="mt-1 text-xs" style={{ color: 'var(--color-muted)' }}>
                  {cat.description}
                </p>

                <ul className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-3" aria-label={`${cat.category} skills`}>
                  {cat.skills.map((skill) => (
                    <li
                      key={skill}
                      className="rounded-md border px-2 py-1.5 text-center text-xs font-medium"
                      style={{ borderColor: 'var(--color-border)', color: 'var(--color-text)' }}
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
