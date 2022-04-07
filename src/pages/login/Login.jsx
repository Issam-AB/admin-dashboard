import React, { useState, useContext } from "react";
import "./login.scss";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/authContext";

const Login = () => {
  const [user, setUser] = useState({ email: "", password: "", error: false });

  const navitage = useNavigate();

  const { dispatch } = useContext(AuthContext);

  const handlLogin = (e) => {
    e.preventDefault();

    createUserWithEmailAndPassword(auth, user.email, user.password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;

        dispatch({ type: "LOGIN", payload: user });
        navitage("/");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  };
  return (
    <div className="login">
      <form>
        <input
          type="email"
          placeholder="email"
          onChange={(e) => {
            setUser({ ...user, email: e.target.value });
          }}
        />
        <input
          type="password"
          placeholder="password"
          onChange={(e) => {
            setUser({ ...user, password: e.target.value });
          }}
        />
        <button type="submit" onClick={handlLogin}>
          Login
        </button>
        <span>Wrong email or password!</span>
        {JSON.stringify(user, null, 2)}
      </form>
    </div>
  );
};

export default Login;
