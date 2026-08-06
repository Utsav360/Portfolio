import { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { Menu, X, Moon, Sun } from 'lucide-react'
import { useTheme } from '../../lib/ThemeProvider'
import { site } from '../../data/site'

const NAV_LINKS = [
  { label: 'About', hash: '#about' },
  { label: 'Skills', hash: '#skills' },
  { label: 'Projects', hash: '#projects' },
  { label: 'Open Source', hash: '#open-source' },
  { label: 'Experience', hash: '#experience' },
  { label: 'Education', hash: '#education' },
  { label: 'Contact', hash: '#contact' },
]

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const { theme, toggleTheme } = useTheme()
  const location = useLocation()
  const navigate = useNavigate()

  function goToSection(hash: string) {
    setMenuOpen(false)
    if (location.pathname !== '/') {
      navigate(`/${hash}`)
      return
    }
    document.querySelector(hash)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header
      className="sticky top-0 z-40 border-b backdrop-blur"
      style={{ borderColor: 'var(--color-border)', backgroundColor: 'color-mix(in srgb, var(--color-bg) 85%, transparent)' }}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        <Link
          to="/"
          className="text-lg"
          style={{ color: 'var(--color-heading)', fontFamily: 'var(--font-serif)' }}
          aria-label={`${site.name} — home`}
        >
          {site.shortName}
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-6 md:flex">
          {NAV_LINKS.map((link) => (
            <button
              key={link.hash}
              onClick={() => goToSection(link.hash)}
              className="text-sm font-medium transition-colors hover:opacity-100"
              style={{ color: 'var(--color-muted)' }}
            >
              {link.label}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            onClick={toggleTheme}
            aria-label={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
            className="rounded-md p-2 transition-colors"
            style={{ color: 'var(--color-muted)' }}
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          <button
            onClick={() => setMenuOpen((o) => !o)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            className="rounded-md p-2 md:hidden"
            style={{ color: 'var(--color-muted)' }}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav
          id="mobile-nav"
          aria-label="Mobile"
          className="flex flex-col gap-1 border-t px-4 py-3 md:hidden"
          style={{ borderColor: 'var(--color-border)' }}
        >
          {NAV_LINKS.map((link) => (
            <button
              key={link.hash}
              onClick={() => goToSection(link.hash)}
              className="rounded-md px-3 py-2 text-left text-sm font-medium"
              style={{ color: 'var(--color-text)' }}
            >
              {link.label}
            </button>
          ))}
        </nav>
      )}
    </header>
  )
}
