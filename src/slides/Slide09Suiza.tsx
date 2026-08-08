import { motion } from 'framer-motion'
import { Landmark, Mountain, Banknote } from 'lucide-react'
import Slide from '../components/Slide'
import EuropeMap from '../components/EuropeMap'
import ThreatMeter from '../components/ThreatMeter'
import type { SlideComponentProps } from '../types'

const notes = [
  'Suiza declara neutralidad absoluta ante la invasión. Comunica por escrito y en cuadruplicado que el asunto no le compete.',
  'Abre una cuenta bancaria numerada sin revelar el nombre, la dirección ni el pico de identificación.',
  'Exige permiso notariado para subir a los Alpes. Ningún trámite se resuelve sin papel sellado.',
  'Intenta cambiar el pico por una navaja suiza multiusos. Le informan que ese intercambio no es equitativo.',
]

export default function Slide09Suiza({ active }: SlideComponentProps) {
  return (
    <Slide dossier="09" code="PARTE DE CAMPAÑA // SEC-09" threat="NEUTRALIZADO" threatColor="tactical">
      <div className="grid w-full max-w-5xl grid-cols-1 items-center gap-8 lg:grid-cols-2">
        <EuropeMap progress={4} active={active} className="order-2 lg:order-1" />

        <div className="order-1 flex flex-col items-center gap-4 lg:order-2 lg:items-start">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={active ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-center lg:text-left"
          >
            <div className="font-mono text-[10px] tracking-widest text-tactical sm:text-xs">FASE 4 — EXTRA</div>
            <h2 className="font-display text-3xl font-semibold uppercase tracking-tight text-bone sm:text-5xl">
              Suiza
            </h2>
            <div className="font-mono text-[10px] tracking-widest text-bone-dim sm:text-xs">
              INSTALADO EN NEUTRALIDAD BANCARIA
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
              <Landmark size={11} className="text-tactical-cyan" /> Cuenta numerada: abierta
            </span>
            <span className="flex items-center gap-1 font-mono text-[8px] text-bone-dim sm:text-[9px]">
              <Mountain size={11} className="text-warn" /> Permiso de Alpes: en trámite
            </span>
            <span className="flex items-center gap-1 font-mono text-[8px] text-bone-dim sm:text-[9px]">
              <Banknote size={11} className="text-tactical" /> Chocolate confiscado: 4 tabletas
            </span>
          </motion.div>

          <div className="flex w-full flex-col gap-2 pt-1">
            <ThreatMeter label="Neutralidad declarada" value={100} color="tactical" delay={1.4} segments={14} />
            <ThreatMeter label="Intención de seguir avanzando" value={2} color="alert" delay={1.6} segments={14} />
          </div>
        </div>
      </div>
    </Slide>
  )
}
