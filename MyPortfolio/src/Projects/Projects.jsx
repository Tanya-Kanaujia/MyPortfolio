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
			<div className='textPart'>
				<ul>
					<li>
						<b>TechTutor</b>
					</li>
					<br />
					<div className='container'>
						<p className='about'>
							TechTutor is basically a plateform where a tech student can learn
							trending technologies and techStack at reasonable price they can
							buy batch and learn. In this i bulid a functionality of screen
							sharing where students can share their screen they can sign up and
							login into the plateform and can access classroom route. –{" "}
							<b>
								(HTML, CSS, JavaScript, Node JS, Express, Mongo DB, Bootstrap).
							</b>
							<br />
							<h3 id='codeLink'>SourceCode-</h3>
						</p>

						<img
							src={proImg3}
							alt='img'
							className='image'
						/>
					</div>

					<li>
						<b>GlobeTrekker</b>
					</li>
					<br />
					<div className='container'>
						<p className='about'>
							Build and deploy and end-to-end destination guide for users who
							wants to travel in several places of world. It is totally
							functional and responsive you can search a places see it, delete
							it, logged it and create new palaces. Using –{" "}
							<b>
								(HTML, CSS, JavaScript, Node JS, Express, Mongo DB, Bootstrap).
							</b>
							<h3 id='codeLink'>SourceCode-</h3>
						</p>

						<img
							src={proImg1}
							alt='img'
							className='image'
						/>
					</div>

					<hr />

					<li>
						<b>Simon Says Game</b>
					</li>
					<br />
					<div className='container'>
						<p className='about'>
							This game is the online version of the Simon electronic game with
							its circular design and its 4 big illuminated buttons: red ,green,
							blue and yellow. Each key is to an flash effect which will help
							the player to memorize the series of illuminated keys. Using –{" "}
							<b>(JavaScript, HTML, CSS).</b>
							<h3 id='codeLink'>SourceCode-</h3>
						</p>

						<img
							src={proImg2}
							alt='img'
							className='image'
						/>
					</div>
					<hr />
				</ul>
			</div>
		</>
	);
}
export default Projects;
