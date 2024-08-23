import React from "react";
import "../App.css";
import "./Achievement.css";
import ncc from "../assets/ncc.jpg";

function Achievement() {
  return (
    <>
      <h2>Achievements</h2>
      <br /><br />
      <div className="box">
        <ul>
          <li><b>NCC cadet : </b> (2022-23)</li>
          <br/>
          <p className="textArea">I got B certificate from 57 Batalian as I completed my 2 year as a cadet. And i included in Ncc exam 2023 and got B grade and I also completed my 10 day BootCamp in Cant Kanpur.</p>
        </ul>

          <img src={ ncc } id="ncc"/>
      </div>
      <hr />
    </>
  )
}
export default Achievement;