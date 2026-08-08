import type { SlideMeta } from '../types'
import Slide01Portada from './Slide01Portada'
import Slide02Crisis from './Slide02Crisis'
import Slide03Perfil from './Slide03Perfil'
import Slide04Logistica from './Slide04Logistica'
import Slide05Mapa from './Slide05Mapa'
import Slide06Espana from './Slide06Espana'
import Slide07Francia from './Slide07Francia'
import Slide08Alemania from './Slide08Alemania'
import Slide09Suiza from './Slide09Suiza'
import Slide10OTAN from './Slide10OTAN'
import Slide11Contencion from './Slide11Contencion'
import Slide12Riesgo from './Slide12Riesgo'
import Slide13Evacuacion from './Slide13Evacuacion'
import Slide14Conclusion from './Slide14Conclusion'

export const SLIDES: SlideMeta[] = [
  { id: 'portada', label: 'PORTADA', dossier: '01', Component: Slide01Portada },
  { id: 'crisis', label: 'LA CRISIS COMIENZA', dossier: '02', Component: Slide02Crisis },
  { id: 'perfil', label: 'PERFIL DEL INVASOR', dossier: '03', Component: Slide03Perfil },
  { id: 'logistica', label: 'PROBLEMA LOGÍSTICO', dossier: '04', hasReveal: true, Component: Slide04Logistica },
  { id: 'mapa', label: 'RUTA DE INVASIÓN', dossier: '05', Component: Slide05Mapa },
  { id: 'espana', label: 'FASE 1: ESPAÑA', dossier: '06', Component: Slide06Espana },
  { id: 'francia', label: 'FASE 2: FRANCIA', dossier: '07', Component: Slide07Francia },
  { id: 'alemania', label: 'FASE 3: ALEMANIA', dossier: '08', Component: Slide08Alemania },
  { id: 'suiza', label: 'FASE 4: SUIZA', dossier: '09', Component: Slide09Suiza },
  { id: 'otan', label: 'RESPUESTA DE LA OTAN', dossier: '10', hasReveal: true, Component: Slide10OTAN },
  { id: 'contencion', label: 'MEDIDAS DE CONTENCIÓN', dossier: '11', Component: Slide11Contencion },
  { id: 'riesgo', label: 'ANÁLISIS DE RIESGO', dossier: '12', Component: Slide12Riesgo },
  { id: 'evacuacion', label: 'PLANES DE EVACUACIÓN', dossier: '13', Component: Slide13Evacuacion },
  { id: 'conclusion', label: 'CONCLUSIÓN DEL COMITÉ', dossier: '14', hasReveal: true, Component: Slide14Conclusion },
]
