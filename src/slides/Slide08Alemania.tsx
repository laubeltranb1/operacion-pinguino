import { motion } from 'framer-motion'
import { FileWarning, Clock, TrainFront } from 'lucide-react'
import Slide from '../components/Slide'
import EuropeMap from '../components/EuropeMap'
import ThreatMeter from '../components/ThreatMeter'
import type { SlideComponentProps } from '../types'

const notes = [
  'El avance se detiene ante un formulario en triplicado que nadie, ni humano ni pingüino, ha logrado completar.',
  'Cita obligatoria en el Bürgeramt: primera disponibilidad en 8 meses.',
  'Se le exige registrarse para el impuesto canino (Hundesteuer) pese a no ser, técnicamente, un perro.',
  'La puntualidad de los trenes lo desorienta más que cualquier arma conocida.',
]

export default function Slide08Alemania({ active }: SlideComponentProps) {
  return (
    <Slide dossier="08" code="PARTE DE CAMPAÑA // SEC-08" threat="CONTENIDO" threatColor="tactical">
      <div className="grid w-full max-w-5xl grid-cols-1 items-center gap-8 lg:grid-cols-2">
        <div className="flex flex-col items-center gap-4 lg:items-start">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={active ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-center lg:text-left"
          >
            <div className="font-mono text-[10px] tracking-widest text-tactical sm:text-xs">FASE 3</div>
            <h2 className="font-display text-3xl font-semibold uppercase tracking-tight text-bone sm:text-5xl">
              Alemania
            </h2>
            <div className="font-mono text-[10px] tracking-widest text-bone-dim sm:text-xs">
              LÍNEA DE CONTENCIÓN BUROCRÁTICA
            </div>
          </motion.div>

          <ul className="flex w-full flex-col gap-2.5 text-left">
            {notes.map((n, i) => (
              <motion.li
                key={n}
                initial={{ opacity: 0, x: -10 }}
                animate={active ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.35 + i * 0.2 }}
                className="border-l-2 border-tactical/50 pl-3 text-xs text-bone/85 sm:text-sm"
              >
                {n}
              </motion.li>
            ))}
          </ul>

          <motion.div
            initial={{ opacity: 0 }}
            animate={active ? { opacity: 1 } : {}}
            transition={{ delay: 1.2 }}
            className="flex w-full items-center justify-center gap-4 pt-1 lg:justify-start"
          >
            <span className="flex items-center gap-1 font-mono text-[8px] text-bone-dim sm:text-[9px]">
              <FileWarning size={11} className="text-alert" /> Papeleo: sin resolver
            </span>
            <span className="flex items-center gap-1 font-mono text-[8px] text-bone-dim sm:text-[9px]">
              <Clock size={11} className="text-warn" /> Espera: 8 meses
            </span>
            <span className="flex items-center gap-1 font-mono text-[8px] text-bone-dim sm:text-[9px]">
              <TrainFront size={11} className="text-tactical" /> Puntualidad: inquietante
            </span>
          </motion.div>

          <div className="flex w-full flex-col gap-2 pt-1">
            <ThreatMeter label="Avance detenido por burocracia" value={91} color="alert" delay={1.4} segments={14} />
            <ThreatMeter label="Voluntad de seguir avanzando" value={8} color="tactical" delay={1.6} segments={14} />
          </div>
        </div>

        <EuropeMap progress={3} active={active} />
      </div>
    </Slide>
  )
}
