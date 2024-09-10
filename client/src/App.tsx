import Login from './auth/login'
import HomePage from './HomePage'
import Signup from './auth/Signup'
import ResetPassword from './auth/ResetPassword'
import VerifyEmail from './auth/VerifyEmail'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ForgetPassword from './auth/ForgetPassword'

import MainLayout from './layout/MainLayout'
import HeroSection from './components/HeroSection'
import Profile from './components/Profile'

const appRouter = createBrowserRouter([
  {
  path:'/',
  element:<MainLayout/>,
  children:[
    {
      path:'/',
      element:<HeroSection/>
    },
    {
      path:'/profile',
      element:<Profile/>
    }
  ]
  },
  {
    path:'/login',
    element:<Login/>
  },
  {
    path:'/signup',
    element:<Signup/>
  },
 
  {
    path:'/forget-password',
    element:<ForgetPassword/>
  },
  {
    path:'/reset-password',
    element:<ResetPassword/>
  },
  {
    path:'/verify-email',
    element:<VerifyEmail/>
  },

 
])

function App() { 
 

  return (
  <main>
    <RouterProvider router={appRouter}>

    </RouterProvider>
  </main>
  )
}

export default App
