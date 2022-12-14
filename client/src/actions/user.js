import axios from 'axios'
import dispatch from 'redux'
import { setUser } from '../reducers/userReducer'

const baseUrl = 'http://localhost:5000/api/auth'

export const registration = async (email, password) => {
  try {
    const response = await axios.post(`${baseUrl}/registration`, {
      email, 
      password
    })
    alert(response.data.message)
  } catch (error) {
    alert(error.response.data.message)
  }
} 

export const login = (email, password) => {
  return async dispatch => {
    try {
      const response = await axios.post(`${baseUrl}/login`, {
        email, 
        password
      })
      dispatch(setUser(response.data.user))
      localStorage.setItem('token', response.data.token)
      console.log(response.data)
    } catch (error) {
      alert(error.response.data.message)
    }
  }
} 

export const auth = (email, password) => {
  return async dispatch => {
    try {
      const response = await axios.get(`${baseUrl}/auth`, {
        headers: {Authorization: `Bearer ${localStorage.getItem('token')}`}
      })
      dispatch(setUser(response.data.user))
      localStorage.setItem('token', response.data.token)
      console.log(response.data)
    } catch (error) {
      alert(error.response.data.message)
      localStorage.removeItem('token')
    }
  }
} 