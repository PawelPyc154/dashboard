import React from 'react'
import ReactDOM from 'react-dom'
import { QueryClient, QueryClientProvider } from 'react-query'
import { BrowserRouter } from 'react-router-dom'
import { QueryParamProvider } from 'use-query-params'
import { App } from './app'
import { RouteAdapter } from './components/common/routeAdapter'
import { GlobalStyles } from './components/styles/globalStyles'

const queryClient = new QueryClient()

ReactDOM.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter basename="/app">
        <GlobalStyles />
        <QueryParamProvider ReactRouterRoute={RouteAdapter as React.FunctionComponent}>
          <App />
        </QueryParamProvider>
      </BrowserRouter>
    </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById('root'),
)
