import React, { useEffect, useState } from "react";
import "./TrainDetails.css";
import Navbar from "./Navbar";
import Footer from "./Footer";

function TrainDetails() {
  const [trainDetails, setTrainDetails] = useState([]);

  useEffect(() => {
    // Fetch train details from the database or API
    // and update the trainDetails state
    const fetchData = async () => {
      try {
        const response = await fetch("your_api_endpoint");
        const data = await response.json();
        setTrainDetails(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      
      <div className="train-container">
        <div className="train-details">
        <Navbar />
          <h2>Train Details</h2>
          {trainDetails.map((train) => (
            <div key={train.train_no} className="card">
              <h3>{train.train_name}</h3>
              <p>Train No: {train.train_no}</p>
              <p>Distance: {train.distance} km</p>
              <p>Start Time: {train.start_time}</p>
              <p>End Time: {train.end_time}</p>
              <p>Departure Station: {train.departure_station}</p>
              <p>Arrival Station: {train.arrival_station}</p>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default TrainDetails;