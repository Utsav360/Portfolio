import { useState, type FormEvent } from 'react'
import { site } from '../../data/site'

/**
 * Static-site-friendly contact form: builds a mailto: link from the fields so it works
 * with zero backend. To capture submissions server-side instead, swap the onSubmit
 * handler for a POST to Formspree, Netlify Forms, or a custom API route.
 */
export function ContactForm() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    const subject = encodeURIComponent(`Portfolio inquiry from ${name || 'a visitor'}`)
    const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`)
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4" aria-label="Contact form">
      <div>
        <label htmlFor="contact-name" className="block text-sm font-medium" style={{ color: 'var(--color-heading)' }}>
          Name
        </label>
        <input
          id="contact-name"
          name="name"
          type="text"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="mt-1 w-full rounded-md border px-3 py-2 text-sm"
          style={{ borderColor: 'var(--color-border)', backgroundColor: 'var(--color-bg)', color: 'var(--color-text)' }}
        />
      </div>

      <div>
        <label htmlFor="contact-email" className="block text-sm font-medium" style={{ color: 'var(--color-heading)' }}>
          Email
        </label>
        <input
          id="contact-email"
          name="email"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mt-1 w-full rounded-md border px-3 py-2 text-sm"
          style={{ borderColor: 'var(--color-border)', backgroundColor: 'var(--color-bg)', color: 'var(--color-text)' }}
        />
      </div>

      <div>
        <label htmlFor="contact-message" className="block text-sm font-medium" style={{ color: 'var(--color-heading)' }}>
          Message
        </label>
        <textarea
          id="contact-message"
          name="message"
          required
          rows={4}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="mt-1 w-full rounded-md border px-3 py-2 text-sm"
          style={{ borderColor: 'var(--color-border)', backgroundColor: 'var(--color-bg)', color: 'var(--color-text)' }}
        />
      </div>

      <button
        type="submit"
        className="w-full rounded-full px-5 py-2.5 text-sm font-medium text-white sm:w-auto"
        style={{ backgroundColor: 'var(--color-accent)' }}
      >
        Send message
      </button>
    </form>
  )
}
