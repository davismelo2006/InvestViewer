import React from "react";
import { Link } from "react-router-dom";
import Input from "../../components/Input";
import Button from "../../components/Button";
import "./style.css";

export default function Login() {
  return (
    <div className="form_container">
      <h1>Login </h1>

      <form action="" method="post">
        <div className="inputText_container">
          <label htmlFor="email">Email</label>
          <Input
            name={"email"}
            placeholder={"user@domain.com"}
            type={"email"}
          />
        </div>

        <div className="inputText_container">
          <label htmlFor="password">Password</label>
          <Input name={"password"} placeholder={"password"} type={"password"} />
        </div>

        <Link to={"/underconstruction"}>forgot password?</Link>

        <Button text={"Login"} type={"fullWidth"} />

        <div className="create_account-link">
          not registered?&nbsp;
          <Link to={"/register"}>create account</Link>
        </div>
      </form>
    </div>
  );
}
