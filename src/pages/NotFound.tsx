import { Link } from 'react-router-dom'
import { SEO } from '../components/layout/SEO'

export function NotFound() {
  return (
    <>
      <SEO title="Page Not Found" path="/404" />
      <div className="mx-auto flex max-w-2xl flex-col items-center px-4 py-24 text-center sm:px-6">
        <p className="text-sm font-medium" style={{ color: 'var(--color-accent)' }}>
          404
        </p>
        <h1 className="mt-2 text-3xl">Page not found</h1>
        <p className="mt-3" style={{ color: 'var(--color-muted)' }}>
          The page you're looking for doesn't exist.
        </p>
        <Link
          to="/"
          className="mt-6 rounded-full px-5 py-3 text-sm font-medium text-white"
          style={{ backgroundColor: 'var(--color-accent)' }}
        >
          Back home
        </Link>
      </div>
    </>
  )
}
