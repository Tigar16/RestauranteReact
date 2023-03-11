import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { router } from './router/RouterDom'
import { RouterProvider } from 'react-router-dom'
import { Container } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
    <RouterProvider router={router} />
  </React.StrictMode>
)
