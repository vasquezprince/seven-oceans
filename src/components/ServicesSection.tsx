import { useEffect, useLayoutEffect, useMemo, useRef, useState, type ReactNode } from 'react'
import { servicesSection } from '../content/siteContent'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { useFrameSequence } from '../hooks/useFrameSequence'
import { useScrollProgress } from '../hooks/useScrollProgress'

const TOTAL_FRAMES = 151
const STAGES = 3 + servicesSection.items.length // intro + title + 5 items + summary = 8
const TITLE_STAGE = 1
const FIRST_ITEM_STAGE = 2
const SUMMARY_STAGE = FIRST_ITEM_STAGE + servicesSection.items.length // 7
const frameUrl = (n: number) =>
  `/images/core-services/core-services-${String(n).padStart(4, '0')}.jpg`

function beatClass(index: number, stage: number) {
  if (index === stage) return 'active'
  if (index < stage) return 'above'
  return 'below'
}

export default function ServicesSection() {
  const [framesAvailable, setFramesAvailable] = useState(false)

  useEffect(() => {
    const probe = new Image()
    probe.onload = () => {
      if (probe.naturalWidth > 0) setFramesAvailable(true)
    }
    probe.src = frameUrl(1)
  }, [])

  return framesAvailable ? <AnimatedServices /> : <StaticServices />
}

