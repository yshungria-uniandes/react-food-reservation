import React, { useState } from "react";

const ReservationForm = ({ cart }) => {
  const [formData, setFormData] = useState({
    name: "",
    date: "",
    time: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Reservation confirmed:", { ...formData, cart });
    alert("Reservation confirmed!");
  };

  return (
    <div>
      <h2>Reservation Form</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          required
        />
        <input
          type="time"
          name="time"
          value={formData.time}
          onChange={handleChange}
          required
        />
        <button type="submit" disabled={cart.length === 0}>
          Confirm Reservation
        </button>
      </form>
    </div>
  );
};

export default ReservationForm;
