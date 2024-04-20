import React from 'react'

const Input = ({ type, className, placeholder, name }) => {
  return (
    <input type={type} className={className} placeholder={placeholder} name={name} />
  )
}

export default Input