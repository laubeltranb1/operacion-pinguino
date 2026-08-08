import { motion } from 'framer-motion'
import { useState } from 'react'
import { ShieldAlert } from 'lucide-react'

interface ProgressBarProps {
  index: number
  total: number
  label: string
}

/**
 * Slim top progress rail: fill bar, "SLIDE 03/14" readout, blinking REC dot,
 * and a CLASSIFIED pill that — for no operational reason whatsoever — denies you access when clicked.
 */
export default function ProgressBar({ index, total, label }: ProgressBarProps) {
  const [denied, setDenied] = useState(false)
  const pct = ((index + 1) / total) * 100

  const handleDenied = () => {
    setDenied(true)
    window.setTimeout(() => setDenied(false), 1400)
  }

  return (
    <div className="pointer-events-none absolute inset-x-0 top-0 z-30 flex flex-col">
      <div className="h-[2px] w-full bg-void-700/60">
        <motion.div
          className="h-full bg-gradient-to-r from-tactical-cyan via-tactical to-warn"
          initial={false}
          animate={{ width: `${pct}%` }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        />
      </div>

      <div className="pointer-events-auto flex items-center justify-center gap-3 py-1.5 sm:py-2">
        <span className="flex items-center gap-1.5 font-mono text-[9px] sm:text-[10px] tracking-widest text-alert">
          <span className="h-1.5 w-1.5 rounded-full bg-alert animate-blink" />
          REC
        </span>
        <span className="font-mono text-[9px] sm:text-[10px] tracking-widest text-bone-dim">
          {String(index + 1).padStart(2, '0')} / {String(total).padStart(2, '0')} — {label}
        </span>
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation()
            handleDenied()
          }}
          className="relative flex items-center gap-1 border border-alert/60 px-1.5 py-0.5 font-display text-[9px] sm:text-[10px] font-semibold tracking-widest-plus text-alert transition hover:bg-alert/10"
        >
          <ShieldAlert size={10} />
          {denied ? 'ACCESO DENEGADO' : 'CLASSIFIED'}
        </button>
      </div>
    </div>
  )
}
