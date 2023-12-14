import "./App.css";
import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import UserPage from "./UserPage";
function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/user" element={<UserPage />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
