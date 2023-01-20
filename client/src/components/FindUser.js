import React, { useState } from "react";
import "../Css/FindUser.css";

export default function FindUser() {
  const [id, setId] = useState("");
  const [user, setUser] = useState("");

  const findUser = () => {
    fetch(`http://localhost:5000/findUser/${id}`, {
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        setUser(result);
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="findUser">
      <h1>Question 4</h1>
      <div className="find">
        <div className="form-control">
          <label htmlFor="name">User Id</label>
          <input
            type="text"
            value={id}
            onChange={(e) => setId(e.target.value)}
            required
          />
        </div>

        <button type="submit" onClick={findUser}>
          Submit
        </button>
        <div className="userData">
          <p>{user ? user.Name : ""}</p>
          <p>{user ? user.Age : ""}</p>
        </div>
      </div>
    </div>
  );
}
