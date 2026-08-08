interface RadarSweepProps {
  size?: number
  className?: string
}

/** Decorative rotating radar sweep, purely for atmosphere. */
export default function RadarSweep({ size = 120, className = '' }: RadarSweepProps) {
  return (
    <div
      className={`relative rounded-full border border-tactical-cyan/25 ${className}`}
      style={{ width: size, height: size }}
    >
      <div className="absolute inset-[15%] rounded-full border border-tactical-cyan/15" />
      <div className="absolute inset-[35%] rounded-full border border-tactical-cyan/15" />
      <div className="absolute inset-0 rounded-full border border-tactical-cyan/10" />
      <div className="absolute left-1/2 top-1/2 h-px w-1/2 origin-left bg-gradient-to-r from-tactical-cyan/0 via-tactical-cyan/60 to-tactical-cyan/0 animate-radar" />
      <div
        className="absolute inset-0 rounded-full animate-radar"
        style={{
          background:
            'conic-gradient(from 0deg, rgba(62,230,255,0.28), rgba(62,230,255,0) 30%)',
        }}
      />
      <div className="absolute left-1/2 top-1/2 h-1 w-1 -translate-x-1/2 -translate-y-1/2 rounded-full bg-tactical-cyan shadow-[0_0_8px_2px_rgba(62,230,255,0.7)]" />
    </div>
  )
}
