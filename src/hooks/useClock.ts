import { useEffect, useState } from 'react'

/** Returns a live-updating UTC "Zulu" timestamp string, refreshed every second. */
export default function useClock() {
  const [now, setNow] = useState(() => new Date())

  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000)
    return () => clearInterval(id)
  }, [])

  const hh = String(now.getUTCHours()).padStart(2, '0')
  const mm = String(now.getUTCMinutes()).padStart(2, '0')
  const ss = String(now.getUTCSeconds()).padStart(2, '0')
  const yyyy = now.getUTCFullYear()
  const MM = String(now.getUTCMonth() + 1).padStart(2, '0')
  const dd = String(now.getUTCDate()).padStart(2, '0')

  return {
    time: `${hh}:${mm}:${ss}Z`,
    date: `${yyyy}-${MM}-${dd}`,
    raw: now,
  }
}
