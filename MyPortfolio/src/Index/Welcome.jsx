import React from "react";
import "./Welcome.css";
import { Link } from "react-router-dom";


function WelcomePage() {
  return (
    <>
      <div className="text">
        <h1>WELCOME</h1>
        <h1>to my <b>Portfolio</b></h1>
        <Link to="/home">
         <button className="home-btn">Get Started!</button>
        </Link>
        <p>Based on React</p>
      </div>
    </>
  )
}
export default WelcomePage;