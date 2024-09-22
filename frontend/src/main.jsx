import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {BrowserRouter} from "react-router-dom"
import { shopContextProvider } from './Context/shopContext.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <shopContextProvider>
      <App/>
    </shopContextProvider>
  </BrowserRouter>
)
