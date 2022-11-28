import React, { useEffect } from 'react'
import Navbar from './components/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Registration from './components/Registration'
import Login from './components/Login'
import { useDispatch, useSelector } from 'react-redux'
import { auth } from './actions/user'

function App() {
  const isAuth = useSelector((state) => state.user.isAuth)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(auth())
  }, [])

  return (
    <BrowserRouter>
      <div className='flex flex-col items-center w-full min-h-screen bg-indigo-50'>
        <Navbar />
        {!isAuth && (
          <Routes>
            <Route
              path='/registration'
              element={<Registration />}
            />
            <Route
              path='/login'
              element={<Login />}
            />
          </Routes>
        )}
      </div>
    </BrowserRouter>
  )
}

export default App
