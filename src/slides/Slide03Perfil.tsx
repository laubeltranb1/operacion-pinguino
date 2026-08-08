import { motion } from 'framer-motion'
import Slide from '../components/Slide'
import PenguinIntelCard from '../components/PenguinIntelCard'
import type { SlideComponentProps } from '../types'

export default function Slide03Perfil({ active }: SlideComponentProps) {
  return (
    <Slide dossier="03" code="FICHA DE INTELIGENCIA // SEC-03" threat="ALTO" threatColor="alert">
      <div className="flex w-full flex-col items-center gap-5 sm:gap-6">
        <motion.h2
          initial={{ opacity: 0, y: -12 }}
          animate={active ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center font-display text-3xl font-semibold uppercase tracking-tight text-bone sm:text-5xl"
        >
          Perfil del <span className="text-alert">invasor</span>
        </motion.h2>
        <PenguinIntelCard active={active} />
      </div>
    </Slide>
  )
}
