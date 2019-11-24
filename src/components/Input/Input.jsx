import React from "react";
import './Input.css'

const Input = ({ name, type, placeholder, value, handleChange }) => (
      <input
        className='component-input'
        type={type}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={e => handleChange(e)}
      />
);

export default Input;