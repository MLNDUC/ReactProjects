import React from 'react'
import ReactDOM from 'react-dom/client'
import Root from './routes/Root'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import ErrorPage from './routes/ErrorPage'
import ProductPage from './components/main/ProductPage'
import Home from './components/main/Home'
import { About } from './components/about/About'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/products",
        element: <ProductPage />
      },
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/about",
        element: <About />
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
