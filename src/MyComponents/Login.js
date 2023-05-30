import React, { useState } from "react";
import "./Login.css";
import Navbar from "./Navbar";
import Footer from "./Footer";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // handle login logic here
  };

  return (
    <>
      <Navbar />
      <div className="login-container">
        <form onSubmit={handleLogin} className="login-form">
          <h1 className="login-title"> User Login</h1>
          <div className="form-group">
            <label htmlFor="username" className="form-label">
              Username:
            </label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="form-input"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password" className="form-label">
              Password:
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="form-input"
            />
          </div>
          <a  href="reset-password">Forget Password ?</a>
          <button type="submit" className="login-button">
            Login
          </button>
        </form>
      </div>
      <Footer />
    </>
  );
}

export default Login;