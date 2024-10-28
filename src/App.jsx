import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import './App.css'
import LayoutOne from './Layout/LayoutOne'
import Home from './Pages/Home'
import Story from './Pages/Story'
import About from './Pages/About'
import Shipping from './Pages/Shipping'
import Help from './Pages/Help'
import Contact from './Pages/Contact'
import LayoutTwo from './Layout/LayoutTwo'
import Products from './Pages/Products'
import Login from './Pages/Login'
import Register from './Pages/Register'
import FirebaseDB from './firebase'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ForgotPassword from './Pages/ForgotPassword'
// import LayoutTwo from './Layout/LayoutTwo'

function App() {

  

  const path = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path='/' element={<LayoutOne/>}>
        <Route index element={<Home/>}/>
        <Route path='/services' element={<Story/>}/>
        <Route path='/products' element={<Products/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/resetpass' element={<ForgotPassword/>}/>
        </Route>
        <Route path='/about' element={<LayoutTwo/>}>
        <Route index element={<About/>}/>
        <Route path='/about/ship' element={<Shipping/>}/>
        <Route path='/about/contact' element={<Contact/>}/>
        <Route path='/about/help' element={<Help/>}/>
        </Route>

      </Route>
    )
  )


  return (
    <>
    <ToastContainer/>
     <RouterProvider router={path}/>
    </>
  )
}

export default App
