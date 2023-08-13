import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { BASE_URL } from "../utils/baseUrl";

const RegisterPage = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const register = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`${BASE_URL}/register`, {
        method: "POST",
        body: JSON.stringify({ email, username, password }),
        headers: { "Content-Type": "application/json" },
      });

      if (response.status === 201) {
        alert("registration successful");
        navigate("/login");
      } else {
        const data = await response.json();
        alert(data.message);
      }
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <form className="register" onSubmit={register}>
      <h1>Register</h1>
      <input
        type="email"
        placeholder="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="text"
        placeholder="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="text"
        placeholder="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button>Register</button>
    </form>
  );
};

export default RegisterPage;
