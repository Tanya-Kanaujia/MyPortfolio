/** @format */

import React from "react";
import "./Index.css";
//Icons
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import ComputerIcon from "@mui/icons-material/Computer";
import BuildOutlinedIcon from "@mui/icons-material/BuildOutlined";
import EmojiEventsOutlinedIcon from "@mui/icons-material/EmojiEventsOutlined";
import EngineeringOutlinedIcon from "@mui/icons-material/EngineeringOutlined";
//Router
import { Route, Routes } from "react-router-dom";
import { Link } from "react-router-dom";
import Skills from "../Skills/Skills";
import Projects from "../Projects/Projects";
import Content from "./Content";
import Contact from "./Contact";
import WelcomePage from "./Welcome";

//Navber--
function Index() {
	return (
		<>
			<nav className='navbar'>
				<div className='navbar-container'>
					<Link
						to='*'
						id='title'>
						<h1 id='title'>My Portfolio</h1>
					</Link>
					<Link
						to='/home'
						className='home'>
						<HomeOutlinedIcon />
						<p> Home</p>
					</Link>
					<Link
						to='/skills'
						className='skills'>
						<ComputerIcon />
						<p>Skills</p>
					</Link>
					<Link
						to='/projects'
						className='projects'>
						<BuildOutlinedIcon />
						<p>Projects</p>
					</Link>
				</div>
			</nav>

			<Routes>
				<Route
					path='*'
					exact
					Component={WelcomePage}></Route>
				<Route
					path='/contact'
					exact
					Component={Contact}
				/>
				<Route
					path='/home'
					exact
					Component={Content}
				/>
				<Route
					path='/skills'
					exact
					Component={Skills}
				/>
				<Route
					path='/projects'
					exact
					Component={Projects}
				/>
			</Routes>
		</>
	);
}
export default Index;
