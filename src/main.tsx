import React from 'react'
import ReactDOM from 'react-dom/client'

import { ThemeProvider } from './providers'
import { Routes } from './routes'

import './libs/i18n'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider>
      <Routes />
    </ThemeProvider>
  </React.StrictMode>
)
