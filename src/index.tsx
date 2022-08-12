// REACT AND REACT DOM
import React from 'react'
import ReactDOM from 'react-dom/client'

// GLOBAL STYLES
import './assets/scss/index.scss'

// MEASURING PERFORMANCE
// https://create-react-app.dev/docs/measuring-performance/
import reportWebVitals from './reportWebVitals'

// React i18n https://react.i18next.com/
import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import en from './i18n/en.json'

// ROUTER
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import PageHomeRoute from './routes/PageHome/PageHome'

// -----------------------------------------------------------------------

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: en
      }
    },
    lng: "en",
    fallbackLng: "en",
    interpolation: {
      escapeValue: false
    }
  })

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
)

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={ <PageHomeRoute/> }></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
