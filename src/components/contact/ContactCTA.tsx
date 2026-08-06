import { Mail, Clock } from 'lucide-react'
import { site } from '../../data/site'
import { ContactForm } from './ContactForm'
import { useScrollReveal } from '../../lib/useScrollReveal'

const inquiryTypes = ['Freelance projects', 'Full-time roles', 'Consulting']

export function ContactCTA() {
  const reveal = useScrollReveal<HTMLDivElement>()

  return (
    <section id="contact" aria-labelledby="contact-heading" className="border-t" style={{ borderColor: 'var(--color-border)' }}>
      <div ref={reveal.ref} className={`reveal mx-auto max-w-4xl px-4 py-20 sm:px-6 ${reveal.isVisible ? 'is-visible' : ''}`}>
        <h2 id="contact-heading" className="text-3xl sm:text-4xl">
          Want to work together?
        </h2>
        <p className="mt-3 max-w-xl" style={{ color: 'var(--color-text)' }}>
          I'm open to {inquiryTypes.join(', ').toLowerCase()} — send a note about the project and I'll get back
          to you.
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {inquiryTypes.map((type) => (
            <span
              key={type}
              className="rounded-full border px-3 py-1 text-xs font-medium"
              style={{ borderColor: 'var(--color-border)', color: 'var(--color-muted)' }}
            >
              {type}
            </span>
          ))}
        </div>

        <div className="mt-8 grid gap-8 lg:grid-cols-2">
          <div>
            <a
              href={`mailto:${site.email}`}
              className="inline-flex items-center gap-2 text-lg font-semibold"
              style={{ color: 'var(--color-accent)' }}
            >
              <Mail size={20} /> {site.email}
            </a>
            <p className="mt-3 inline-flex items-center gap-2 text-sm" style={{ color: 'var(--color-muted)' }}>
              <Clock size={16} /> Typically responds within 1–2 business days
            </p>
          </div>

          <div className="card-surface p-5">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  )
}
