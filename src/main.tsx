/* eslint-disable react-refresh/only-export-components */
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Auth from './pages/Auth/Auth'
import Login from './pages/Login/Login'
import SignUp from './pages/SignUp/SignUp'
import Dashboard from './pages/Dashboard/Dashboard'
import Products from './pages/Products/Products'
import ReadProducts from './pages/ReadProducts/ReadProducts'
import Favourite from './pages/Favourite/Favourite'
import OrderLists from './pages/OrderLists/OrderLists'
import CreateProduct from './pages/CreateProduct/CreateProduct'
import ProductDetails from './pages/ProductDetails/ProductDetails'

const Router = createBrowserRouter([
  {
    path: '/auth',
    element: <Auth />,
    children: [
      {
        path: '',
        element: <Login />
      },
      {
        path: 'signup',
        element: <SignUp />
      }
    ]
  },
  {
    path: '/',
    element: <Dashboard />,
    children: [
      {
        path: '',
        element: <Products />,
        children: [
          {
            path: '',
            element: <ReadProducts />
          },
          {
            path: 'ProductDetails',
            element: <ProductDetails />
          },
          {
            path: 'Favourite',
            element: <Favourite />
          },
          {
            path: 'OrderLists',
            element: <OrderLists />
          },
          {
            path: 'CreateProduct',
            element: <CreateProduct />
          },
        ]
      }
    ]
  }
],
{
  basename: '/Dashboard',
});
createRoot(document.getElementById('root')!).render(

  <StrictMode>
      <RouterProvider router={Router} />
  </StrictMode>,
)
