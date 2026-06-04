import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./style.css"
import Box from './Box'
import SalesApp from './SalesApp'
import EffectClass from './EffectClass'
import FetchingData from './FetchingData'
import FetchMore from './FetchMore'
import FetchMore2 from './FetchMore2'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <FetchMore2 />
  </StrictMode>,
)
