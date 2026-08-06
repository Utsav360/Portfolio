import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import type { Project } from '../../data/projects'
import { ProjectImagePlaceholder } from './ProjectImagePlaceholder'

/** Compact horizontal preview used for "more case studies" rails and related-project links. */
export function CaseStudyPreview({ project }: { project: Project }) {
  return (
    <Link
      to={`/projects/${project.slug}`}
      className="card-surface card-surface-hover group flex items-center gap-4 p-3"
    >
      <div className="h-14 w-20 shrink-0 overflow-hidden rounded-md">
        <ProjectImagePlaceholder title={project.title} />
      </div>
      <div className="min-w-0 flex-1">
        <p className="truncate text-sm font-semibold" style={{ color: 'var(--color-heading)' }}>
          {project.title}
        </p>
        <p className="truncate text-xs" style={{ color: 'var(--color-muted)' }}>
          {project.platform}
        </p>
      </div>
      <ArrowRight size={16} className="shrink-0 transition-transform group-hover:translate-x-1" style={{ color: 'var(--color-accent)' }} />
    </Link>
  )
}
