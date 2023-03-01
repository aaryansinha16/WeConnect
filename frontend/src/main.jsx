import { ChakraProvider } from '@chakra-ui/react'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import AllContextProviderComponent from './contexts/AllContext'
import './index.css'
import theme from './theme'

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <AllContextProviderComponent>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </AllContextProviderComponent>
  //
)
