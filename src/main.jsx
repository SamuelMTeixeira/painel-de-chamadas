import '@/assets/css/index.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import router from './lib/router.jsx'
import { mercureUrl } from './lib/mecure.js'
import MercureProvider from './contexts/MercureContext.jsx'
import QueryProvider from './contexts/QueryContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryProvider>
      <MercureProvider
        options={{
          hubUrl: mercureUrl,
        }}
      >
        <RouterProvider router={router} />
      </MercureProvider>
    </QueryProvider>
  </React.StrictMode>,
)
