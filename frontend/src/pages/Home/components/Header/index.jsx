import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../../../../components/Button/";
import "./style.css";

export default function Header() {
  const [isMenuOpened, setMenu] = useState(false);

  function showMenuMobile() {
    isMenuOpened === true ? setMenu(false) : setMenu(true);
  }

  return (
    <header>
      <div className="header_container">
        <span className="header_title">InvestViewer</span>

        <div className="mobile_menu">
          <div className="line_container">
            <input
              type="checkbox"
              name="menu-check"
              id="menu-checkbox"
              onClick={showMenuMobile}
            />
            <span></span>
            <span></span>
            <span></span>
          </div>

          <div
            className="mobile_menu-options"
            style={{ display: isMenuOpened === true ? "flex" : "none" }}
          >
            <Button text={"Login"} type={"big"} />
            <Button text={"Get Started"} type={"big"} />
          </div>
        </div>

        <div className="header_btn-container">
          <Link to={"/login"}>
            <Button text={"Login"} type={"big"} />
          </Link>

          <Link to={""}>
            <Button text={"Get Started"} type={"big"} />
          </Link>
        </div>
      </div>
    </header>
  );
}
