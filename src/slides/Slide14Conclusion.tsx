import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Slide from '../components/Slide'
import ClassifiedStamp from '../components/ui/ClassifiedStamp'
import type { SlideComponentProps } from '../types'

export default function Slide14Conclusion({ active, revealed }: SlideComponentProps) {
  const [stage2, setStage2] = useState(false)
  const [stage3, setStage3] = useState(false)

  useEffect(() => {
    if (!revealed) {
      setStage2(false)
      setStage3(false)
      return
    }
    const t1 = setTimeout(() => setStage2(true), 900)
    const t2 = setTimeout(() => setStage3(true), 3200)
    return () => {
      clearTimeout(t1)
      clearTimeout(t2)
    }
  }, [revealed])

  return (
    <Slide dossier="14" code="CONCLUSIÓN FINAL // SEC-14" threat="SIN DETERMINAR" threatColor="alert">
      <div className="flex w-full max-w-3xl flex-col items-center gap-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: -12 }}
          animate={active ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="font-display text-2xl font-semibold uppercase tracking-tight text-bone sm:text-4xl"
        >
          Conclusión del <span className="text-tactical-cyan">comité</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={active ? { opacity: 1 } : {}}
          transition={{ delay: 0.4 }}
          className="font-mono text-xs tracking-widest text-bone-dim sm:text-sm"
        >
          ¿QUÉ TAN LEJOS PODRÍA LLEGAR?
        </motion.p>

        <motion.h3
          initial={{ opacity: 0, scale: 0.85 }}
          animate={active ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 0.7, type: 'spring', stiffness: 200, damping: 15 }}
          className="font-display text-5xl font-bold uppercase leading-none text-warn sm:text-7xl"
        >
          Hasta Suiza
        </motion.h3>

        <motion.p
          initial={{ opacity: 0 }}
          animate={active ? { opacity: 1 } : {}}
          transition={{ delay: 1.1 }}
          className="font-display text-base italic text-bone-dim sm:text-xl"
        >
          …si va solo.
        </motion.p>

        <AnimatePresence>
          {!revealed && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: [0.4, 1, 0.4] }}
              exit={{ opacity: 0 }}
              transition={{ delay: 1.6, duration: 2, repeat: Infinity }}
              className="font-mono text-[10px] tracking-widest text-tactical-cyan/70 sm:text-xs"
            >
              ▸ TOQUE, HAGA CLIC O PULSE ESPACIO
            </motion.p>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {revealed && (
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mt-2 flex flex-col items-center gap-2 border-t border-alert/30 pt-6"
            >
              <span className="font-mono text-xs tracking-widest text-alert sm:text-sm">SI VIENEN TODOS:</span>
              <h4 className="font-display text-2xl font-bold uppercase leading-tight text-alert sm:text-4xl">
                Nosotros somos los que
                <br />
                tenemos que emigrar.
              </h4>
            </motion.div>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {stage2 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="mt-4 flex flex-wrap items-center justify-center gap-2 font-mono text-[10px] tracking-widest text-bone-dim sm:text-xs"
            >
              <span className="border border-bone/20 px-2 py-1">PREGUNTAS</span>
              <span className="border border-bone/20 px-2 py-1">OBJECIONES</span>
              <span className="border border-bone/20 px-2 py-1">PLANES DE EVACUACIÓN</span>
            </motion.div>
          )}
        </AnimatePresence>

        <AnimatePresence mode="wait">
          {stage3 && (
            <motion.div
              key="ending"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="mt-4 flex flex-col items-center gap-2"
            >
              <ClassifiedStamp text="FIN DE LA INVASIÓN" />
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 1, 1, 0.3, 1] }}
                transition={{ delay: 1, duration: 1.6 }}
                className="font-display text-lg font-semibold uppercase tracking-widest text-alert sm:text-2xl"
              >
                Pero…
              </motion.span>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </Slide>
  )
}
