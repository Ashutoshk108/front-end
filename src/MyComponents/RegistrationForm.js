import React, { useState } from "react";
import "./RegistrationForm.css";
import Navbar from "./Navbar";
import Footer from "./Footer";

const RegistrationForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobileNo, setMobileNo] = useState("");
  const [sex, setSex] = useState("");
  const [age, setAge] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    console.log("Name: ", name);
    console.log("Email: ", email);
    console.log("Mobile No: ", mobileNo);
    console.log("Sex: ", sex);
    console.log("Age: ", age);
    console.log("Password: ", password);
  };
  <Navbar />
  return (
    <div>
      <Navbar /> 
      <br/>
      <br/>
      <br/>
      <div className="bg-1">
        <div className="bg-2">
          <form onSubmit={handleSubmit} className="registration-form-container">
            
            <h2>Register Now!</h2>
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="mobileNo">Mobile No:</label>
              <input
                type="tel"
                id="mobileNo"
                value={mobileNo}
                onChange={(e) => setMobileNo(e.target.value)}
                placeholder="Enter your mobile no"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="sex">Sex:</label>
              <select
                id="sex"
                value={sex}
                onChange={(e) => setSex(e.target.value)}
                required
              >
                <option value="">Select sex</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="age">Age:</label>
              <input
                type="number"
                id="age"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                placeholder="Enter your age"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                required
              />
            </div>
            <button type="submit" className="btn-submit">
              Register
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default RegistrationForm;