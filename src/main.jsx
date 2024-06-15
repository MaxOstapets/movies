import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import { CounterProvider } from './Provider/Counter'
import { SettingsProvider } from './Provider/Settings'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <SettingsProvider>
      <CounterProvider>
            <App />
      </CounterProvider>
    </SettingsProvider>
  </React.StrictMode>
)
