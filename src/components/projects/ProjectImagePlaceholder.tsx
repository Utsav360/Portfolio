const GRADIENTS = [
  'linear-gradient(135deg,#6f7d5c,#3d3d33)',
  'linear-gradient(135deg,#b06a4f,#6f5642)',
  'linear-gradient(135deg,#5c6b78,#3d3d33)',
  'linear-gradient(135deg,#8a8878,#6f7d5c)',
]

function hashIndex(str: string, mod: number) {
  let h = 0
  for (let i = 0; i < str.length; i++) h = (h * 31 + str.charCodeAt(i)) >>> 0
  return h % mod
}

/**
 * Generated placeholder used until a real project screenshot is supplied.
 * Swap in a real image by adding an `image` field to the project data and
 * rendering it in ProjectListRow/CaseStudy instead of this component.
 */
export function ProjectImagePlaceholder({ title }: { title: string }) {
  const gradient = GRADIENTS[hashIndex(title, GRADIENTS.length)]
  const initials = title
    .split(' ')
    .map((w) => w[0])
    .slice(0, 2)
    .join('')
    .toUpperCase()

  return (
    <div
      className="flex h-full w-full items-center justify-center text-3xl text-white/90"
      style={{ background: gradient, fontFamily: 'var(--font-serif)' }}
      aria-hidden="true"
    >
      {initials}
    </div>
  )
}
