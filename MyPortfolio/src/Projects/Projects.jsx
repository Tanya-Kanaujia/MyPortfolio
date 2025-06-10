/** @format */

import React from "react";
import "../App.css";
import "./Projects.css";
import proImg1 from "../assets/airbnb.jpg";
import proImg2 from "../assets/Simon Says Game.jpg";
import proImg3 from "../assets/tech.jpg";

function Projects() {
	return (
		<>
			<h2>Projects</h2>
			<br />
			<br />
			<ul>
				<li>
					<b>Zoom Clone</b>
				</li>
				<br />
				<div className='container'>
					<p className='about'>
						Build and deploy and end-to-end destination guide for users who
						wants to travel in several places of world. It is totally functional
						and responsive you can visit places see it, delete it, logged it and
						create new palaces. Using –{" "}
						<b>
							(HTML, CSS, JavaScript, Node JS, Express, Mongo DB, Bootstrap).
						</b>
					</p>
				</div>
				<hr />
			</ul>
		</>
	);
}

export default Projects;
