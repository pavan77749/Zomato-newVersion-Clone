import Login from './auth/login'
import Signup from './auth/Signup'
import ResetPassword from './auth/ResetPassword'
import VerifyEmail from './auth/VerifyEmail'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ForgetPassword from './auth/ForgetPassword'
import Cart from './components/Cart'
import MainLayout from './layout/MainLayout'
import HeroSection from './components/HeroSection'
import Profile from './components/Profile'
import SearchPage from './components/SearchPage'
import RestaurantDetail from './components/RestaurantDetail'
import Restaurant from './admin/Restaurant'

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
    },
    {
      path:'/search/:text',
      element:<SearchPage/>
    },
    {
      path:'/restaurant/:id',
      element:<RestaurantDetail/>
    },
    {
      path:'/cart',
      element:<Cart/>
    },
    // admin section started here 
    {
      path:'/admin/restaurant',
      element:<Restaurant/>
    },
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
