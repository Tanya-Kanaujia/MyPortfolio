/** @format */

import React from "react";
import "../App.css";
import img from "../assets/hero.jpg";
import "./Content.css";
import { Link } from "react-router-dom";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";

function Content() {
	return (
		<>
			<div className='main-content'>
				<div className='connect'>
					<div className='icons'>
						<a href='https://github.com/Tanya-Kanaujia'>
							<GitHubIcon />
						</a>{" "}
						<br />
						<a href='https://www.linkedin.com/in/tanya-kanaujia/'>
							<LinkedInIcon />
						</a>{" "}
						<br />
						<a href='https://www.facebook.com/itanyakanaujia'>
							<FacebookIcon />
						</a>{" "}
						<br />
					</div>
				</div>
				<div className='right-section'>
					<h4>Hi, My name is</h4>
					<h1 id='name'>Tanya</h1>
					<h3>
						A Software
						<br /> engineering aspirant
					</h3>

					<div className='about'>
						<p>
							I have worked on web technologies in Fronted (Html5, CSS,
							JavaScript with the frameWork Tailwind, BootStrap). Also work on
							ReactJs and bulid several projects using Backend techologies
							(NodeJs, ExpressJs, MongoDb). I also familier with C . Currently
							learning DSA using Java. Aspiring for a great career in Software
							Engineering as to use my learned skills and experience for the
							best result.
						</p>
					</div>

					<div className='btns'>
						<Link to='/contact'>
							<button className='contact-btn'>Contact Me!</button>
						</Link>
					</div>
				</div>

				<img
					src={img}
					alt='heroImg'
					className='heroImg'
				/>
			</div>
		</>
	);
}
export default Content;
