import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'
import { Toaster } from "react-hot-toast"


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Toaster 
     toastOptions={{
      success: {
        style: {
          background: 'green',
          color: 'white',
        },
      },
      error: {
        style: {
          background: 'red',
          color: 'white',
        },
      },
    }}/>
    <App  />
  </StrictMode>,
)
