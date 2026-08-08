import { motion } from 'framer-motion'

interface ArmedPenguinMarchProps {
  className?: string
  /** Seconds for one full crossing of the screen. */
  duration?: number
  /** Delay before the march starts, for staggering multiple instances. */
  delay?: number
}

/**
 * Decorative marching mascot: a small, frontal, easy-to-read armed penguin that
 * waddles across the bottom of the frame on a loop. Purely cosmetic.
 */
export default function ArmedPenguinMarch({ className = '', duration = 18, delay = 0 }: ArmedPenguinMarchProps) {
  return (
    <motion.div
      className={`pointer-events-none absolute bottom-9 left-0 z-[5] h-7 w-7 opacity-80 sm:bottom-12 sm:h-9 sm:w-9 ${className}`}
      initial={{ x: '-8vw' }}
      animate={{ x: ['-8vw', '110vw'] }}
      transition={{ duration, delay, repeat: Infinity, repeatType: 'loop', ease: 'linear' }}
    >
      <motion.svg
        viewBox="0 0 80 100"
        className="h-full w-full"
        fill="none"
        style={{ transformBox: 'fill-box', transformOrigin: '50% 100%' }}
        animate={{ rotate: [-7, 7, -7] }}
        transition={{ duration: 0.7, repeat: Infinity, ease: 'easeInOut' }}
      >
        {/* body */}
        <path
          d="M40 8C24 8 15 24 14 40C13 56 12 72 15 84C17 90 26 94 40 94C54 94 63 90 65 84C68 72 67 56 66 40C65 24 56 8 40 8Z"
          fill="#e9e6dc"
        />
        {/* head cap */}
        <path d="M40 8C29 8 20 16 16 28C24 21 33 18 40 18C47 18 56 21 64 28C60 16 51 8 40 8Z" fill="#0a1120" />
        {/* eyes */}
        <circle cx="33" cy="22" r="2.2" fill="#ff3b30" />
        <circle cx="47" cy="22" r="2.2" fill="#ff3b30" />
        {/* beak */}
        <path d="M35 27L40 34L45 27Z" fill="#ffcc00" />
        {/* chest */}
        <path d="M40 30C31 30 26 40 25 54C24 68 26 80 32 86C40 88 40 88 48 86C54 80 56 68 55 54C54 40 49 30 40 30Z" fill="#0a1120" opacity="0.85" />
        {/* rifle, slung diagonally across the chest */}
        <rect x="30" y="48" width="42" height="4.5" rx="1.5" fill="#a9a89e" transform="rotate(-22 30 48)" />
        <rect x="26" y="53" width="8" height="6" rx="1" fill="#0a1120" transform="rotate(-22 30 48)" />
        {/* rear flipper */}
        <path d="M14 40C6 46 3 58 6 68C7 71 11 71 12 68C10 58 12 48 18 42Z" fill="#0a1120" />
        {/* front flipper, gripping the rifle */}
        <path d="M46 52C50 46 56 43 62 44C64 44.5 64 47.5 62 48C57 47.5 53 49.5 50 54Z" fill="#e9e6dc" />
        {/* feet */}
        <path d="M26 90L20 98L36 94L38 90Z" fill="#ffcc00" />
        <path d="M54 90L60 98L44 94L42 90Z" fill="#ffcc00" />
      </motion.svg>
    </motion.div>
  )
}
