import React from "react";

const UserPage = () => {
  return (
    <div className="App">
      <h1>
        Hello <span className="name">{localStorage.getItem("userName")}</span>
      </h1>
      <button className="logout" onClick={logout}>
        Logout
      </button>
    </div>
  );
};

export default UserPage;
const logout = () => {
  window.location.replace("http://localhost:3000/login");
};
