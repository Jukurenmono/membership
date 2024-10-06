import React from "react";
import Home from "./Home";
import { Routes, Route } from "react-router-dom";
import Login from "./Login";
import ResetPass from "./ResetPass";

const Pages = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/ResetPass" element={<ResetPass></ResetPass>}></Route>
      </Routes>
    </div>
  );
};

export default Pages;