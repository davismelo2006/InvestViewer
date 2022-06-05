import React from "react";
import { Link } from "react-router-dom";
import Button from "../../components/Button";
import "./style.css";

export default function ErrorPage() {
  return (
    <div className="error_container">
      <h1>404</h1>
      <h2>Page not found</h2>
      <Link to={"/"}>
        <Button text={"Go back"} type={"big"}></Button>
      </Link>
    </div>
  );
}
