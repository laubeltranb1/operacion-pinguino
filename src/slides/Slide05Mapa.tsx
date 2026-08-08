import { motion } from 'framer-motion'
import { Route } from 'lucide-react'
import Slide from '../components/Slide'
import EuropeMap from '../components/EuropeMap'
import type { SlideComponentProps } from '../types'

export default function Slide05Mapa({ active }: SlideComponentProps) {
  return (
    <Slide dossier="05" code="MAPA DE OPERACIONES // SEC-05" threat="EN RUTA" threatColor="tactical">
      <div className="flex w-full max-w-4xl flex-col items-center gap-5">
        <motion.h2
          initial={{ opacity: 0, y: -12 }}
          animate={active ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center font-display text-3xl font-semibold uppercase tracking-tight text-bone sm:text-5xl"
        >
          Ruta de invasión <span className="text-tactical-cyan">proyectada</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={active ? { opacity: 1 } : {}}
          transition={{ delay: 0.3 }}
          className="flex items-center gap-1.5 text-center font-mono text-[10px] tracking-widest text-bone-dim sm:text-xs"
        >
          <Route size={12} className="text-tactical-cyan" />
          CUATRO FASES. UN PICO. NINGÚN PLAN B.
        </motion.p>

        <EuropeMap progress={0} active={active} className="mt-1" />

        <div className="grid w-full max-w-2xl grid-cols-2 gap-2 sm:grid-cols-4 sm:gap-4">
          {[
            { n: 'FASE 1', c: 'ESPAÑA', d: 'Cabeza de playa' },
            { n: 'FASE 2', c: 'FRANCIA', d: 'Frente central' },
            { n: 'FASE 3', c: 'ALEMANIA', d: 'Línea de contención' },
            { n: 'FASE 4', c: 'SUIZA', d: 'Último búnker' },
          ].map((f, i) => (
            <motion.div
              key={f.c}
              initial={{ opacity: 0, y: 10 }}
              animate={active ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 1.5 + i * 0.15 }}
              className="border border-bone/10 bg-void-900/40 px-2 py-2 text-center sm:px-3"
            >
              <div className="font-mono text-[8px] tracking-widest text-tactical sm:text-[9px]">{f.n}</div>
              <div className="font-display text-sm text-bone sm:text-base">{f.c}</div>
              <div className="font-mono text-[8px] text-bone-dim sm:text-[9px]">{f.d}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </Slide>
  )
}
