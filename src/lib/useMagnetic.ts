import { useRef, type MouseEvent } from 'react'

const STRENGTH = 0.35
const MAX_OFFSET = 14

/** Subtle magnetic pull toward the cursor — restrained, not a gimmick. Desktop only. */
export function useMagnetic<T extends HTMLElement>() {
  const ref = useRef<T>(null)

  function handleMouseMove(e: MouseEvent<T>) {
    const el = ref.current
    if (!el) return
    if (window.matchMedia('(prefers-reduced-motion: reduce), (pointer: coarse)').matches) return

    const rect = el.getBoundingClientRect()
    const relX = e.clientX - (rect.left + rect.width / 2)
    const relY = e.clientY - (rect.top + rect.height / 2)
    const x = Math.max(-MAX_OFFSET, Math.min(MAX_OFFSET, relX * STRENGTH))
    const y = Math.max(-MAX_OFFSET, Math.min(MAX_OFFSET, relY * STRENGTH))
    el.style.transform = `translate(${x}px, ${y}px)`
  }

  function handleMouseLeave() {
    const el = ref.current
    if (el) el.style.transform = ''
  }

  return { ref, onMouseMove: handleMouseMove, onMouseLeave: handleMouseLeave }
}
