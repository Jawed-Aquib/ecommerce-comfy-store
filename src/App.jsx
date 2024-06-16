// src/App.js
import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import HomeLayout from './pages/HomeLayout';
import Landing from './pages/Landing';
import Error from './pages/Error';
import Products from './pages/Products';
import SingleProduct from './pages/SingleProduct';
import Cart from './pages/Cart';
import About from './pages/About';
import Register from './pages/Register';
import Login from './pages/Login';
import Checkout from './pages/Checkout';
import Orders from './pages/Orders';
import { ErrorElement } from './components';
import { loader as landingLoader} from './pages/Landing';
import { loader as singleProductLoader} from './pages/SingleProduct'
import { loader as productLoader} from './pages/Products'

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
        errorElement: <ErrorElement/>,
        loader: landingLoader
      },
      {
        path: 'products',
        element: <Products/>,
        errorElement: <ErrorElement/>,
        loader: productLoader
      },
      {
        path: 'products/:id',
        element: <SingleProduct />,
        errorElement: <ErrorElement/>,
        loader: singleProductLoader
      },
      {
        path: 'cart',
        element: <Cart />,
      },
      { 
        path: 'about', 
      element: <About /> },
      {
        path: 'checkout',
        element: <Checkout />,
      },
      {
        path: 'orders',
        element: <Orders />,
      },
    ],
  },
  {
    path: '/login',
    element: <Login />,
    errorElement: <Error />,
  },
  {
    path: '/register',
    element: <Register />,
    errorElement: <Error />,
  },
]);

const App = () => {
  console.log('app.js is called')
  return <RouterProvider router={router} />;
};

export default App;
