import { motion } from 'framer-motion'

export interface MapNode {
  id: string
  label: string
  sub?: string
  x: number
  y: number
}

export const ROUTE_NODES: MapNode[] = [
  { id: 'origen', label: 'ORIGEN', sub: 'ANTÁRTIDA', x: 60, y: 330 },
  { id: 'espana', label: 'ESPAÑA', sub: 'CABEZA DE PLAYA', x: 120, y: 210 },
  { id: 'francia', label: 'FRANCIA', sub: 'FRENTE CENTRAL', x: 210, y: 145 },
  { id: 'alemania', label: 'ALEMANIA', sub: 'LÍNEA DE CONTENCIÓN', x: 290, y: 95 },
  { id: 'suiza', label: 'SUIZA', sub: 'ÚLTIMO BÚNKER', x: 300, y: 165 },
]

interface EuropeMapProps {
  /** How many nodes past "origen" have been reached: 0 = nada, 1 = España, 2 = +Francia, 3 = +Alemania, 4 = +Suiza */
  progress: 0 | 1 | 2 | 3 | 4
  active: boolean
  className?: string
}

/**
 * Stylized tactical operations map (not to cartographic scale — this is a war room prop,
 * not GIS software) tracing the invasion route from Antarctica up through Spain, France
 * and Germany, with an animated dashed route line and a pulsing "current position" marker.
 */
export default function EuropeMap({ progress, active, className = '' }: EuropeMapProps) {
  const points = ROUTE_NODES.map((n) => `${n.x},${n.y}`).join(' ')
  const currentNode = ROUTE_NODES[progress]

  return (
    <div className={`relative aspect-[4/3] w-full max-w-2xl ${className}`}>
      <svg viewBox="0 0 340 360" className="h-full w-full overflow-visible">
        <defs>
          <pattern id="mapGrid" width="20" height="20" patternUnits="userSpaceOnUse">
            <path d="M20 0H0V20" fill="none" stroke="rgba(62,230,255,0.08)" strokeWidth="1" />
          </pattern>
          <radialGradient id="landGlow" cx="50%" cy="50%" r="60%">
            <stop offset="0%" stopColor="rgba(43,255,176,0.10)" />
            <stop offset="100%" stopColor="rgba(43,255,176,0)" />
          </radialGradient>
        </defs>

        <rect x="0" y="0" width="340" height="360" fill="url(#mapGrid)" />

        {/* abstract landmasses */}
        <motion.path
          d="M20 250 Q10 300 45 340 Q90 365 140 340 Q170 320 150 280 Q170 250 140 220 Q100 195 70 210 Q30 210 20 250 Z"
          fill="url(#landGlow)"
          stroke="rgba(233,230,220,0.15)"
          strokeWidth="1"
          initial={{ opacity: 0 }}
          animate={active ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
        />
        <motion.path
          d="M150 180 Q140 220 175 240 Q220 255 250 220 Q270 190 240 160 Q210 130 175 145 Q155 155 150 180 Z"
          fill="url(#landGlow)"
          stroke="rgba(233,230,220,0.15)"
          strokeWidth="1"
          initial={{ opacity: 0 }}
          animate={active ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.15 }}
        />
        <motion.path
          d="M245 90 Q230 120 260 145 Q300 165 320 130 Q330 100 305 75 Q280 55 255 65 Q245 75 245 90 Z"
          fill="url(#landGlow)"
          stroke="rgba(233,230,220,0.15)"
          strokeWidth="1"
          initial={{ opacity: 0 }}
          animate={active ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
        />

        {/* route line */}
        <motion.polyline
          points={points}
          fill="none"
          stroke="#3ee6ff"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={active ? { pathLength: 1, opacity: 0.8 } : {}}
          transition={{ duration: 1.6, ease: 'easeInOut', delay: 0.4 }}
        />

        {/* nodes */}
        {ROUTE_NODES.map((n, i) => {
          const reached = i <= progress
          return (
            <g key={n.id}>
              <motion.circle
                cx={n.x}
                cy={n.y}
                r={i === 0 ? 4 : 5.5}
                fill={reached ? (i === progress ? '#ffcc00' : '#2bffb0') : '#0a1120'}
                stroke={reached ? 'transparent' : 'rgba(233,230,220,0.3)'}
                strokeWidth="1"
                initial={{ scale: 0 }}
                animate={active ? { scale: 1 } : {}}
                transition={{ delay: 0.5 + i * 0.15, type: 'spring', stiffness: 260, damping: 16 }}
              />
              {i === progress && (
                <motion.circle
                  cx={n.x}
                  cy={n.y}
                  r={5.5}
                  fill="none"
                  stroke="#ffcc00"
                  strokeWidth="1.5"
                  initial={{ scale: 1, opacity: 0.8 }}
                  animate={{ scale: [1, 2.4], opacity: [0.7, 0] }}
                  transition={{ duration: 1.6, repeat: Infinity, ease: 'easeOut' }}
                />
              )}
              <motion.text
                x={n.x}
                y={n.y - 12}
                textAnchor="middle"
                className="select-none"
                fill={reached ? '#e9e6dc' : 'rgba(233,230,220,0.35)'}
                fontSize="8"
                fontFamily="'JetBrains Mono', monospace"
                letterSpacing="0.05em"
                initial={{ opacity: 0 }}
                animate={active ? { opacity: 1 } : {}}
                transition={{ delay: 0.7 + i * 0.15 }}
              >
                {n.label}
              </motion.text>
              {n.sub && (
                <motion.text
                  x={n.x}
                  y={n.y - 4}
                  textAnchor="middle"
                  fill="rgba(233,230,220,0.35)"
                  fontSize="5.5"
                  fontFamily="'JetBrains Mono', monospace"
                  initial={{ opacity: 0 }}
                  animate={active ? { opacity: 1 } : {}}
                  transition={{ delay: 0.8 + i * 0.15 }}
                >
                  {n.sub}
                </motion.text>
              )}
            </g>
          )
        })}
      </svg>

      <div className="pointer-events-none absolute right-1 top-1 flex flex-col items-end font-mono text-[8px] tracking-widest text-bone-dim sm:text-[9px]">
        <span>POSICIÓN ACTUAL</span>
        <span className="text-warn">{currentNode.label}</span>
      </div>
    </div>
  )
}
