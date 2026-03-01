import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import WhatsAppFloat from './components/WhatsAppFloat'
import MobileContactBar from './components/MobileContactBar'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <WhatsAppFloat />
    <MobileContactBar />
  </React.StrictMode>,
)
