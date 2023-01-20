import React, { useState, useEffect } from "react";
import "../Css/Table.css";

export default function Table() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/getUsers", {
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        setData(result);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="table">
      <h1>Question 3</h1>
      <table cellSpacing="0">
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
          {data.map((user, i) => (
            <tr key={i} className="contents">
              <td>{i + 1}</td>

              <td>{user.Name}</td>
              <td>{user.Age}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
