import React from 'react'
import ReactDOM from 'react-dom/client'
import theme from '@chakra-ui/theme'
import { ChakraBaseProvider } from '@chakra-ui/react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import './index.css'
import routes from './routes'

const router = createBrowserRouter(routes)

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <ChakraBaseProvider theme={theme}>
            <RouterProvider router={router} />
        </ChakraBaseProvider>
    </React.StrictMode>,
)
