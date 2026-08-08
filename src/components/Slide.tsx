import type { ReactNode } from 'react'
import { motion } from 'framer-motion'
import { Lock } from 'lucide-react'
import CornerBrackets from './ui/CornerBrackets'
import ArmedPenguinMarch from './ui/ArmedPenguinMarch'
import useClock from '../hooks/useClock'

interface SlideProps {
  /** Dossier folio, e.g. "01" */
  dossier: string
  /** Short code shown top-left, e.g. "OP-PINGUINO / SEC-04" */
  code?: string
  /** Threat level word shown top-right, e.g. "CRÍTICO" */
  threat?: string
  threatColor?: 'alert' | 'warn' | 'tactical'
  children: ReactNode
  /** Extra classes for the inner content container. */
  contentClassName?: string
}

const threatColorMap = {
  alert: 'text-alert border-alert/50',
  warn: 'text-warn border-warn/50',
  tactical: 'text-tactical border-tactical/50',
}

/**
 * Shared full-viewport chrome for every slide: grid backdrop, scanlines,
 * corner HUD brackets, classification header/footer, live clock.
 * Each slide's unique content is passed as children.
 */
export default function Slide({
  dossier,
  code = 'OPERACIÓN PINGÜINO',
  threat,
  threatColor = 'warn',
  children,
  contentClassName = '',
}: SlideProps) {
  const { time, date } = useClock()

  return (
    <div className="relative h-full w-full overflow-hidden bg-void-950 text-bone">
      {/* backdrop layers */}
      <div className="pointer-events-none absolute inset-0 bg-grid bg-[length:38px_38px] opacity-70" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-void-950 via-transparent to-void-950" />
      <div className="pointer-events-none absolute inset-0 bg-noise opacity-30" />
      <div className="pointer-events-none absolute inset-0 scanline-overlay opacity-40" />
      <div className="pointer-events-none absolute inset-0 vignette" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-tactical-cyan/[0.04] animate-scan" />

      <CornerBrackets />
      <ArmedPenguinMarch />

      {/* header */}
      <div className="absolute inset-x-0 top-0 z-20 flex items-start justify-between px-4 pt-3 sm:px-8 sm:pt-6 font-mono text-[9px] sm:text-[11px] tracking-widest text-bone-dim">
        <div className="flex flex-col gap-0.5">
          <span className="text-tactical-cyan/80">{code}</span>
          <span>DOSSIER N.º {dossier}/14 — NIVEL DE ACCESO: ULTRA</span>
        </div>
        <div className="flex flex-col items-end gap-0.5">
          <span className="flex items-center gap-1.5">
            <Lock size={10} className="text-alert" />
            EYES ONLY
          </span>
          <span>{date} · {time}</span>
        </div>
      </div>

      {/* threat badge */}
      {threat && (
        <div
          className={`absolute right-4 top-16 sm:right-8 sm:top-20 z-20 border px-2 py-1 font-mono text-[9px] sm:text-[10px] tracking-widest ${threatColorMap[threatColor]} animate-pulseSlow`}
        >
          AMENAZA: {threat}
        </div>
      )}

      {/* main content */}
      <motion.div
        className={`relative z-10 flex h-full w-full flex-col items-center justify-center px-6 pb-16 pt-16 sm:px-16 sm:pb-20 sm:pt-20 ${contentClassName}`}
      >
        {children}
      </motion.div>

      {/* footer */}
      <div className="absolute inset-x-0 bottom-0 z-20 flex items-end justify-between px-4 pb-3 sm:px-8 sm:pb-6 font-mono text-[9px] sm:text-[10px] tracking-widest text-bone-dim">
        <span>COMITÉ DE CRISIS ANTÁRTICO · SECCIÓN GEOPOLÍTICA</span>
        <span className="hidden sm:inline">COORD. 71.5°S 23.3°E</span>
      </div>
    </div>
  )
}