function StaticServices() {
  const ref = useScrollReveal<HTMLDivElement>()

  return (
    <section
      id={servicesSection.sectionId}
      className="section-divider"
      style={{ position: 'relative', minHeight: 540, overflow: 'hidden' }}
    >
      <div style={{
        position: 'absolute',
        inset: 0,
        background: `
          radial-gradient(circle at 22% 35%, rgba(118,167,255,.10), transparent 28%),
          linear-gradient(180deg, rgba(6,10,18,.95), rgba(3,6,11,.98))
        `,
      }} />

      <div className="split-grid" style={{
        maxWidth: 'var(--page-max)',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: '42% 58%',
        alignItems: 'stretch',
        minHeight: 540,
        position: 'relative',
      }}>
        <div className="split-image-col" style={{ position: 'relative', minHeight: 540 }}>
          <div style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(90deg, rgba(4,7,12,.06), rgba(4,7,12,0) 38%)',
            pointerEvents: 'none',
          }} />
        </div>

        <div className="split-text-col" style={{
          position: 'relative',
          zIndex: 2,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-start',
          padding: '52px 42px 52px 34px',
          background: 'rgba(8, 12, 19, 0.34)',
          backdropFilter: 'blur(18px) saturate(120%)',
          WebkitBackdropFilter: 'blur(18px) saturate(120%)',
          borderLeft: '1px solid rgba(255,255,255,.08)',
          boxShadow: 'inset 0 0 0 1px rgba(255,255,255,.025), inset 24px 0 42px rgba(0,0,0,.12)',
        }}>
          <div ref={ref} className="reveal" style={{ maxWidth: 560 }}>
            <h2 style={{
              margin: 0,
              fontSize: 'clamp(2rem, 3.2vw, 3.35rem)',
              lineHeight: 1,
              letterSpacing: '-.03em',
              textTransform: 'uppercase',
              color: '#fff',
              fontFamily: 'var(--font-display)',
              textWrap: 'balance',
            }}>
              {servicesSection.heading.split('\n').map((line, i) => (
                <span key={i}>
                  {line}
                  {i === 0 && <br />}
                </span>
              ))}
            </h2>

            <ul style={{
              listStyle: 'none',
              padding: 0,
              margin: '28px 0 0',
              display: 'grid',
              gap: 18,
            }}>
              {servicesSection.items.map((item) => (
                <li key={item.title} style={{
                  paddingLeft: 18,
                  borderLeft: '2px solid rgba(126,176,255,.5)',
                }}>
                  <div style={{
                    color: '#fff',
                    fontFamily: 'var(--font-display)',
                    fontSize: '1.04rem',
                    lineHeight: 1.25,
                    letterSpacing: '.01em',
                    fontWeight: 600,
                    marginBottom: 4,
                  }}>
                    {item.title}
                  </div>
                  <div style={{
                    color: 'rgba(225,232,243,.78)',
                    fontSize: '.94rem',
                    lineHeight: 1.55,
                  }}>
                    {item.description}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

function renderBeatContent(stageIdx: number): ReactNode {
  if (stageIdx === TITLE_STAGE) {
    return (
      <>
        <h2 className="core-services-title">
          {servicesSection.heading.split('\n').map((line, i) => (
            <span key={i}>
              {line}
              {i === 0 && <br />}
            </span>
          ))}
        </h2>
        <p className="core-services-lede">
          Six pillars of concierge-grade oversight.
        </p>
      </>
    )
  }
  if (stageIdx >= FIRST_ITEM_STAGE && stageIdx < SUMMARY_STAGE) {
    const i = stageIdx - FIRST_ITEM_STAGE
    const item = servicesSection.items[i]
    return (
      <>
        <div className="core-services-index">
          {String(i + 1).padStart(2, '0')} / 05
        </div>
        <div className="core-services-item-title">{item.title}</div>
        <div className="core-services-item-desc">{item.description}</div>
      </>
    )
  }
  if (stageIdx === SUMMARY_STAGE) {
    return (
      <>
        <h2 className="core-services-summary-title">
          {servicesSection.heading.split('\n').map((line, i) => (
            <span key={i}>
              {line}
              {i === 0 && <br />}
            </span>
          ))}
        </h2>
        <ul className="core-services-summary-list">
          {servicesSection.items.map((item) => (
            <li key={item.title}>
              <div className="core-services-summary-item-title">{item.title}</div>
              <div className="core-services-summary-item-desc">{item.description}</div>
            </li>
          ))}
        </ul>
      </>
    )
  }
  return null
}

function AnimatedServices() {
  const spacerRef = useRef<HTMLDivElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const ghostRef = useRef<HTMLDivElement>(null)
  const [panelH, setPanelH] = useState<number | undefined>(undefined)

  const urls = useMemo(
    () => Array.from({ length: TOTAL_FRAMES }, (_, i) => frameUrl(i + 1)),
    []
  )
  const { frames, loaded, total, ready } = useFrameSequence({ urls })
  const progress = useScrollProgress(spacerRef)

  const frameIndex = Math.min(TOTAL_FRAMES - 1, Math.floor(progress * TOTAL_FRAMES))
  const stage = Math.min(STAGES - 1, Math.floor(progress * STAGES))

  const panelVisible = progress >= 0.2
  const rightSide = stage >= FIRST_ITEM_STAGE + 3 // item 04/05 onwards

  useLayoutEffect(() => {
    const ghost = ghostRef.current
    if (!ghost) return
    const measure = () => setPanelH(ghost.offsetHeight)
    measure()
    const ro = new ResizeObserver(measure)
    ro.observe(ghost)
    return () => ro.disconnect()
  }, [stage])

  useEffect(() => {
    if (!ready) return
    const canvas = canvasRef.current
    const frame = frames[frameIndex]
    if (!canvas || !frame || !frame.naturalWidth) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const dpr = window.devicePixelRatio || 1
    const cw = canvas.clientWidth
    const ch = canvas.clientHeight
    if (canvas.width !== cw * dpr || canvas.height !== ch * dpr) {
      canvas.width = cw * dpr
      canvas.height = ch * dpr
    }

    const iw = frame.naturalWidth
    const ih = frame.naturalHeight
    const scale = Math.max((cw * dpr) / iw, (ch * dpr) / ih)
    const dw = iw * scale
    const dh = ih * scale
    const dx = (cw * dpr - dw) / 2
    const dy = (ch * dpr - dh) / 2

    ctx.clearRect(0, 0, canvas.width, canvas.height)
    ctx.drawImage(frame, dx, dy, dw, dh)
  }, [frameIndex, ready, frames])

  return (
    <section
      id={servicesSection.sectionId}
      className="section-divider core-services-section"
    >
      <div ref={spacerRef} className="core-services-spacer">
        <div className="core-services-stage">
          <canvas ref={canvasRef} className="core-services-canvas" />

          <div className="core-services-vignette" />

          {!ready && (
            <div className="core-services-loader">
              <div className="core-services-loader-bar">
                <div
                  className="core-services-loader-fill"
                  style={{ width: `${total ? (loaded / total) * 100 : 0}%` }}
                />
              </div>
            </div>
          )}

          <div className="core-services-overlay">
            <div
              className={`core-services-panel ${panelVisible ? 'visible' : ''} ${rightSide ? 'right-side' : ''}`}
              style={{ height: panelH }}
            >
              <div
                ref={ghostRef}
                className="core-services-panel-ghost"
                aria-hidden="true"
              >
                {renderBeatContent(stage) ?? renderBeatContent(TITLE_STAGE)}
              </div>

              <div className={`core-services-beat ${beatClass(TITLE_STAGE, stage)}`}>
                {renderBeatContent(TITLE_STAGE)}
              </div>

              {servicesSection.items.map((_, i) => {
                const index = FIRST_ITEM_STAGE + i
                return (
                  <div
                    key={index}
                    className={`core-services-beat ${beatClass(index, stage)}`}
                  >
                    {renderBeatContent(index)}
                  </div>
                )
              })}

              <div className={`core-services-beat core-services-summary ${beatClass(SUMMARY_STAGE, stage)}`}>
                {renderBeatContent(SUMMARY_STAGE)}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
