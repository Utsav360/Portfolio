import { Briefcase } from 'lucide-react'
import { timeline } from '../../data/experience'
import { useScrollReveal } from '../../lib/useScrollReveal'

export function ExperienceTimeline() {
  const reveal = useScrollReveal<HTMLDivElement>()

  return (
    <section id="experience" aria-labelledby="experience-heading" className="border-t" style={{ borderColor: 'var(--color-border)' }}>
      <div ref={reveal.ref} className={`reveal mx-auto max-w-4xl px-4 py-20 sm:px-6 ${reveal.isVisible ? 'is-visible' : ''}`}>
        <h2 id="experience-heading" className="text-3xl sm:text-4xl">
          Where I've worked
        </h2>

        <ol className="relative mt-10 space-y-10 border-l pl-8" style={{ borderColor: 'var(--color-border)' }}>
          {timeline.map((entry, i) => (
            <li key={i} className="relative">
              <span
                className="absolute -left-[calc(2rem+9px)] flex h-[18px] w-[18px] items-center justify-center rounded-full border-2"
                style={{ borderColor: 'var(--color-accent)', backgroundColor: 'var(--color-bg)' }}
                aria-hidden="true"
              >
                <Briefcase size={10} style={{ color: 'var(--color-accent)' }} />
              </span>

              <p className="text-xs font-medium tracking-wide" style={{ color: 'var(--color-accent)' }}>
                {entry.dates}
              </p>
              <h3 className="mt-1 text-lg font-semibold" style={{ color: 'var(--color-heading)' }}>
                {entry.title}
              </h3>
              <p className="text-sm font-medium" style={{ color: 'var(--color-muted)' }}>
                {entry.org}
              </p>
              <p className="mt-2 text-sm leading-relaxed" style={{ color: 'var(--color-text)' }}>
                {entry.description}
              </p>

              {entry.tech && (
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {entry.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border px-2 py-0.5 text-[11px]"
                      style={{ borderColor: 'var(--color-border)', color: 'var(--color-muted)' }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              )}
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
