import { motion, AnimatePresence } from 'framer-motion'
import { Megaphone, AlertOctagon } from 'lucide-react'
import Slide from '../components/Slide'
import type { SlideComponentProps } from '../types'

const chat = [
  { who: 'GENERAL (4★)', text: '¿Alguien puede confirmar si esto es un simulacro?' },
  { who: 'CORONEL', text: 'Negativo, señor. Es un pingüino.' },
  { who: 'GENERAL (4★)', text: 'REPITO: ¿ES UN SIMULACRO?' },
  { who: 'CORONEL', text: 'Sigue sin ser un simulacro, señor. Sigue siendo un pingüino.' },
  { who: 'ANALISTA JR.', text: 'Ha llegado a Suiza. Va bastante arreglado.' },
  { who: 'GENERAL (4★)', text: 'Convoquen al comité. Y a alguien que sepa de pingüinos.' },
]

export default function Slide10OTAN({ active, revealed }: SlideComponentProps) {
  return (
    <Slide dossier="10" code="RESPUESTA INTERNACIONAL // SEC-10" threat="CONFUSIÓN" threatColor="warn">
      <div className="flex w-full max-w-2xl flex-col items-center gap-6">
        <motion.h2
          initial={{ opacity: 0, y: -12 }}
          animate={active ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center font-display text-3xl font-semibold uppercase tracking-tight text-bone sm:text-5xl"
        >
          Respuesta de la <span className="text-warn">OTAN</span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={active ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3 }}
          className="w-full border border-bone/10 bg-void-900/50 px-5 py-4"
        >
          <div className="mb-2 flex items-center gap-1.5 font-mono text-[10px] tracking-widest text-tactical-cyan sm:text-xs">
            <Megaphone size={12} />
            COMUNICADO OFICIAL
          </div>
          <p className="text-xs italic text-bone/90 sm:text-sm">
            "La Alianza da seguimiento al incidente con preocupación calibrada. No existe, de momento, evidencia de
            una amenaza militar convencional."
          </p>
        </motion.div>

        <AnimatePresence mode="wait">
          {!revealed ? (
            <motion.p
              key="hint"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ delay: 0.8 }}
              className="font-mono text-[10px] tracking-widest text-bone-dim sm:text-xs"
            >
              ▸ TOQUE, HAGA CLIC O PULSE ESPACIO PARA VER LA CONVERSACIÓN FILTRADA
            </motion.p>
          ) : (
            <motion.div
              key="chatlog"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="w-full border border-alert/30 bg-void-950/60"
            >
              <div className="flex items-center gap-1.5 border-b border-alert/20 bg-alert/5 px-4 py-2 font-mono text-[10px] tracking-widest text-alert sm:text-xs">
                <AlertOctagon size={12} />
                CANAL INTERNO — FILTRADO SIN AUTORIZACIÓN
              </div>
              <ul className="flex flex-col divide-y divide-bone/5">
                {chat.map((c, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.18 }}
                    className="flex flex-col gap-0.5 px-4 py-2 text-left sm:py-2.5"
                  >
                    <span className="font-mono text-[9px] tracking-widest text-tactical-cyan sm:text-[10px]">
                      {c.who}
                    </span>
                    <span className="text-xs text-bone/90 sm:text-sm">{c.text}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </Slide>
  )
}
