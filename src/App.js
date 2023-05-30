// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;


/*import React from "react";


import Section1 from "./MyComponents/Section1";


function App() {
  return (
    <Section1/>

    
    
  );
}*/

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Section1 from "./MyComponents/Section1";
import Login from "./MyComponents/Login";
import LoginAdmin from "./MyComponents/LoginAdmin";
import RegistrationForm from "./MyComponents/RegistrationForm";
import TrainInfoForm from "./MyComponents/TrainInfoForm";
import BookingForm from "./MyComponents/BookingForm";
import ForgotPassword from "./MyComponents/ForgetPassword";
import TrainDetails from "./MyComponents/TrainDetails";
import TrainInfo from "./MyComponents/TrainInformation";

function App(){
  return(
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Section1/>}></Route>
      <Route path="/home" element={<Section1/>}></Route>
      <Route path="/user-login" element={<Login/>}></Route>
      <Route path="/admin-login" element={<LoginAdmin/>}></Route>
      <Route path="/registration" element={<RegistrationForm/>}></Route>
      <Route path="/search" element={<TrainInfoForm/>}></Route>
      <Route path="/booking" element={<BookingForm />}></Route>
      <Route path="/reset-password" element={<ForgotPassword />}></Route>
      <Route path="/train" element={<TrainDetails />}></Route>
      <Route path="/train1" element={<TrainInfo />}></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;

