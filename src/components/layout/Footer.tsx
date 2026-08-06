import { Mail } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from '../icons/BrandIcons'
import { site } from '../../data/site'

export function Footer() {
  return (
    <footer className="border-t" style={{ borderColor: 'var(--color-border)' }}>
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-4 py-8 text-sm sm:flex-row sm:justify-between sm:px-6">
        <p style={{ color: 'var(--color-muted)' }}>
          © {new Date().getFullYear()} {site.name}. Built with React, TypeScript &amp; Tailwind.
        </p>
        <div className="flex items-center gap-4">
          <a
            href={site.social.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub profile"
            style={{ color: 'var(--color-muted)' }}
          >
            <GithubIcon size={18} />
          </a>
          <a
            href={site.social.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn profile"
            style={{ color: 'var(--color-muted)' }}
          >
            <LinkedinIcon size={18} />
          </a>
          <a href={`mailto:${site.email}`} aria-label="Send an email" style={{ color: 'var(--color-muted)' }}>
            <Mail size={18} />
          </a>
        </div>
      </div>
    </footer>
  )
}
