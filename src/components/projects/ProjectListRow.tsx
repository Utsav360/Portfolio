import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import type { Project } from '../../data/projects'

export function ProjectListRow({ project, index }: { project: Project; index: number }) {
  return (
    <Link
      to={`/projects/${project.slug}`}
      className="group flex flex-wrap items-center gap-4 border-b py-7 transition-colors sm:flex-nowrap sm:gap-6"
      style={{ borderColor: 'var(--color-border)' }}
    >
      <span className="text-sm tabular-nums" style={{ color: 'var(--color-muted)' }}>
        {String(index + 1).padStart(2, '0')}
      </span>

      <div className="min-w-0 flex-1">
        <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
          <h3
            className="text-xl font-semibold transition-colors group-hover:text-[var(--color-accent)] sm:text-2xl"
            style={{ color: 'var(--color-heading)' }}
          >
            {project.title}
          </h3>
          <span className="text-xs" style={{ color: 'var(--color-muted)' }}>
            {project.platform}
          </span>
        </div>
        <p className="mt-1 truncate text-sm" style={{ color: 'var(--color-muted)' }}>
          {project.outcome}
        </p>
      </div>

      <div className="hidden flex-wrap justify-end gap-1.5 md:flex md:w-64">
        {project.tech.slice(0, 3).map((t) => (
          <span
            key={t}
            className="rounded-full border px-2 py-0.5 text-[11px]"
            style={{ borderColor: 'var(--color-border)', color: 'var(--color-muted)' }}
          >
            {t}
          </span>
        ))}
      </div>

      <ArrowRight
        size={22}
        className="ml-auto shrink-0 transition-transform duration-300 ease-out group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:-rotate-45"
        style={{ color: 'var(--color-accent)' }}
      />
    </Link>
  )
}
