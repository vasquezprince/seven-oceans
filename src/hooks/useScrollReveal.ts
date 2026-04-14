import { useEffect, useRef } from 'react'

export function useScrollReveal<T extends HTMLElement>(threshold = 0.05) {
  const ref = useRef<T>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('visible')
          observer.unobserve(el)
        }
      },
      {
        threshold,
        rootMargin: '0px 0px -40px 0px',
      }
    )

    // Small delay to ensure initial layout is done
    const timer = setTimeout(() => {
      observer.observe(el)
    }, 100)

    return () => {
      clearTimeout(timer)
      observer.disconnect()
    }
  }, [threshold])

  return ref
}
