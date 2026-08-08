import { motion, AnimatePresence } from 'framer-motion'
import { Ship, Fingerprint, Landmark, MapPinOff, Lock, Unlock } from 'lucide-react'
import Slide from '../components/Slide'
import AnimatedCounter from '../components/ui/AnimatedCounter'
import type { SlideComponentProps } from '../types'

const problems = [
  { icon: Ship, text: 'Cruzar el Atlántico sin embarcación propia (plan actual: polizón en crucero noruego).' },
  { icon: Fingerprint, text: 'Ausencia total de pulgares para abrir maletas, puertas o tratados internacionales.' },
  { icon: Landmark, text: 'Cero cuentas bancarias, cero criptomonedas, cero patrocinadores.' },
  { icon: MapPinOff, text: 'Desconocimiento absoluto de la existencia del espacio Schengen.' },
]

export default function Slide04Logistica({ active, revealed }: SlideComponentProps) {
  return (
    <Slide dossier="04" code="ANÁLISIS LOGÍSTICO // SEC-04" threat="MODERADO" threatColor="warn">
      <div className="flex w-full max-w-3xl flex-col items-center gap-8">
        <motion.h2
          initial={{ opacity: 0, y: -12 }}
          animate={active ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center font-display text-3xl font-semibold uppercase tracking-tight text-bone sm:text-5xl"
        >
          Problema <span className="text-warn">logístico</span>
        </motion.h2>

        <ul className="flex w-full flex-col gap-3">
          {problems.map((p, i) => (
            <motion.li
              key={p.text}
              initial={{ opacity: 0, x: -12 }}
              animate={active ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.3 + i * 0.15 }}
              className="flex items-start gap-3 border border-bone/10 bg-void-900/40 px-4 py-3"
            >
              <p.icon size={16} className="mt-0.5 shrink-0 text-tactical-cyan" />
              <span className="text-xs text-bone/90 sm:text-sm">{p.text}</span>
            </motion.li>
          ))}
        </ul>

        <motion.div
          initial={{ opacity: 0 }}
          animate={active ? { opacity: 1 } : {}}
          transition={{ delay: 1.1 }}
          className="w-full max-w-sm border border-alert/30 bg-void-950/60 px-5 py-4 text-center"
        >
          <div className="mb-2 flex items-center justify-center gap-1.5 font-mono text-[10px] tracking-widest text-alert sm:text-xs">
            {revealed ? <Unlock size={12} /> : <Lock size={12} />}
            PRESUPUESTO OPERATIVO ASIGNADO
          </div>

          <AnimatePresence mode="wait">
            {!revealed ? (
              <motion.div
                key="locked"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="font-mono text-[10px] tracking-widest text-bone-dim sm:text-xs"
              >
                [ TOQUE, HAGA CLIC O PULSE ESPACIO PARA DESCLASIFICAR ]
              </motion.div>
            ) : (
              <motion.div
                key="unlocked"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ type: 'spring', stiffness: 220, damping: 16 }}
              >
                <div className="font-display text-4xl font-semibold text-warn sm:text-5xl">
                  <AnimatedCounter value={14.7} prefix="€" decimals={2} duration={1} />
                </div>
                <p className="mt-1 font-mono text-[10px] italic text-bone-dim sm:text-xs">
                  (€14 en arenques. €0.70 sin justificar.)
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </Slide>
  )
}
