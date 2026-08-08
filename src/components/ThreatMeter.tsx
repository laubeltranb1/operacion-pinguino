import { motion } from 'framer-motion'
import AnimatedCounter from './ui/AnimatedCounter'

interface ThreatMeterProps {
  label: string
  value: number
  suffix?: string
  color?: 'alert' | 'warn' | 'tactical' | 'cyan'
  delay?: number
  segments?: number
}

const colorMap = {
  alert: { bar: 'bg-alert', text: 'text-alert', glow: 'shadow-[0_0_10px_rgba(255,59,48,0.6)]' },
  warn: { bar: 'bg-warn', text: 'text-warn', glow: 'shadow-[0_0_10px_rgba(255,204,0,0.6)]' },
  tactical: { bar: 'bg-tactical', text: 'text-tactical', glow: 'shadow-[0_0_10px_rgba(43,255,176,0.6)]' },
  cyan: { bar: 'bg-tactical-cyan', text: 'text-tactical-cyan', glow: 'shadow-[0_0_10px_rgba(62,230,255,0.6)]' },
}

/** A segmented tactical gauge: label, animated count-up, and a filling bar of ticks. */
export default function ThreatMeter({
  label,
  value,
  suffix = '%',
  color = 'cyan',
  delay = 0,
  segments = 20,
}: ThreatMeterProps) {
  const c = colorMap[color]
  const filled = Math.round((value / 100) * segments)

  return (
    <div className="w-full">
      <div className="mb-1 flex items-baseline justify-between font-mono text-[10px] tracking-widest text-bone-dim sm:text-xs">
        <span>{label.toUpperCase()}</span>
        <span className={`font-semibold ${c.text}`}>
          <AnimatedCounter value={value} suffix={suffix} delay={delay} decimals={0} />
        </span>
      </div>
      <div className="flex gap-[2px]">
        {Array.from({ length: segments }).map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0.08, scaleY: 0.3 }}
            animate={
              i < filled
                ? { opacity: 1, scaleY: 1 }
                : { opacity: 0.08, scaleY: 0.3 }
            }
            transition={{ delay: delay + i * 0.02, duration: 0.25 }}
            className={`h-2.5 flex-1 origin-bottom sm:h-3 ${i < filled ? `${c.bar} ${c.glow}` : 'bg-bone/10'}`}
          />
        ))}
      </div>
    </div>
  )
}
