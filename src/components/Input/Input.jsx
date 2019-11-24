import React from "react";

const Input = ({ name, type, placeholder, value, handleChange }) => (
      <input
        type={type}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={e => handleChange(e)}
      />
);

export default Input;