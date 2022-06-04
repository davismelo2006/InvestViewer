import React from "react";
import InputText from "../../components/InputText";
import Button from "../../components/Button";
import "./style.css";

export default function Login() {
  return (
    <div className="form_container">
      <h1>Login </h1>

      <form action="" method="post">
        <label htmlFor="email">Email</label>
        <InputText name={"email"} placeholder={"user@domain.com"} />

        <label htmlFor="password">Password</label>
        <InputText name={"password"} placeholder={"123456"} />
        <a href="http://google.com" target="_blank" rel="noopener noreferrer">
          forgot password?
        </a>

        <Button text={"Login"} type={"fullWidth"} />

        <div>
          don't have an account?&nbsp;
          <a href="http://google.com" target="_blank" rel="noopener noreferrer">
            SingUp
          </a>
        </div>
      </form>
    </div>
  );
}
