interface ClassifiedStampProps {
  text?: string
  className?: string
}

/** A crooked rubber-stamp label, because every good dossier has one. */
export default function ClassifiedStamp({ text = 'CLASSIFIED', className = '' }: ClassifiedStampProps) {
  return (
    <div
      className={`select-none border-[3px] border-alert/80 text-alert px-3 py-1 font-display font-semibold tracking-widest-plus text-[10px] sm:text-xs -rotate-6 opacity-90 ${className}`}
      style={{ boxShadow: '0 0 0 1px rgba(255,59,48,0.15) inset' }}
    >
      {text}
    </div>
  )
}
