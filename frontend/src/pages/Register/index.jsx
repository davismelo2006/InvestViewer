import React from "react";
import { Link } from "react-router-dom";
import Input from "../../components/Input";
import Button from "../../components/Button";
import "./style.css";

export default function Register() {
  return (
    <div className="form_container">
      <h1>Register</h1>

      <form action="" method="post">
        <div className="inputText_container">
          <label htmlFor="name">Name</label>
          <Input name={"name"} placeholder={"name"} type={"text"} />
        </div>

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

        <Button text={"Register"} type={"fullWidth"} />

        <div className="create_account-link">
          already have an account?&nbsp;
          <Link to={"/login"}>Login</Link>
        </div>
      </form>
    </div>
  );
}
