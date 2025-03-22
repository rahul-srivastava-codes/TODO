import React from "react";
import { Routes, Route } from "react-router-dom";
import Signup from "../Authentication/Signup";
import Login from "../Authentication/Login";
import Home from "../Mini_component/Home";
import Podcast from "../Mini_component/Podcast";
import Music from "../Mini_component/Music";

function Routes_path() {
  return (
    <>
      <Routes>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/" element={<Home />}></Route>
        <Route path="/podcast" element={<Podcast />}></Route>
        <Route path="/music" element={<Music />}></Route>
      </Routes>
    </>
  );
}

export default Routes_path;
