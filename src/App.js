import React from "react";
import "./style.css";
import MyContextProvider from "./store";
import Trucks from "./Trucks";
import Bikes from "./Bikes";
import Cars from "./Cars";

export default function App() {
  return (
    <div className="App">
      <MyContextProvider>
        <Trucks />
        <br />
        <Bikes />
        <br />
        <Cars />
      </MyContextProvider>
    </div>
  );
}
