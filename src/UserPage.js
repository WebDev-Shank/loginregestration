import React from "react";

const UserPage = () => {
  return (
    <div className="App">
      <h1>
        Hello <span className="name">{localStorage.getItem("userName")}</span>
      </h1>
      <div>
        <h2>Your Name is : {localStorage.getItem("userName")}</h2>
        <h2>Your Email is : {localStorage.getItem("userEmail")}</h2>
        <h2>Your Mobile No. is : {localStorage.getItem("userMobile")}</h2>
      </div>
      <button className="logout" onClick={logout}>
        Logout
      </button>
    </div>
  );
};

export default UserPage;
const logout = () => {
  window.location.replace(
    // for deploy
    "https://webdev-shank.github.io/loginregestration/#/"

    //for start
    // "http://localhost:3000/loginregestration"
  );
};
