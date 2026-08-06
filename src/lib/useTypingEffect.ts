import { useEffect, useState } from 'react'

interface Options {
  typingSpeedMs?: number
  deletingSpeedMs?: number
  pauseMs?: number
}

/** Cycles through `words`, typing and deleting each in turn. Respects prefers-reduced-motion by freezing on the first word. */
export function useTypingEffect(words: readonly string[], options: Options = {}) {
  const { typingSpeedMs = 70, deletingSpeedMs = 40, pauseMs = 1500 } = options
  const [text, setText] = useState('')
  const [wordIndex, setWordIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setText(words[0] ?? '')
      return
    }

    const currentWord = words[wordIndex % words.length]
    let timeout: number

    if (!isDeleting && text === currentWord) {
      timeout = window.setTimeout(() => setIsDeleting(true), pauseMs)
    } else if (isDeleting && text === '') {
      setIsDeleting(false)
      setWordIndex((i) => (i + 1) % words.length)
      timeout = window.setTimeout(() => {}, 0)
    } else {
      const next = isDeleting
        ? currentWord.slice(0, text.length - 1)
        : currentWord.slice(0, text.length + 1)
      timeout = window.setTimeout(() => setText(next), isDeleting ? deletingSpeedMs : typingSpeedMs)
    }

    return () => window.clearTimeout(timeout)
  }, [text, isDeleting, wordIndex, words, typingSpeedMs, deletingSpeedMs, pauseMs])

  return text
}
