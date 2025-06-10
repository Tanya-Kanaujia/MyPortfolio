/** @format */

import React from "react";
import "../App.css";
import "./Projects.css";
function Projects() {
	return (
		<>
			<h2>Projects</h2>
			<br />
			<br />
			<ul>
				<li>
					<b>
						<a
							href='https://globetrekker.onrender.com'
							className='black'>
							GlobeTrekker
						</a>
					</b>
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
