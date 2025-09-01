import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { LibProvider } from './context/libraryContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <LibProvider>
      <App />
    </LibProvider>
  </StrictMode>,
)
