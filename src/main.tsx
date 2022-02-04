import React from 'react'
import ReactDOM from 'react-dom'
import { QueryClient, QueryClientProvider } from 'react-query'
import { BrowserRouter } from 'react-router-dom'
import { QueryParamProvider } from 'use-query-params'
import { App } from './app'
import { DialogProvider } from './components/common/dialog/dialogProvider'
import { RouteAdapter } from './components/common/routeAdapter'
import { GlobalStyles } from './components/styles/globalStyles'

const queryClient = new QueryClient()

ReactDOM.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter basename="/">
        <GlobalStyles />
        <DialogProvider>
          <QueryParamProvider ReactRouterRoute={RouteAdapter as React.FunctionComponent}>
            <App />
          </QueryParamProvider>
        </DialogProvider>
      </BrowserRouter>
    </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById('root'),
)
