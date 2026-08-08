import { useCallback, useEffect, useRef, useState, type TouchEvent } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import ProgressBar from './ProgressBar'
import Navigation from './Navigation'
import { SLIDES } from '../slides'

const swipeThreshold = 50

export default function Presentation() {
  const [index, setIndex] = useState(0)
  const [revealed, setRevealed] = useState(false)
  const [direction, setDirection] = useState(1)
  const touchStart = useRef<number | null>(null)

  const total = SLIDES.length
  const current = SLIDES[index]

  useEffect(() => {
    setRevealed(false)
  }, [index])

  const goNext = useCallback(() => {
    const meta = SLIDES[index]
    if (meta.hasReveal && !revealed) {
      setRevealed(true)
      return
    }
    setDirection(1)
    setIndex((i) => Math.min(i + 1, total - 1))
  }, [index, revealed, total])

  const goPrev = useCallback(() => {
    setDirection(-1)
    setIndex((i) => Math.max(i - 1, 0))
  }, [])

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.code === 'Space') {
        e.preventDefault()
        goNext()
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault()
        goPrev()
      }
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [goNext, goPrev])

  const handleTouchStart = (e: TouchEvent) => {
    touchStart.current = e.touches[0].clientX
  }

  const handleTouchEnd = (e: TouchEvent) => {
    if (touchStart.current === null) return
    const delta = e.changedTouches[0].clientX - touchStart.current
    if (delta < -swipeThreshold) goNext()
    else if (delta > swipeThreshold) goPrev()
    touchStart.current = null
  }

  const SlideComponent = current.Component

  return (
    <div
      className="fixed inset-0 h-[100dvh] w-screen select-none overflow-hidden bg-void-950 font-body"
      onClick={goNext}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <AnimatePresence mode="wait" custom={direction} initial={false}>
        <motion.div
          key={current.id}
          custom={direction}
          initial={{ opacity: 0, x: direction * 40 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: direction * -40 }}
          transition={{ duration: 0.45, ease: 'easeInOut' }}
          className="absolute inset-0"
        >
          <SlideComponent active revealed={revealed} index={index + 1} total={total} />
        </motion.div>
      </AnimatePresence>

      <ProgressBar index={index} total={total} label={current.label} />
      <Navigation
        onPrev={goPrev}
        onNext={goNext}
        canPrev={index > 0}
        canNext={index < total - 1 || (current.hasReveal === true && !revealed)}
        hasReveal={current.hasReveal}
        revealed={revealed}
      />
    </div>
  )
}
