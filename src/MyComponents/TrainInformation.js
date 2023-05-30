import React, { useEffect, useState } from 'react';
import axios from 'axios';

import "./TrainInformation.css";

const TrainInfo = () => {
  
  const [trains, setTrains] = useState([]);
/*
  useEffect(() => {
    // Fetch train information from the database
    const fetchData = async () => {
      try {
        const response = await axios.get('YOUR_API_ENDPOINT'); // Replace with your API endpoint

        // Update the state with the fetched data
        setTrains(response.data);
      } catch (error) {
        console.error('Error fetching train information:', error);
      }
    };

    fetchData();
  }, []);*/

  return (
    <div className="container">
      <h1>Train Information</h1>
      <table>
        <thead>
          <tr>
            <th>Train Name</th>
            <th>Distance</th>
            <th>Destination</th>
            <th>Boarding</th>
          </tr>
        </thead>
        <tbody>
          {trains.map((train) => (
            <tr key={train.id}>
              <td>{train.name}</td>
              <td>{train.distance}</td>
              <td>{train.destination}</td>
              <td>{train.boarding}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TrainInfo;
