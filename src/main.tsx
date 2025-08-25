import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import "./i18n.js"
import './App.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <React.Suspense fallback={<div>Loading...</div>}>
      <App />
    </React.Suspense>
  </StrictMode>,
)
