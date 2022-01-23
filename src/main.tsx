import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { App } from './app'
import { DialogProvider } from './components/common/dialog/dialogProvider'
import { GlobalStyles } from './components/styles/globalStyles'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter basename="/">
      <GlobalStyles />
      <DialogProvider>
        <App />
      </DialogProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
)
