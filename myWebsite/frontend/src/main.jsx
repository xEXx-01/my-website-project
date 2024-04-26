import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider, Route, Link } from 'react-router-dom'
import Home from './Pages/Home.jsx'
import Login from './Pages/Login.jsx'
import Register from './Pages/Register.jsx'
import Error from './Pages/Error.jsx'
import Profile from './Pages/Profile.jsx'
import EditProfile from './Pages/EditProfile.jsx'
import Shop from './Pages/Shop.jsx'
import Post from './Pages/Post.jsx'
import Homemain from './Pages/Homemain.jsx'



const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/register',
    element: <Register />
  },
  {
    path: '/Profile',
    element: <Profile />
  },
  {
    path: '/EditProfile',
    element: <EditProfile />
  },
  {
    path: '/shop',
    element: <Shop />
  },
  {
    path: '/โพสต์',
    element: <Post />
  },
  {
    path: '/Main',
    element: <Homemain />
  },
  {
    path: '*',
    element: <Error />
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}> </RouterProvider>
  </React.StrictMode>,
)
