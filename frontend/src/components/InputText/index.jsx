import React from "react";
import "./style.css";

export default function InputText({ name, placeholder }) {
  return <input type="text" name={name} id={name} placeholder={placeholder} />;
}
