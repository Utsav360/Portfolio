import { Download, ArrowRight } from 'lucide-react'
import { GithubIcon, LinkedinIcon, WhatsappIcon } from '../icons/BrandIcons'
import { site } from '../../data/site'
import { useTypingEffect } from '../../lib/useTypingEffect'
import { useMagnetic } from '../../lib/useMagnetic'

const stats = [
  { label: 'Years doing this', value: `${site.yearsExperience}+` },
  { label: 'Projects shipped', value: `${site.projectsCompleted}+` },
  { label: 'Tickets closed', value: site.ticketsResolved },
]

export function Hero() {
  const typed = useTypingEffect(site.roles)
  const primaryCta = useMagnetic<HTMLAnchorElement>()
  const secondaryCta = useMagnetic<HTMLAnchorElement>()

  return (
    <section aria-label="Introduction" className="relative overflow-hidden">
      <div className="relative mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
        <div className="grid items-center gap-16 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="animate-fade-up">
            <p className="mb-4 text-sm tracking-wide" style={{ color: 'var(--color-muted)' }}>
              Hi, I'm
            </p>
            <h1 className="text-4xl leading-[1.1] sm:text-6xl">{site.name}</h1>

            <p className="mt-4 h-7 text-lg" style={{ color: 'var(--color-accent)' }}>
              <span aria-hidden="true">{typed}</span>
              <span className="sr-only">{site.roles.join(', ')}</span>
            </p>

            <p className="mt-6 max-w-lg text-base leading-relaxed sm:text-lg" style={{ color: 'var(--color-text)' }}>
              {site.intro}
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <a
                ref={primaryCta.ref}
                onMouseMove={primaryCta.onMouseMove}
                onMouseLeave={primaryCta.onMouseLeave}
                href="#projects"
                className="inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-sm font-medium text-white transition-transform"
                style={{ backgroundColor: 'var(--color-accent)' }}
              >
                See the work <ArrowRight size={16} />
              </a>
              <a
                ref={secondaryCta.ref}
                onMouseMove={secondaryCta.onMouseMove}
                onMouseLeave={secondaryCta.onMouseLeave}
                href={site.resumeUrl}
                download
                className="card-surface card-surface-hover inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-sm font-medium transition-transform"
                style={{ color: 'var(--color-heading)' }}
              >
                <Download size={16} /> Resume
              </a>
            </div>

            <div className="mt-9 flex items-center gap-5">
              <a href={site.social.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="transition-colors hover:text-[var(--color-accent)]" style={{ color: 'var(--color-muted)' }}>
                <GithubIcon size={19} />
              </a>
              <a href={site.social.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="transition-colors hover:text-[var(--color-accent)]" style={{ color: 'var(--color-muted)' }}>
                <LinkedinIcon size={19} />
              </a>
              <a href={site.social.whatsapp} target="_blank" rel="noreferrer" aria-label="WhatsApp" className="transition-colors hover:text-[var(--color-accent)]" style={{ color: 'var(--color-muted)' }}>
                <WhatsappIcon size={19} />
              </a>
            </div>
          </div>

          <div className="glass-panel animate-fade-up p-8" style={{ animationDelay: '150ms' }}>
            <div
              className="flex h-16 w-16 items-center justify-center rounded-full text-lg font-medium"
              style={{ backgroundColor: 'var(--color-accent-soft)', color: 'var(--color-accent)' }}
            >
              {site.initials}
            </div>
            <p className="mt-5 text-base leading-relaxed" style={{ color: 'var(--color-text)' }}>
              Based in {site.location.split(',')[0]}, currently at{' '}
              <span style={{ color: 'var(--color-heading)', fontWeight: 500 }}>{site.currentCompany}</span>.
            </p>

            <dl className="mt-6 grid grid-cols-3 gap-4 border-t pt-6" style={{ borderColor: 'var(--color-border)' }}>
              {stats.map((stat) => (
                <div key={stat.label}>
                  <dd className="text-2xl font-medium" style={{ color: 'var(--color-heading)', fontFamily: 'var(--font-serif)' }}>
                    {stat.value}
                  </dd>
                  <dt className="mt-1 text-xs leading-snug" style={{ color: 'var(--color-muted)' }}>
                    {stat.label}
                  </dt>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  )
}
