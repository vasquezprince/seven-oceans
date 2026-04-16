import { useEffect, useMemo, useRef, useState } from 'react'

type Options = {
  urls: string[]
}

export function useFrameSequence({ urls }: Options) {
  const framesRef = useRef<HTMLImageElement[]>([])
  const [loaded, setLoaded] = useState(0)

  const urlsKey = useMemo(() => urls.join('|'), [urls])

  useEffect(() => {
    let cancelled = false
    setLoaded(0)

    const images: HTMLImageElement[] = urls.map(() => new Image())
    framesRef.current = images

    let count = 0
    const bump = () => {
      if (cancelled) return
      count += 1
      setLoaded(count)
    }

    urls.forEach((url, i) => {
      const img = images[i]
      img.decoding = 'async'
      img.onload = bump
      img.onerror = bump
      img.src = url
    })

    return () => {
      cancelled = true
      images.forEach(img => {
        img.onload = null
        img.onerror = null
      })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [urlsKey])

  return {
    frames: framesRef.current,
    loaded,
    total: urls.length,
    ready: urls.length > 0 && loaded >= urls.length,
  }
}
