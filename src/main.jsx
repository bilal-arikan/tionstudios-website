import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@fontsource-variable/manrope'
import './styles.css'
import App from './App'
import LegalPage from './LegalPage'

const page = document.body.dataset.page || 'home'
const legalPages = ['privacy', 'terms']
const content = legalPages.includes(page) ? <LegalPage type={page} /> : <App page={page} />

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {content}
  </StrictMode>,
)
