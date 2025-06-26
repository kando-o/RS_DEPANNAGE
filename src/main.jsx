import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import AppRouter from '../router/views/router.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
 <StrictMode>
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  </StrictMode>
)
