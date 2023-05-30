import React, { useState } from "react";
import Navbar from "./Navbar";
import "./forget.css";
import Footer from "./Footer";

const ForgotPassword = () => {
  const [username, setUsername] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const handleSubmit = () => {
    console.log("Username: ", username);
    console.log("New Password: ", newPassword);
    // Add logic to update password
  };

  return (
    <>
      <Navbar />
      <div className="forgot-password">
        <div className="bg-1">
          <div className="bg-2"></div>
          <form onSubmit={handleSubmit} className="form-container">
            <h2>Forgot Password?</h2>
            <div className="form-group">
              <label htmlFor="username">Username:</label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Enter your username"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="newPassword">New Password:</label>
              <input
                type="password"
                id="newPassword"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                placeholder="Enter your new password"
                required
              />
            </div>
            <button type="submit" className="btn-submit">
              Submit
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ForgotPassword;