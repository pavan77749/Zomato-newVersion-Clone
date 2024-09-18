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
import AddMenu from './admin/AddMenu'
import Orders from './admin/Orders'
import Success from './components/Success'
import { useUserStore } from './store/useUserStore'
import { Navigate } from 'react-router-dom'


const ProtectedRoutes = ({children}:{children:React.ReactNode}) =>{
  const {isAuthenticated,user} = useUserStore()
  if(!isAuthenticated){
    return <Navigate to="/login" replace/>
  }
  if(!user?.isVerified){
     return <Navigate to="/verify-email" replace/>
  }
  return children;
}

const AuthenticatedUser = ({children}:{children:React.ReactNode}) =>{
  const {isAuthenticated,user} = useUserStore()
    if(isAuthenticated && user?.isVerified){
    return <Navigate to="/" replace/>
  }
  return children;
}

const AdminRoute = ({children}:{children:React.ReactNode}) =>{
  const {isAuthenticated,user} = useUserStore()
    if(!isAuthenticated){
    return <Navigate to="/login" replace/>
  }
  if(!user?.admin){
    return <Navigate to="/" replace/>
  }
  return children;
}


const appRouter = createBrowserRouter([
  {
  path:'/',
  element:<ProtectedRoutes><MainLayout/></ProtectedRoutes>,
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
    {
      path:'/order/status',
      element:<Success/>
    },
    // admin section started here 
    {
      path:'/admin/restaurant',
      element:<AdminRoute><Restaurant/></AdminRoute>
    },
    {
      path:'/admin/menu',
      element:<AdminRoute><AddMenu/></AdminRoute>
    },
    {
      path:'/admin/orders',
      element:<AdminRoute><Orders/></AdminRoute>
    },
  ]
  },
  {
    path:'/signup',
    element:<AuthenticatedUser><Signup/></AuthenticatedUser>
  },
  {
    path:'/login',
    element:<AuthenticatedUser><Login/></AuthenticatedUser>
  },
 
  {
    path:'/forget-password',
    element:<AuthenticatedUser><ForgetPassword/></AuthenticatedUser>
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
