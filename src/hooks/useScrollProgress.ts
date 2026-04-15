import { type RefObject, useEffect, useState } from 'react'

export function useScrollProgress(ref: RefObject<HTMLElement | null>) {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    let raf = 0

    const calc = () => {
      const el = ref.current
      if (!el) return
      const rect = el.getBoundingClientRect()
      const travel = rect.height - window.innerHeight
      if (travel <= 0) {
        setProgress(0)
        return
      }
      const p = Math.min(1, Math.max(0, -rect.top / travel))
      setProgress(p)
    }

    const onScroll = () => {
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(calc)
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    calc()

    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      cancelAnimationFrame(raf)
    }
  }, [ref])

  return progress
}
