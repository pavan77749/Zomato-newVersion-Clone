import Login from './auth/login'
import './App.css'
import HomePage from './HomePage'
import Signup from './auth/Signup'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const appRouter = createBrowserRouter([
  {
  path:'/',
  element:<HomePage/>,
  },
  {
    path:'/login',
    element:<Login/>
  },
  {
    path:'/signup',
    element:<Signup/>
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
