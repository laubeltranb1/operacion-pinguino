import { motion } from 'framer-motion'
import { Fingerprint, Snowflake, Waves, ShieldCheck, Sparkles, Sun, Ban, ThumbsDown } from 'lucide-react'
import ThreatMeter from './ThreatMeter'

interface Stat {
  label: string
  value: string
}

interface PenguinIntelCardProps {
  active: boolean
}

const stats: Stat[] = [
  { label: 'ALTURA', value: '1,2 m' },
  { label: 'PESO', value: '≈ 30 kg' },
  { label: 'ARMAMENTO', value: '1 (uno) pico' },
  { label: 'EXPERIENCIA MILITAR', value: '0 años' },
]

const strengths = [
  { icon: Snowflake, text: 'Resistencia al frío extremo' },
  { icon: Waves, text: 'Natación de nivel élite' },
  { icon: ShieldCheck, text: 'Disciplina de formación' },
  { icon: Sparkles, text: 'Aspecto peligrosamente adorable' },
]

const weaknesses = [
  { icon: Sun, text: 'Calor (cualquier cosa por encima de 10 °C)' },
  { icon: Ban, text: 'Escaleras' },
  { icon: ThumbsDown, text: 'Falta absoluta de pulgares' },
  { icon: Fingerprint, text: 'Desconocimiento total del espacio Schengen' },
]

/** Intelligence-briefing card for Slide 03 — the invader's profile. */
export default function PenguinIntelCard({ active }: PenguinIntelCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={active ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
      className="clip-corner w-full max-w-4xl border border-bone/15 bg-void-900/60 backdrop-blur-sm"
    >
      <div className="flex items-center justify-between border-b border-bone/10 bg-void-800/60 px-4 py-2 sm:px-6 sm:py-3">
        <span className="font-mono text-[10px] tracking-widest text-tactical-cyan sm:text-xs">
          FICHA DE INTELIGENCIA — SUJETO: "PINGÜINO"
        </span>
        <span className="font-mono text-[10px] tracking-widest text-alert sm:text-xs">EXP. 002/13</span>
      </div>

      <div className="grid grid-cols-1 gap-6 p-4 sm:grid-cols-2 sm:gap-8 sm:p-6">
        {/* left: basic stats */}
        <div className="flex flex-col gap-3">
          <div className="grid grid-cols-2 gap-3">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0 }}
                animate={active ? { opacity: 1 } : {}}
                transition={{ delay: 0.15 + i * 0.08 }}
                className="border border-bone/10 bg-void-950/40 px-2.5 py-2"
              >
                <div className="font-mono text-[8px] tracking-widest text-bone-dim sm:text-[9px]">{s.label}</div>
                <div className="font-display text-sm text-bone sm:text-base">{s.value}</div>
              </motion.div>
            ))}
          </div>

          <div className="mt-1 flex flex-col gap-3">
            <ThreatMeter label="Natación" value={98} color="cyan" delay={0.5} segments={16} />
            <ThreatMeter label="Carisma" value={91} color="warn" delay={0.6} segments={16} />
          </div>
        </div>

        {/* right: strengths / weaknesses */}
        <div className="flex flex-col gap-4">
          <div>
            <div className="mb-1.5 font-mono text-[9px] tracking-widest text-tactical sm:text-[10px]">
              FORTALEZAS
            </div>
            <ul className="flex flex-col gap-1.5">
              {strengths.map((s, i) => (
                <motion.li
                  key={s.text}
                  initial={{ opacity: 0, x: -8 }}
                  animate={active ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.75 + i * 0.08 }}
                  className="flex items-center gap-2 text-xs text-bone/90 sm:text-sm"
                >
                  <s.icon size={13} className="shrink-0 text-tactical" />
                  {s.text}
                </motion.li>
              ))}
            </ul>
          </div>

          <div>
            <div className="mb-1.5 font-mono text-[9px] tracking-widest text-alert sm:text-[10px]">
              DEBILIDADES
            </div>
            <ul className="flex flex-col gap-1.5">
              {weaknesses.map((w, i) => (
                <motion.li
                  key={w.text}
                  initial={{ opacity: 0, x: -8 }}
                  animate={active ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 1.05 + i * 0.08 }}
                  className="flex items-center gap-2 text-xs text-bone/90 sm:text-sm"
                >
                  <w.icon size={13} className="shrink-0 text-alert" />
                  {w.text}
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={active ? { opacity: 1 } : {}}
        transition={{ delay: 1.5 }}
        className="border-t border-bone/10 bg-void-950/50 px-4 py-2.5 sm:px-6 sm:py-3"
      >
        <p className="font-display text-xs italic text-bone-dim sm:text-sm">
          Conclusión del analista: "Europa lo subestimará hasta que sea demasiado tarde."
        </p>
      </motion.div>
    </motion.div>
  )
}
