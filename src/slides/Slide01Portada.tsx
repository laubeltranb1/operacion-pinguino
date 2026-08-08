import { motion } from 'framer-motion'
import { Radar as RadarIcon } from 'lucide-react'
import Slide from '../components/Slide'
import PenguinSilhouette from '../components/ui/PenguinSilhouette'
import ClassifiedStamp from '../components/ui/ClassifiedStamp'
import RadarSweep from '../components/ui/RadarSweep'
import type { SlideComponentProps } from '../types'

export default function Slide01Portada({ active }: SlideComponentProps) {
  return (
    <Slide dossier="01" code="OPERACIÓN PINGÜINO" threat="DESCONOCIDO" threatColor="warn">
      <div className="relative flex w-full max-w-6xl flex-col-reverse items-center gap-6 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
        <div className="flex flex-col items-center text-center sm:items-start sm:text-left">
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={active ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="mb-3 flex items-center gap-2 font-mono text-[10px] tracking-widest text-tactical-cyan sm:text-xs"
          >
            <RadarIcon size={12} className="animate-pulseSlow" />
            DOSSIER 01 · COMITÉ DE CRISIS ANTÁRTICO
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={active ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-5xl font-semibold uppercase leading-[0.95] tracking-tight text-bone sm:text-7xl lg:text-8xl"
          >
            Operación
            <br />
            <span className="text-alert">Pingüino</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={active ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="mt-5 max-w-xl font-display text-base uppercase tracking-wide text-bone/90 sm:text-xl"
          >
            ¿Qué tan lejos podría llegar un pingüino intentando conquistar Europa?
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={active ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-2 font-mono text-[11px] italic text-bone-dim sm:text-sm"
          >
            Análisis geopolítico innecesariamente serio.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={active ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="mt-8 flex flex-wrap items-center justify-center gap-3 sm:justify-start"
          >
            <ClassifiedStamp />
            <span className="font-mono text-[10px] tracking-widest text-bone-dim sm:text-xs">
              NIVEL DE AMENAZA:{' '}
              <span className="text-warn">DESCONOCIDO</span>
            </span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={active ? { opacity: [0, 1, 0.4, 1] } : {}}
            transition={{ duration: 2, delay: 1.4, repeat: Infinity, repeatDelay: 1.5 }}
            className="mt-10 font-mono text-[9px] tracking-widest text-tactical-cyan/70 sm:text-[10px]"
          >
            ▸ TOQUE, HAGA CLIC O PULSE → PARA INICIAR EL BRIEFING
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={active ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.9, delay: 0.2, ease: 'easeOut' }}
          className="relative flex h-52 w-52 shrink-0 items-center justify-center sm:h-80 sm:w-80"
        >
          <div className="absolute inset-0 flex items-center justify-center opacity-60">
            <RadarSweep size={280} />
          </div>
          <PenguinSilhouette className="relative z-10 h-40 drop-shadow-[0_0_25px_rgba(233,230,220,0.15)] sm:h-64" />
        </motion.div>
      </div>
    </Slide>
  )
}
