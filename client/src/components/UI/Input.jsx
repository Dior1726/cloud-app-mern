import React from 'react'

const Input = ({ type, text, className, value, setValue }) => {
  return (
    <input
      className={`bg-indigo-100 p-2 outline-none rounded-md ${className}`}
      type={type}
      placeholder={text}
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  )
}

export default Input
