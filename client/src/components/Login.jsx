import React, { useState } from 'react'
import Input from './UI/Input'
import { useDispatch } from 'react-redux'
import { login } from '../actions/user'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const dispatch = useDispatch()

  return (
    <div className='flex-grow min-h-0 w-full flex items-center justify-center'>
      <div className='bg-white rounded-lg shadow max-w-md w-full p-4'>
        <h2 className='text-center text-indigo-400 font-medium text-2xl mb-10 '>
          Login
        </h2>
        <div className='flex flex-col px-10 gap-4'>
          <Input
            type='email'
            text='Email'
            value={email}
            setValue={setEmail}
          />
          <Input
            type='password'
            text='Password'
            value={password}
            setValue={setPassword}
          />
          <button
            onClick={() => dispatch(login(email, password))}
            className='bg-indigo-400 text-white p-2 rounded-md font-medium mt-8'
          >
            Login
          </button>
        </div>
      </div>
    </div>
  )
}

export default Login
