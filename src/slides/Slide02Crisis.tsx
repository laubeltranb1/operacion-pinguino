import { motion } from 'framer-motion'
import { AlertTriangle, Radio } from 'lucide-react'
import Slide from '../components/Slide'
import ThreatMeter from '../components/ThreatMeter'
import type { SlideComponentProps } from '../types'

const log = [
  { t: '06:14Z', text: 'La estación Belgrano II reporta "movimiento organizado" en el perímetro sur.' },
  { t: '06:47Z', text: 'Un ejemplar es visto estudiando un mapa náutico abandonado con mucha atención.' },
  { t: '07:03Z', text: 'Desaparece un bote inflable. Se encuentran huellas. Son palmeadas.' },
  { t: '07:22Z', text: 'Se intercepta un audio: graznidos con un patrón sospechosamente rítmico.' },
  { t: '08:00Z', text: 'Se convoca de urgencia al Comité de Crisis Antártico.' },
  { t: '08:01Z', text: 'Alguien pregunta si esto es una broma. Nadie responde.' },
]

export default function Slide02Crisis({ active }: SlideComponentProps) {
  return (
    <Slide dossier="02" code="INFORME DE INCIDENTE // SEC-02" threat="EN AUMENTO" threatColor="alert">
      <div className="flex w-full max-w-4xl flex-col items-center gap-8 sm:gap-10">
        <motion.h2
          initial={{ opacity: 0, y: -12 }}
          animate={active ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center font-display text-4xl font-semibold uppercase tracking-tight text-bone sm:text-6xl"
        >
          La crisis <span className="text-alert">comienza</span>
        </motion.h2>

        <div className="w-full max-w-2xl border border-bone/10 bg-void-900/50 backdrop-blur-sm">
          <div className="flex items-center gap-2 border-b border-bone/10 bg-void-800/50 px-4 py-2 font-mono text-[10px] tracking-widest text-tactical-cyan sm:text-xs">
            <Radio size={12} className="animate-pulseSlow" />
            REGISTRO DE COMUNICACIONES — ANTÁRTIDA / SECTOR 7
          </div>
          <ul className="flex flex-col divide-y divide-bone/5">
            {log.map((entry, i) => (
              <motion.li
                key={entry.t}
                initial={{ opacity: 0, x: -10 }}
                animate={active ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.4 + i * 0.35, duration: 0.4 }}
                className="flex items-start gap-3 px-4 py-2.5 text-left sm:py-3"
              >
                <span className="mt-0.5 shrink-0 font-mono text-[10px] text-warn sm:text-xs">{entry.t}</span>
                <span className="text-xs text-bone/90 sm:text-sm">{entry.text}</span>
              </motion.li>
            ))}
          </ul>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={active ? { opacity: 1 } : {}}
          transition={{ delay: 0.4 + log.length * 0.35 + 0.3 }}
          className="flex w-full max-w-sm flex-col gap-1.5"
        >
          <div className="mb-1 flex items-center gap-1.5 font-mono text-[10px] tracking-widest text-alert sm:text-xs">
            <AlertTriangle size={12} />
            NIVEL DE PÁNICO INSTITUCIONAL
          </div>
          <ThreatMeter label="Comité de Crisis" value={74} color="alert" delay={0.4 + log.length * 0.35 + 0.5} />
        </motion.div>
      </div>
    </Slide>
  )
}
