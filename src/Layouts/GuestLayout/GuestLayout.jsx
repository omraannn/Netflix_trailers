import React from 'react'
import NavGuest from '../../components/NavGuest/NavGuest'
import { Outlet } from 'react-router-dom'
import "./guestLayout.scss"
 

const GuestLayout = () => {
  return (
    <>
        <div className="loginScreen__bg">
            <div className='loginScreen__bg-gradient'></div>
            <NavGuest />
            <Outlet/>
        
        </div>
    </>
  )
}

export default GuestLayout