import React from "react";
import { Link } from "react-router-dom";
import Input from "../../components/Input";
import Button from "../../components/Button";

export default function Register() {
  const removeErrorClass = (e) => {
    e.target.classList.remove("error");
  };

  const Verify = (e) => {
    e.preventDefault();
    const inputs = e.target.querySelectorAll("input");

    inputs.forEach((el) =>
      el.value === "" ? el.classList.add("error") : el.classList.remove("error")
    );
  };

  return (
    <div className="form_container">
      <h1>Register</h1>

      <form onSubmit={Verify}>
        <div className="inputText_container">
          <label htmlFor="name">Name</label>
          <Input
            name={"name"}
            placeholder={"name"}
            type={"text"}
            onchange={removeErrorClass}
          />
        </div>

        <div className="inputText_container">
          <label htmlFor="email">Email</label>
          <Input
            name={"email"}
            placeholder={"user@domain.com"}
            type={"email"}
            onchange={removeErrorClass}
          />
        </div>

        <div className="inputText_container">
          <label htmlFor="password">Password</label>
          <Input
            name={"password"}
            placeholder={"password"}
            type={"password"}
            onchange={removeErrorClass}
          />
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
