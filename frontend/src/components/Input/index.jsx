import React from "react";
import "./style.css";

export default function Input({ name, placeholder, type, onchange }) {
  return (
    <input
      type={type}
      name={name}
      id={name}
      placeholder={placeholder}
      onChange={onchange}
    />
  );
}
