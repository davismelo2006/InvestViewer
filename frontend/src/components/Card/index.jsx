import React from "react";
import "./style.css";

export default function Card({ title, content }) {
  return (
    <div className="card">
      <div className="card_icon"></div>
      <div className="card_title">{title}</div>
      <div className="card_content">{content}</div>
    </div>
  );
}
