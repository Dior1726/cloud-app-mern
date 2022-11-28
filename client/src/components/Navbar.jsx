import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { logout } from '../reducers/userReducer'

const Navbar = () => {
  const isAuth = useSelector((state) => state.user.isAuth)
  const dispatch = useDispatch()

  return (
    <div className='bg-indigo-400 w-full flex justify-between items-center text-white px-10 py-4 shadow-md'>
      <h2 className='text-xl font-bold'>CloudDisk</h2>
      {!isAuth && (
        <nav className='flex gap-4 '>
          <NavLink
            to='/login'
            className='font-medium'
          >
            Login
          </NavLink>
          <NavLink
            to='/registration'
            className='font-medium'
          >
            Registration
          </NavLink>
        </nav>
      )}
      {isAuth && <button onClick={() => dispatch(logout())}>Logout</button>}
    </div>
  )
}

export default Navbar
