/** Four tactical corner brackets, framing the viewport like a targeting HUD. */
export default function CornerBrackets() {
  const common = 'absolute w-6 h-6 sm:w-9 sm:h-9 border-tactical-cyan/40'
  return (
    <>
      <div className={`${common} top-3 left-3 sm:top-5 sm:left-5 border-t-2 border-l-2`} />
      <div className={`${common} top-3 right-3 sm:top-5 sm:right-5 border-t-2 border-r-2`} />
      <div className={`${common} bottom-3 left-3 sm:bottom-5 sm:left-5 border-b-2 border-l-2`} />
      <div className={`${common} bottom-3 right-3 sm:bottom-5 sm:right-5 border-b-2 border-r-2`} />
    </>
  )
}
