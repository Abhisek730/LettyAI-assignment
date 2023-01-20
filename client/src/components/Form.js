import React, { useState } from "react";
import "../Css/Forms.css";

export default function Form() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  //Post request to nodejs server
  const postData = () => {
    // Sending data to server
    fetch("http://localhost:5000/add", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        age: age,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };

  return (
    <div className="form">
      <h1>Question 1 & 2</h1>
      <form action="">
        <div className="form-control">
          <label htmlFor="name">Full Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-control">
          <label htmlFor="name">Age</label>
          <input
            type="text"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            required
          />
        </div>
        <button type="submit" onClick={postData}>
          Submit
        </button>
      </form>
    </div>
  );
}
