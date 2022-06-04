import React from "react";
import "./style.css";
import Button from "../Button";

export default function Header() {
  return (
    <header>
      <div className="container">
        <span className="header_title">InvestViewer</span>

        <div className="header_btn-container">
          <Button text={"Login"} type={"big"} />
          <Button text={"Get Started"} type={"big"} />
        </div>
      </div>
    </header>
  );
}
