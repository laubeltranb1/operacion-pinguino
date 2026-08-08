import { motion } from 'framer-motion'
import { Gauge } from 'lucide-react'
import Slide from '../components/Slide'
import ThreatMeter from '../components/ThreatMeter'
import type { SlideComponentProps } from '../types'

const dossier = [
  { k: 'NIVEL DE AMENAZA', v: 'Sospechosamente adorable' },
  { k: 'PRESUPUESTO MILITAR', v: '€14.70' },
  { k: 'OBJETIVO ACTUAL', v: 'Europa' },
  { k: 'ARMA PRINCIPAL', v: '1 (un) pico' },
  { k: 'ESTATUS DIPLOMÁTICO', v: 'Complicado' },
  { k: 'RESPUESTA DE LA OTAN', v: 'Confusión' },
]

export default function Slide12Riesgo({ active }: SlideComponentProps) {
  return (
    <Slide dossier="12" code="EVALUACIÓN DE RIESGO // SEC-12" threat="INDEFINIBLE" threatColor="warn">
      <div className="flex w-full max-w-4xl flex-col items-center gap-8">
        <motion.h2
          initial={{ opacity: 0, y: -12 }}
          animate={active ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-2 text-center font-display text-3xl font-semibold uppercase tracking-tight text-bone sm:text-5xl"
        >
          <Gauge className="text-tactical-cyan" size={30} />
          Análisis de <span className="text-tactical-cyan">riesgo</span>
        </motion.h2>

        <div className="grid w-full grid-cols-2 gap-2 sm:grid-cols-3 sm:gap-3">
          {dossier.map((d, i) => (
            <motion.div
              key={d.k}
              initial={{ opacity: 0, y: 10 }}
              animate={active ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 + i * 0.1 }}
              className="border border-bone/10 bg-void-900/40 px-3 py-2.5 text-left"
            >
              <div className="font-mono text-[8px] tracking-widest text-bone-dim sm:text-[9px]">{d.k}</div>
              <div className="font-display text-sm text-warn sm:text-base">{d.v}</div>
            </motion.div>
          ))}
        </div>

        <div className="flex w-full max-w-lg flex-col gap-3">
          <ThreatMeter label="Probabilidad de éxito de la invasión" value={22} color="alert" delay={1.1} />
          <ThreatMeter label="Daño económico estimado (chiringuitos)" value={41} color="warn" delay={1.3} />
          <ThreatMeter label="Simpatía pública hacia el invasor" value={95} color="tactical" delay={1.5} />
          <ThreatMeter label="Capacidad de reacción coordinada" value={9} color="cyan" delay={1.7} />
        </div>
      </div>
    </Slide>
  )
}
