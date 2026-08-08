import { motion } from 'framer-motion'
import { Milestone, Award, AlertTriangle } from 'lucide-react'
import Slide from '../components/Slide'
import EuropeMap from '../components/EuropeMap'
import ThreatMeter from '../components/ThreatMeter'
import type { SlideComponentProps } from '../types'

const notes = [
  'Cruza los Pirineos en autostop, oculto entre cajas de un camión de pescado con destino a Perpiñán.',
  'Francia se rinde antes de su llegada oficial. Motivo declarado: "razones estéticas".',
  'Exige tributo formal en queso y baguettes. Se le concede sin negociación.',
  'Recibe la Legión de Honor "por elegancia, no por mérito militar".',
]

export default function Slide07Francia({ active }: SlideComponentProps) {
  return (
    <Slide dossier="07" code="PARTE DE CAMPAÑA // SEC-07" threat="DIPLOMÁTICO" threatColor="warn">
      <div className="grid w-full max-w-5xl grid-cols-1 items-center gap-8 lg:grid-cols-2">
        <EuropeMap progress={2} active={active} className="order-2 lg:order-1" />

        <div className="order-1 flex flex-col items-center gap-4 lg:order-2 lg:items-start">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={active ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-center lg:text-left"
          >
            <div className="font-mono text-[10px] tracking-widest text-tactical sm:text-xs">FASE 2</div>
            <h2 className="font-display text-3xl font-semibold uppercase tracking-tight text-bone sm:text-5xl">
              Francia
            </h2>
            <div className="font-mono text-[10px] tracking-widest text-bone-dim sm:text-xs">
              RENDICIÓN DIPLOMÁTICA INSTANTÁNEA
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
            className="flex w-full items-center justify-center gap-4 pt-1 lg:justify-start"
          >
            <span className="flex items-center gap-1 font-mono text-[8px] text-bone-dim sm:text-[9px]">
              <Milestone size={11} className="text-tactical-cyan" /> Autostop: exitoso
            </span>
            <span className="flex items-center gap-1 font-mono text-[8px] text-bone-dim sm:text-[9px]">
              <Award size={11} className="text-warn" /> Legión de Honor: concedida
            </span>
            <span className="flex items-center gap-1 font-mono text-[8px] text-bone-dim sm:text-[9px]">
              <AlertTriangle size={11} className="text-alert" /> Escaleras del Louvre: sin resolver
            </span>
          </motion.div>

          <div className="flex w-full flex-col gap-2 pt-1">
            <ThreatMeter label="Nivel de rendición" value={100} color="alert" delay={1.4} segments={14} />
            <ThreatMeter label="Tributo en queso recaudado" value={64} color="tactical" delay={1.6} segments={14} />
          </div>
        </div>
      </div>
    </Slide>
  )
}
