import React from 'react'

export const Label = ({ text, className, htmlFor }) => {
  return (
    <label htmlFor={htmlFor} className={className}>{text}</label>
  )
}
