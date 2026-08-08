interface PenguinSilhouetteProps {
  className?: string
}

/**
 * Hand-drawn tactical penguin silhouette. No stock photos, no cute cartoon eyes —
 * this is meant to look like it belongs on a military recognition card.
 */
export default function PenguinSilhouette({ className = '' }: PenguinSilhouetteProps) {
  return (
    <svg viewBox="0 0 240 320" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <filter id="penguinGlow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="6" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <linearGradient id="chestGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#3ee6ff" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#3ee6ff" stopOpacity="0.15" />
        </linearGradient>
      </defs>

      {/* body */}
      <path
        d="M120 20C78 20 58 62 55 105C52 150 45 185 40 220C35 255 55 300 120 300C185 300 205 255 200 220C195 185 188 150 185 105C182 62 162 20 120 20Z"
        fill="#e9e6dc"
        filter="url(#penguinGlow)"
      />

      {/* head cap */}
      <path
        d="M120 20C90 20 70 45 62 78C85 62 108 55 120 55C132 55 155 62 178 78C170 45 150 20 120 20Z"
        fill="#0a1120"
      />

      {/* chest patch */}
      <path
        d="M120 70C98 70 82 92 80 122C78 165 80 210 90 245C98 272 108 285 120 285C132 285 142 272 150 245C160 210 162 165 160 122C158 92 142 70 120 70Z"
        fill="url(#chestGrad)"
      />

      {/* eye */}
      <circle cx="120" cy="70" r="3.2" fill="#ff3b30" />

      {/* beak */}
      <path d="M113 78L120 92L127 78Z" fill="#ffcc00" />

      {/* flippers */}
      <path
        d="M55 110C40 130 30 165 34 205C36 220 44 228 50 220C46 185 50 145 62 115Z"
        fill="#0a1120"
      />
      <path
        d="M185 110C200 130 210 165 206 205C204 220 196 228 190 220C194 185 190 145 178 115Z"
        fill="#0a1120"
      />

      {/* feet */}
      <path d="M85 296L75 312L100 305L108 296Z" fill="#ffcc00" />
      <path d="M155 296L165 312L140 305L132 296Z" fill="#ffcc00" />
    </svg>
  )
}
