import type { ReactNode } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { ArrowLeft, ExternalLink } from 'lucide-react'
import { GithubIcon } from '../components/icons/BrandIcons'
import { getProjectBySlug, projects } from '../data/projects'
import { CaseStudyPreview } from '../components/projects/CaseStudyPreview'
import { ProjectImagePlaceholder } from '../components/projects/ProjectImagePlaceholder'
import { SEO } from '../components/layout/SEO'

export function CaseStudy() {
  const { slug } = useParams<{ slug: string }>()
  const project = slug ? getProjectBySlug(slug) : undefined

  if (!project) return <Navigate to="/404" replace />

  const related = projects.filter((p) => p.slug !== project.slug).slice(0, 3)
  const { caseStudy } = project

  return (
    <>
      <SEO
        title={`${project.title} — Case Study`}
        description={project.description}
        path={`/projects/${project.slug}`}
      />

      <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16">
        <Link
          to="/#projects"
          className="inline-flex items-center gap-1.5 text-sm font-medium"
          style={{ color: 'var(--color-muted)' }}
        >
          <ArrowLeft size={16} /> Back to projects
        </Link>

        <header className="mt-6">
          <p className="text-xs font-medium uppercase tracking-wide" style={{ color: 'var(--color-accent)' }}>
            {project.platform}
          </p>
          <h1 className="mt-2 text-3xl sm:text-4xl">{project.title}</h1>
          <p className="mt-3 text-lg" style={{ color: 'var(--color-text)' }}>
            {project.description}
          </p>

          <div className="mt-4 flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <span
                key={t}
                className="rounded-full border px-2.5 py-1 text-xs"
                style={{ borderColor: 'var(--color-border)', color: 'var(--color-muted)' }}
              >
                {t}
              </span>
            ))}
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="card-surface card-surface-hover inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold"
              >
                <GithubIcon size={16} /> View repository
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium text-white"
                style={{ backgroundColor: 'var(--color-accent)' }}
              >
                <ExternalLink size={16} /> Visit live site
              </a>
            )}
          </div>
        </header>

        <div className="card-surface mt-10 aspect-video overflow-hidden">
          <ProjectImagePlaceholder title={project.title} />
        </div>

        <Section title="Problem & user context">
          <p>{caseStudy.problem}</p>
          <p className="mt-3" style={{ color: 'var(--color-muted)' }}>
            {caseStudy.context}
          </p>
        </Section>

        <Section title="Constraints & tradeoffs">
          <ul className="list-disc space-y-2 pl-5">
            {caseStudy.constraints.map((c, i) => (
              <li key={i}>{c}</li>
            ))}
          </ul>
        </Section>

        <Section title="Architecture & approach">
          <div className="card-surface p-5 text-sm leading-relaxed" style={{ color: 'var(--color-text)' }}>
            {caseStudy.architecture}
          </div>
        </Section>

        {caseStudy.screenshots.length > 0 && (
          <Section title="Screenshots & UI states">
            <div className="grid gap-4 sm:grid-cols-2">
              {caseStudy.screenshots.map((s, i) => (
                <figure key={i} className="card-surface overflow-hidden">
                  <div className="aspect-video">
                    <ProjectImagePlaceholder title={project.title} />
                  </div>
                  <figcaption className="p-2 text-center text-xs" style={{ color: 'var(--color-muted)' }}>
                    {s.caption}
                  </figcaption>
                </figure>
              ))}
            </div>
          </Section>
        )}

        <Section title="Results & lessons learned">
          <ul className="list-disc space-y-2 pl-5">
            {caseStudy.results.map((r, i) => (
              <li key={i}>{r}</li>
            ))}
          </ul>
          <p className="glass-panel mt-4 p-5 text-sm leading-relaxed" style={{ color: 'var(--color-text)' }}>
            <span style={{ color: 'var(--color-accent)', fontWeight: 500 }}>Lesson learned:</span> {caseStudy.lessons}
          </p>
        </Section>

        <section className="mt-12 border-t pt-8" style={{ borderColor: 'var(--color-border)' }}>
          <h2 className="text-lg font-semibold">More case studies</h2>
          <div className="mt-4 grid gap-3 sm:grid-cols-3">
            {related.map((p) => (
              <CaseStudyPreview key={p.slug} project={p} />
            ))}
          </div>
        </section>
      </article>
    </>
  )
}

function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="mt-10">
      <h2 className="text-xl font-semibold" style={{ color: 'var(--color-heading)' }}>
        {title}
      </h2>
      <div className="mt-3 leading-relaxed" style={{ color: 'var(--color-text)' }}>
        {children}
      </div>
    </section>
  )
}
