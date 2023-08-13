import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { BASE_URL } from "../utils/baseUrl";
import { useUserContext } from "../contexts/UserContext/UserContext"; 

const LoginPage = () => {
  const { setUserInfo } = useUserContext();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const login = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`${BASE_URL}/login`, {
        method: "POST",
        body: JSON.stringify({ email, password }),
        headers: { "Content-Type": "application/json" },
        credentials: "include",
      });

      if (response.ok) {
        response.json().then((userInfo) => {
          setUserInfo(userInfo);
          navigate("/");
        });
      }
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <form className="login" onSubmit={login}>
      <h1>Login</h1>
      <input
        type="email"
        placeholder="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="text"
        placeholder="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button>Login</button>
    </form>
  );
};

export default LoginPage;
