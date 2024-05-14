import '@/assets/css/index.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import router from './lib/router.jsx'
import QueryContext from './contexts/QueryContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryContext>
      <RouterProvider router={router} />
    </QueryContext>
  </React.StrictMode>,
)
