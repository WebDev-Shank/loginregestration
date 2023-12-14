import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import swal from "sweetalert";

const Register = () => {
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const [checkEmail, setCheckEmail] = useState("");

  const login = () => {
    const url = "http://localhost:1234/account";
    fetch(url)
      .then((res) => res.json())
      .then((userInfo) => {
        setCheckEmail(
          userInfo.map((e) => {
            return e.email;
          })
        );
      });
  };

  useEffect(() => {
    login();
  }, []);

  const handleRegister = () => {
    if (checkEmail.includes(email)) {
      swal(
        "Sorry Your Email Already Registered with us",
        "Try to use different email",
        "warning"
      );
    } else if (name === "" || mobile === "" || email === "" || pass === "") {
      swal("😅 ", "Please fill all the fields", "warning");
    } else {
      const url = "http://localhost:1234/account";
      const userInfo = { name: name, mobile: mobile, email: email, pass: pass };
      const postData = {
        headers: { "content-type": "application/json" },
        method: "POST",
        body: JSON.stringify(userInfo),
      };
      fetch(url, postData)
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setEmail("");
          setMobile("");
          setName("");
          setPass("");
          swal("😊", "Your Account Created Successfully", "success");
          setTimeout(() => {
            window.location.replace("http://localhost:3000/login");
          }, 3000);
        });
    }
  };
  return (
    <div className="hh">
      <h1 className="user">USER AUTHENTICATION</h1>
      <div className="container">
        <div className="head">
          <h1>Sign Up</h1>
          <p>Kindly fill all the fields</p>
        </div>
        <div className="body">
          <input
            value={name}
            type="text"
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter Your Name"
          />
          <input
            value={mobile}
            type="number"
            onChange={(e) => setMobile(e.target.value)}
            placeholder="Enter Your Mobile No."
          />
          <input
            value={email}
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter Your Email"
          />
          <input
            value={pass}
            type="password"
            onChange={(e) => setPass(e.target.value)}
            placeholder="Enter Your Password"
          />
          <button onClick={handleRegister}>Sign Up</button>
        </div>
      </div>
      <p className="register">
        Already have an account?
        <Link to="/">Log In</Link>
      </p>
    </div>
  );
};

export default Register;
