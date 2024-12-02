import React  from 'react'
import ReactDom from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { router } from './router'
import './styles.css'

ReactDom.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
