import React, { useState } from "react";
import "./booking.css";
import Navbar from "./Navbar";
import Footer from "./Footer";

function BookingForm() {
  const [startingPlace, setStartingPlace] = useState("");
  const [endingPlace, setEndingPlace] = useState("");
  const [numberOfAdults, setNumberOfAdults] = useState("");
  const [numberOfChildren, setNumberOfChildren] = useState("");
  const [journeyDate, setJourneyDate] = useState("");
  const [travelClass, setTravelClass] = useState("");

  const handleSubmit = () => {
    // code to handle form submission
  };

  const handleReset = () => {
    setStartingPlace("");
    setEndingPlace("");
    setNumberOfAdults("");
    setNumberOfChildren("");
    setJourneyDate("");
    setTravelClass("");
  };

  return (
    <>
    <br></br>
      <Navbar />
      <div className="bg-1">
        <form onSubmit={handleSubmit}>
          <br></br>
          <br></br>
          <h1>
            <i>Booking Details</i>
          </h1>
          <label htmlFor="starting">Starting Place:</label>
          <input
            type="text"
            id="starting"
            value={startingPlace}
            onChange={(e) => setStartingPlace(e.target.value)}
          />
          <label htmlFor="end">Ending Place:</label>
          <input
            type="text"
            id="end"
            value={endingPlace}
            onChange={(e) => setEndingPlace(e.target.value)}
          />
          <label htmlFor="Tkt">No of adults: </label>
          <input
            type="number"
            id="Tkt"
            value={numberOfAdults}
            onChange={(e) => setNumberOfAdults(e.target.value)}
          />
          <label htmlFor="Tr">No of childrens </label>
          <input
            type="number"
            id="Tr"
            value={numberOfChildren}
            onChange={(e) => setNumberOfChildren(e.target.value)}
          />
          <label htmlFor="date">Date of Journey: </label>
          <input
            type="date"
            id="date"
            value={journeyDate}
            onChange={(e) => setJourneyDate(e.target.value)}
          />
          <label htmlFor="travelClass" className="text-white travel">
            Travel Classes
          </label>
          <select
            id="travelClass"
            defaultValue={"placeholder"}
            onChange={(e) => setTravelClass(e.target.value)}
            
          >
            <option></option>
            <option disabled value={"placeholder"}>Select your class </option>
            <option>First Class/1A</option>
            <option>AC 2tier/2A</option>
            <option>AC 3tier/3A</option>
            <option>Executive class chair car/Economy Class</option>
            <option>AC Chair Car</option>
            <option>Sleeper Class</option>
            <option>Second Class</option>
            <option>General</option>
          </select>
          <input type="submit" value="check Availability" /> &nbsp;
          <input type="reset" value="Cancel" onClick={handleReset} />
        </form>
      </div>
      <Footer />
    </>
  );
}

export default BookingForm;
