import React from 'react'
import { Route ,Routes} from 'react-router-dom'
import Home from '../components/home/Home'
import Login from '../components/login/Login'
import Register from '../components/register/Register'
import SeatBook from '../components/seatBook/SeatBook'
import PrivateRoutes from './PrivateRoutes'
import Cart from '../components/cart/Cart'
import AllBookeTicket from '../components/allBookeTicket/AllBookeTicket'
import PayNow from '../components/payNow/PayNow'
import About from '../components/about/About'
import Contact from '../components/contact/Contact'

const AllRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Home/>} > </Route>
      <Route path='/login' element={<Login/>} > </Route>
      <Route path='/register' element={<Register/>} > </Route>
      {/* <Route path='/seatbook' element={<PrivateRoutes>
        <SeatBook/>
      </PrivateRoutes>}  > </Route> */}
       <Route path='/seatbook' element={<SeatBook/>} > </Route>
       <Route path='/cart' element={<Cart/>} > </Route>
       <Route path='/bookedticket' element={<AllBookeTicket/>} > </Route>
       <Route path='/pay' element={<PayNow/>} > </Route>
       <Route path='/about' element={<About/>} > </Route>
       <Route path='/contact' element={<Contact/>} > </Route>
    </Routes>
  )
}

export default AllRoutes
