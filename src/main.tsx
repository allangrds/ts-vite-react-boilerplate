import React from 'react'
import ReactDOM from 'react-dom/client'

import { ReactQueryProvider, ThemeProvider } from './providers'
import { Routes } from './routes'

import './libs/i18n'

const prepare = async () => {
  if (import.meta.env.VITE_MOCK_ENABLED === 'true') {
    const { setupMocks } = await import('./mocks')

    return setupMocks()
  }

  return Promise.resolve()
}

prepare().then(() => {
  const element = document.getElementById('root') as HTMLElement

  ReactDOM.createRoot(element).render(
    <React.StrictMode>
      <ThemeProvider>
        <ReactQueryProvider>
          <Routes />
        </ReactQueryProvider>
      </ThemeProvider>
    </React.StrictMode>
  )
})
