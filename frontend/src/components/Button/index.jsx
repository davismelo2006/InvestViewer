import React from "react";
import "./style.css";

export default function Button({ text, type }) {
  return <button className={`btn-${type}`}>{text}</button>;
}
