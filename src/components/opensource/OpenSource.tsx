import { ArrowUpRight } from 'lucide-react'
import { GithubIcon } from '../icons/BrandIcons'
import { githubUsername, notableContributions } from '../../data/openSource'
import { useScrollReveal } from '../../lib/useScrollReveal'

export function OpenSource() {
  const reveal = useScrollReveal<HTMLDivElement>()

  return (
    <section id="open-source" aria-labelledby="open-source-heading" className="border-t" style={{ borderColor: 'var(--color-border)' }}>
      <div ref={reveal.ref} className={`reveal mx-auto max-w-6xl px-4 py-20 sm:px-6 ${reveal.isVisible ? 'is-visible' : ''}`}>
        <h2 id="open-source-heading" className="text-3xl sm:text-4xl">
          Open source
        </h2>

        <div className="card-surface mt-6 overflow-hidden">
          <img
            src={`https://ghchart.rshah.org/6f7d5c/${githubUsername}`}
            alt={`${githubUsername}'s GitHub contribution graph`}
            className="w-full"
            loading="lazy"
          />
        </div>

        <h3 className="mt-8 text-base font-semibold" style={{ color: 'var(--color-heading)' }}>
          Notable contributions
        </h3>
        <ul className="mt-4 space-y-3">
          {notableContributions.map((c) => (
            <li key={c.title} className="card-surface card-surface-hover p-4">
              <a href={c.url} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 font-semibold">
                {c.title} <ArrowUpRight size={14} />
              </a>
              <p className="mt-1 text-sm" style={{ color: 'var(--color-muted)' }}>
                {c.description}
              </p>
            </li>
          ))}
        </ul>

        <a
          href={`https://github.com/${githubUsername}`}
          target="_blank"
          rel="noreferrer"
          className="card-surface card-surface-hover mt-8 inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold"
        >
          <GithubIcon size={16} /> View GitHub Profile
        </a>
      </div>
    </section>
  )
}
