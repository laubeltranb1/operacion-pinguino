import type { ComponentType } from 'react'

/** Props passed by <Presentation /> to every individual slide component. */
export interface SlideComponentProps {
  /** True once this slide is the active one on screen — used to (re)trigger reveal animations. */
  active: boolean
  /** True once the user has pressed Space / clicked / hit → a second time on a slide with a hidden punchline. */
  revealed: boolean
  /** 1-indexed position of this slide within the deck. */
  index: number
  /** Total number of slides in the deck. */
  total: number
}

/** Metadata describing one slide in the deck, consumed by <Presentation />. */
export interface SlideMeta {
  /** Internal id, also used as the dossier reference code shown in the UI. */
  id: string
  /** Short label shown in the progress rail / accessible title. */
  label: string
  /** Dossier folio number, e.g. "01". */
  dossier: string
  /** If true, the first advance-input on this slide reveals a punchline instead of navigating away. */
  hasReveal?: boolean
  Component: ComponentType<SlideComponentProps>
}
