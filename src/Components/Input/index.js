import React from 'react'
import { InputStyle } from './style'
const Input = ({ handleChange, values, className, error, ...props }) => {
  return (
    <InputStyle>
      <input
        value={values}
        onChange={handleChange}
        className={className}
        {...props}
      />
      {error && <div className="invalid-feedback">{error}</div>}
    </InputStyle>
  )
}

export default Input
