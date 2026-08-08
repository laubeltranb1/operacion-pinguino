import { motion } from 'framer-motion'
import { Umbrella, Sun, ShieldOff } from 'lucide-react'
import Slide from '../components/Slide'
import EuropeMap from '../components/EuropeMap'
import ThreatMeter from '../components/ThreatMeter'
import type { SlideComponentProps } from '../types'

const notes = [
  'Desembarca al amanecer en Tarifa. Un socorrista lo confunde con una tortuga marina "muy grande y muy segura de sí misma".',
  'Es adoptado como mascota oficial en tres chiringuitos en menos de dos horas.',
  'Declara la siesta "estrategia militar válida". Nadie lo contradice.',
  'La población evalúa el riesgo así: "qué tierno". Amenaza descartada por consenso general.',
]

export default function Slide06Espana({ active }: SlideComponentProps) {
  return (
    <Slide dossier="06" code="PARTE DE CAMPAÑA // SEC-06" threat="ENCANTADOR" threatColor="warn">
      <div className="grid w-full max-w-5xl grid-cols-1 items-center gap-8 lg:grid-cols-2">
        <div className="flex flex-col items-center gap-4 lg:items-start">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={active ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-center lg:text-left"
          >
            <div className="font-mono text-[10px] tracking-widest text-tactical sm:text-xs">FASE 1</div>
            <h2 className="font-display text-3xl font-semibold uppercase tracking-tight text-bone sm:text-5xl">
              España
            </h2>
            <div className="font-mono text-[10px] tracking-widest text-bone-dim sm:text-xs">
              CABEZA DE PLAYA ESTABLECIDA
            </div>
          </motion.div>

          <ul className="flex w-full flex-col gap-2.5 text-left">
            {notes.map((n, i) => (
              <motion.li
                key={n}
                initial={{ opacity: 0, x: -10 }}
                animate={active ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.35 + i * 0.2 }}
                className="border-l-2 border-warn/50 pl-3 text-xs text-bone/85 sm:text-sm"
              >
                {n}
              </motion.li>
            ))}
          </ul>

          <motion.div
            initial={{ opacity: 0 }}
            animate={active ? { opacity: 1 } : {}}
            transition={{ delay: 1.2 }}
            className="grid w-full grid-cols-3 gap-2 pt-1"
          >
            <span className="flex items-center gap-1 font-mono text-[8px] text-bone-dim sm:text-[9px]">
              <Umbrella size={11} className="text-warn" /> Playas ocupadas
            </span>
            <span className="flex items-center gap-1 font-mono text-[8px] text-bone-dim sm:text-[9px]">
              <Sun size={11} className="text-alert" /> Insolación: alta
            </span>
            <span className="flex items-center gap-1 font-mono text-[8px] text-bone-dim sm:text-[9px]">
              <ShieldOff size={11} className="text-tactical" /> Resistencia: nula
            </span>
          </motion.div>

          <div className="flex w-full flex-col gap-2 pt-1">
            <ThreatMeter label="Territorio bajo influencia" value={12} color="tactical" delay={1.4} segments={14} />
            <ThreatMeter label="Simpatía de la población local" value={97} color="warn" delay={1.6} segments={14} />
          </div>
        </div>

        <EuropeMap progress={1} active={active} />
      </div>
    </Slide>
  )
}
