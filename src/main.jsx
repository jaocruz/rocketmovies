import React from 'react'
import ReactDOM from 'react-dom/client'
import { Home } from './pages/home'

import theme from './styles/theme'

import GlobalStyle from './styles/global'
import { ThemeProvider } from 'styled-components'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle/>
      <Home/>
    </ThemeProvider>
  </React.StrictMode>,
)