"use client";
import React from "react";
import RegisterSchool from "../_server/RegisterSchool";

const page = () => {
  return (
    <div>
      register
      <button onClick={RegisterSchool}>Register school</button>
    </div>
  );
};

export default Register
