import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './app/globals.css'

import { SheetProvider } from './contexts/open-sidebar-context.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <SheetProvider>
      <App />
    </SheetProvider>
  </StrictMode>
)
