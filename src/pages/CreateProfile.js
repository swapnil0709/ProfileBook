import React, { useState } from "react";
import "./CreateProfile.scss";
export default function CreateProfile() {
  const [formData, setFormData] = useState({
    Image: "",
    name: "",
    id: "",
  });

  const handleChange = ({ target }) => {
    const { name, value } = target;

    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("http://localhost:3300/profiles", {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        alert("Profile created successfully");
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  return (
    <div className="container">
      <form className="form">
        <label htmlFor="image">Image url</label>
        <input
          type="text"
          id="image"
          required
          onChange={handleChange}
          placeholder="Url"
          name="Image"
        />
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          required
          onChange={handleChange}
          placeholder="Name"
          name="name"
        />
        <label htmlFor="id">Id</label>
        <input
          name="id"
          type="text"
          id="id"
          required
          onChange={handleChange}
          placeholder="Unique id"
        />
        <button type="submit" onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
}
