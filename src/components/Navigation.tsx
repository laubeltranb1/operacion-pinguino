import { ChevronLeft, ChevronRight, Keyboard } from 'lucide-react'

interface NavigationProps {
  onPrev: () => void
  onNext: () => void
  canPrev: boolean
  canNext: boolean
  hasReveal?: boolean
  revealed?: boolean
}

/** Fixed prev/next controls plus a keyboard-shortcut hint, pinned to the bottom of the viewport. */
export default function Navigation({ onPrev, onNext, canPrev, canNext, hasReveal, revealed }: NavigationProps) {
  return (
    <>
      <button
        type="button"
        aria-label="Diapositiva anterior"
        onClick={(e) => {
          e.stopPropagation()
          onPrev()
        }}
        disabled={!canPrev}
        className="group absolute left-2 top-1/2 z-30 -translate-y-1/2 border border-bone/15 bg-void-950/40 p-2 sm:left-4 sm:p-3 backdrop-blur-sm transition hover:border-tactical-cyan/50 hover:bg-void-900/70 disabled:opacity-20 disabled:hover:border-bone/15"
      >
        <ChevronLeft className="h-5 w-5 text-bone-dim transition group-hover:text-tactical-cyan sm:h-6 sm:w-6" />
      </button>

      <button
        type="button"
        aria-label={hasReveal && !revealed ? 'Revelar' : 'Siguiente diapositiva'}
        onClick={(e) => {
          e.stopPropagation()
          onNext()
        }}
        disabled={!canNext}
        className="group absolute right-2 top-1/2 z-30 -translate-y-1/2 border border-bone/15 bg-void-950/40 p-2 sm:right-4 sm:p-3 backdrop-blur-sm transition hover:border-tactical-cyan/50 hover:bg-void-900/70 disabled:opacity-20 disabled:hover:border-bone/15"
      >
        <ChevronRight className="h-5 w-5 text-bone-dim transition group-hover:text-tactical-cyan sm:h-6 sm:w-6" />
      </button>

      <div className="pointer-events-none absolute inset-x-0 bottom-8 z-30 flex justify-center sm:bottom-10">
        <div className="flex items-center gap-2 rounded-sm border border-bone/10 bg-void-950/50 px-3 py-1.5 font-mono text-[8px] tracking-widest text-bone-dim backdrop-blur-sm sm:text-[9px]">
          <ChevronLeft size={11} />
          <ChevronRight size={11} />
          <span>NAVEGAR</span>
          <span className="mx-1 opacity-30">|</span>
          <Keyboard size={11} />
          <span>SPACE · {hasReveal && !revealed ? 'REVELAR' : 'AVANZAR'}</span>
        </div>
      </div>
    </>
  )
}
