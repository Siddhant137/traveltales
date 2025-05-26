import React, { useState, useEffect } from "react";
import axios from "axios";

function Dashboard() {
  const [trips, setTrips] = useState([]);

  useEffect(() => {
    const fetchTrips = async () => {
      const token = localStorage.getItem("token");
      const userId = JSON.parse(atob(token.split(".")[1])).id;
      const res = await axios.get(`http://localhost:3001/api/trips/${userId}`);
      setTrips(res.data);
    };
    fetchTrips();
  }, []);

  return (
    <div>
      <h2>Your Trips</h2>
      <ul>
        {trips.map((trip) => (
          <li key={trip._id}>{trip.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default Dashboard;