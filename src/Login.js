import React, { useState } from "react";
import swal from "sweetalert";
import { Link } from "react-router-dom";

const Login = () => {
  const [e, setLoginEmail] = useState("");
  const [p, setLoginPassword] = useState("");

  const login = () => {
    if (e === "" || p === "") {
      swal("Error", "Empty Email or Password", "warning");
    } else {
      const url =
        "https://employeedata-fb7q.onrender.com/account?email=" +
        e +
        "&password=" +
        p;
      fetch(url)
        .then((res) => res.json())
        .then((userInfo) => {
          console.log(userInfo);
          if (userInfo.length === 0) {
            swal("Failed", "User ,Invalid or Not Exist", "error");
          } else {
            localStorage.setItem("userName", userInfo[0].name);
            localStorage.setItem("userEmail", userInfo[0].email);
            localStorage.setItem("userMobile", userInfo[0].mobile);
            window.location.replace(
              // for deploy
              "https://webdev-shank.github.io/loginregestration/#/user"

              // for start
              // "http://localhost:3000/loginregestration/#/user"
            );
          }
        });
    }
  };
  return (
    <div className="hh">
      <h1 className="user">USER AUTHENTICATION</h1>
      <div className="container">
        <div className="head">
          <h1>Sign In</h1>
          <p>Stay Updated on your professional world</p>
        </div>
        <div className="body">
          <input
            type="email"
            placeholder="Email"
            onChange={(e) => setLoginEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            onChange={(e) => setLoginPassword(e.target.value)}
          />
          <button onClick={login}>Sign In</button>
        </div>
      </div>
      <p className="register">
        New to Facebook?
        <Link to="/register">Join Now</Link>
      </p>
    </div>
  );
};

export default Login;
