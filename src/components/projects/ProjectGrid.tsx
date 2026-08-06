import { useState } from 'react'
import { projects, featuredProjects } from '../../data/projects'
import { ProjectListRow } from './ProjectListRow'
import { useScrollReveal } from '../../lib/useScrollReveal'
import { useMagnetic } from '../../lib/useMagnetic'

/** Numbered project list — quiet, editorial layout instead of a card grid. */
export function ProjectGrid() {
  const [showAll, setShowAll] = useState(false)
  const reveal = useScrollReveal<HTMLDivElement>()
  const magnetic = useMagnetic<HTMLButtonElement>()

  const visible = showAll ? projects : projects.slice(0, featuredProjects.length)
  const hiddenCount = projects.length - featuredProjects.length

  return (
    <section id="projects" aria-labelledby="projects-heading" className="border-t" style={{ borderColor: 'var(--color-border)' }}>
      <div ref={reveal.ref} className={`reveal mx-auto max-w-6xl px-4 py-20 sm:px-6 ${reveal.isVisible ? 'is-visible' : ''}`}>
        <h2 id="projects-heading" className="text-3xl sm:text-4xl">
          Selected work
        </h2>
        <p className="mt-3 max-w-xl text-base" style={{ color: 'var(--color-muted)' }}>
          A mix of client e-commerce builds and hands-on React practice — the ones I'm proudest of.
        </p>

        <div className="mt-10 border-t" style={{ borderColor: 'var(--color-border)' }}>
          {visible.map((project, i) => (
            <ProjectListRow key={project.slug} project={project} index={i} />
          ))}
        </div>

        {hiddenCount > 0 && (
          <div className="mt-8">
            <button
              ref={magnetic.ref}
              onMouseMove={magnetic.onMouseMove}
              onMouseLeave={magnetic.onMouseLeave}
              onClick={() => setShowAll((s) => !s)}
              aria-expanded={showAll}
              className="card-surface card-surface-hover rounded-full px-5 py-2.5 text-sm font-medium transition-transform"
              style={{ color: 'var(--color-heading)' }}
            >
              {showAll ? 'Show less' : `Show ${hiddenCount} more`}
            </button>
          </div>
        )}
      </div>
    </section>
  )
}
