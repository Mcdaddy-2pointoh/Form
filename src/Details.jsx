import React, { useState } from "react";
import "./App.css";
function Details() {
  const [uObj, newObj] = useState({
    uName: "",
    uEmail: "",
    uMob: "",
    uTvu: "",
    uTele: "",
  });

  const setUserInfo = (user) => {
    const value = user.target.value;
    const name = user.target.name;

    newObj((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const userSubmit = (user) => {
    user.preventDefault();
    let x = uObj.uMob;
    if (x.length !== 10) {
      alert("Please enter a valid mobile number");
    } else {
      alert("Form submitted");
      console.log(uObj.uName);
      console.log(uObj.uEmail);
      console.log(uObj.uMob);
      console.log(uObj.uTvu);
      console.log(uObj.uTele);
    }
  };
  return (
    <div className="Detail">
      <div className="Headers">Get FREE 1 month trial now</div>
      <div className="InpSeg">
        <form onSubmit={userSubmit}>
          <input
            type="text"
            name="uName"
            placeholder="Name"
            onChange={setUserInfo}
            value={uObj.uName}
            required
          />
          <br />
          <input
            type="email"
            name="uEmail"
            placeholder="Email id"
            onChange={setUserInfo}
            value={uObj.uEmail}
            required
          />
          <br />
          <input
            type="number"
            name="uMob"
            placeholder="Mobile Number"
            onChange={setUserInfo}
            value={uObj.uMob}
            required
          />
          <br />
          <input
            type="text"
            name="uTvu"
            placeholder="Company Username"
            onChange={setUserInfo}
            value={uObj.uTvu}
            required
          />
          <br />
          <input
            type="text"
            name="uTele"
            placeholder="Telegram Username"
            onChange={setUserInfo}
            value={uObj.uTele}
            required
          />
          <br />
          <br />
          <button type="submit">Get Started</button>
        </form>
      </div>
    </div>
  );
}

export default Details;
