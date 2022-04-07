import React, { useState } from "react";
import "./login.scss";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";

const Login = () => {
  const [user, setUser] = useState({ email: "", password: "", error: false });
  return (
    <div className="login">
      <form>
        <input
          type="text"
          placeholder="email"
          onchange={(e) => {
            setUser({ ...user, email: e.target.value });
          }}
        />
        <input
          type="password"
          placeholder="password"
          onchange={(e) => {
            setUser({ ...user, password: e.target.value });
          }}
        />
        <button type="submit">Login</button>
        <span>Wrong email or password!</span>
      </form>
    </div>
  );
};

export default Login;
