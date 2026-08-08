import { useEffect, useState } from 'react'
import { motion, useAnimationFrame } from 'framer-motion'

interface AnimatedCounterProps {
  value: number
  duration?: number
  decimals?: number
  prefix?: string
  suffix?: string
  delay?: number
  className?: string
}

/**
 * Counts up from 0 to `value` like a targeting computer locking onto a number.
 * Restarts every time it is remounted (i.e. every time its parent slide mounts).
 */
export default function AnimatedCounter({
  value,
  duration = 1.4,
  decimals = 0,
  prefix = '',
  suffix = '',
  delay = 0,
  className = '',
}: AnimatedCounterProps) {
  const [display, setDisplay] = useState(0)
  const [start, setStart] = useState(false)
  const [startedAt, setStartedAt] = useState<number | null>(null)

  useEffect(() => {
    const t = setTimeout(() => setStart(true), delay * 1000)
    return () => clearTimeout(t)
  }, [delay])

  useAnimationFrame((time) => {
    if (!start) return
    if (startedAt === null) {
      setStartedAt(time)
      return
    }
    const elapsed = (time - startedAt) / 1000
    const progress = Math.min(elapsed / duration, 1)
    const eased = 1 - Math.pow(1 - progress, 3)
    setDisplay(value * eased)
  })

  return (
    <motion.span
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay }}
      className={className}
    >
      {prefix}
      {display.toFixed(decimals)}
      {suffix}
    </motion.span>
  )
}
