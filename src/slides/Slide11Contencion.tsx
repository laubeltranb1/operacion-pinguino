import { motion } from 'framer-motion'
import { Fish, Users, Megaphone, ClipboardList } from 'lucide-react'
import Slide from '../components/Slide'
import ThreatMeter from '../components/ThreatMeter'
import type { SlideComponentProps } from '../types'

const measures = [
  {
    icon: Users,
    title: 'Cierre fronterizo selectivo',
    text: 'Prohibida la entrada a "todo animal con más de un pico". Definición legal aún en revisión.',
  },
  {
    icon: Fish,
    title: 'Arenques señuelo',
    text: 'Distribuidos en pasos fronterizos para desviar su atención. Resultado: más pingüinos.',
  },
  {
    icon: ClipboardList,
    title: 'Comité de expertos en aves',
    text: 'Formado, reunido y disuelto en 40 minutos. Presupuesto ya agotado en café.',
  },
  {
    icon: Megaphone,
    title: 'Campaña "No alimenten al pingüino"',
    text: 'Ignorada por el 100% de la población. Ha ganado un premio de publicidad.',
  },
]

export default function Slide11Contencion({ active }: SlideComponentProps) {
  return (
    <Slide dossier="11" code="MEDIDAS DE CONTENCIÓN // SEC-11" threat="INEFICAZ" threatColor="alert">
      <div className="flex w-full max-w-4xl flex-col items-center gap-8">
        <motion.h2
          initial={{ opacity: 0, y: -12 }}
          animate={active ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center font-display text-3xl font-semibold uppercase tracking-tight text-bone sm:text-5xl"
        >
          Medidas de <span className="text-alert">contención</span>
        </motion.h2>

        <div className="grid w-full grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4">
          {measures.map((m, i) => (
            <motion.div
              key={m.title}
              initial={{ opacity: 0, y: 14 }}
              animate={active ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 + i * 0.15 }}
              className="flex flex-col gap-2 border border-bone/10 bg-void-900/40 px-4 py-3 text-left"
            >
              <div className="flex items-center gap-2 font-mono text-[10px] tracking-widest text-tactical-cyan sm:text-xs">
                <m.icon size={14} />
                {m.title.toUpperCase()}
              </div>
              <p className="text-xs text-bone/85 sm:text-sm">{m.text}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={active ? { opacity: 1 } : {}}
          transition={{ delay: 1.2 }}
          className="w-full max-w-md"
        >
          <ThreatMeter label="Efectividad global de las medidas" value={3} color="alert" delay={1.4} />
        </motion.div>
      </div>
    </Slide>
  )
}
