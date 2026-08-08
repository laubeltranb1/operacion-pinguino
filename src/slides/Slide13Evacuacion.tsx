import { motion } from 'framer-motion'
import { LogOut, Fish, Eye, Flag } from 'lucide-react'
import Slide from '../components/Slide'
import type { SlideComponentProps } from '../types'

const steps = [
  { icon: Eye, title: 'Evitar contacto visual prolongado', text: 'Se ha demostrado que aumenta el nivel de carisma percibido en un 40%.' },
  { icon: Fish, title: 'Ofrecer arenque, retroceder despacio', text: 'No corra. Corre mejor que usted en distancias cortas, medias y largas.' },
  { icon: LogOut, title: 'Localizar la salida de emergencia más cercana', text: 'Preferiblemente lejos de cualquier pescadería, restaurante o embajada.' },
  { icon: Flag, title: 'Plan Omega', text: 'Si todo lo anterior falla: aceptar el nuevo orden establecido con dignidad.' },
]

export default function Slide13Evacuacion({ active }: SlideComponentProps) {
  return (
    <Slide dossier="13" code="PROTOCOLO DE EVACUACIÓN // SEC-13" threat="INMINENTE" threatColor="alert">
      <div className="flex w-full max-w-3xl flex-col items-center gap-8">
        <motion.h2
          initial={{ opacity: 0, y: -12 }}
          animate={active ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center font-display text-3xl font-semibold uppercase tracking-tight text-bone sm:text-5xl"
        >
          Planes de <span className="text-alert">evacuación</span>
        </motion.h2>

        <ol className="flex w-full flex-col gap-3">
          {steps.map((s, i) => (
            <motion.li
              key={s.title}
              initial={{ opacity: 0, x: -12 }}
              animate={active ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.3 + i * 0.2 }}
              className="flex items-start gap-3 border border-bone/10 bg-void-900/40 px-4 py-3"
            >
              <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center border border-alert/50 font-mono text-[10px] text-alert">
                {i + 1}
              </span>
              <div className="text-left">
                <div className="flex items-center gap-1.5 font-display text-sm text-bone sm:text-base">
                  <s.icon size={13} className="text-tactical-cyan" />
                  {s.title}
                </div>
                <p className="mt-0.5 text-xs text-bone-dim sm:text-sm">{s.text}</p>
              </div>
            </motion.li>
          ))}
        </ol>
      </div>
    </Slide>
  )
}
