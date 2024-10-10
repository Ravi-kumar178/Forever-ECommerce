import React, { useContext } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Collection from './Pages/Collection'
import About from "./Pages/About"
import Contact from "./Pages/Contact"
import Product from './Pages/Product'
import Cart from "./Pages/Cart"
import Login from "./Pages/Login"
import PlaceOrder from "./Pages/PlaceOrder"
import Orders from "./Pages/Orders"
import Navbar from './Components/Common/Navbar'
import Footer from './Components/Common/Footer'
import SearchBar from './Components/Common/SearchBar'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Profile from './Pages/Profile'
import NotFound from './Pages/NotFound'
import { ShopContext } from './Context/ShopContext'
import PrivateRoute from './Components/PrivateRoute'

/*px-4  sm:px-[5vw] md:px-[7vw] lg:px-[9vw] */

const App = () => {
  const {token} = useContext(ShopContext);

  return (
    <div className=' bg-[#111521] w-full overflow-x-hidden'>
      <ToastContainer/>
      <Navbar/>
      <SearchBar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/collection' element={<Collection/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/product/:productId' element={<Product/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/place-order' element={<PlaceOrder/>}/>
        <Route path='/orders' element={<PrivateRoute element={<Orders/>} isAuthenticated={!!token}/>}/>
        <Route path='/profile' element={<PrivateRoute element={<Profile/>} isAuthenticated={!!token}/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App