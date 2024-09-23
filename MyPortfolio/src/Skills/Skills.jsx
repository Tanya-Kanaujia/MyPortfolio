/** @format */

import React from "react";
import "../App.css";
import c from "../assets/C.jpg";
import cpp from "../assets/cpp.jpg";
import mongodb from "../assets/mongo.jpg";
import sql from "../assets/sql.jpg";
import JS from "../assets/JS.jpg";
import css from "../assets/css.jpg";
import html from "../assets/html.jpg";
import react from "../assets/react.jpg";
import bootstrap from "../assets/Bootstrap.jpg";
import tailwind from "../assets/tailwind.jpg";
import node from "../assets/node.jpg";
import express from "../assets/express.jpg";
import java from "../assets/java.jpg";

import "./Skills.css";

function Skills() {
	return (
		<>
			<h2>Fronted</h2>
			<div className='card'>
				<img
					src={JS}
					alt='img'
					className='cardImg'
				/>
				<img
					src={css}
					alt='img'
					className='cardImg'
				/>
				<img
					src={html}
					alt='img'
					className='cardImg'
				/>
				<img
					src={react}
					alt='img'
					className='cardImg'
				/>
				<img
					src={bootstrap}
					alt='img'
					className='cardImg'
				/>
				<img
					src={tailwind}
					alt='img'
					className='cardImg'
				/>
			</div>
			<hr />
			<h2>Backend</h2>
			<div>
				<img
					src={node}
					alt='img'
					className='cardImg'
				/>
				<img
					src={express}
					alt='img'
					className='cardImg'
				/>
			</div>
			<hr />
			<h2>DataBases</h2>
			<div>
				<img
					src={mongodb}
					alt='img'
					className='cardImg'
				/>
				<img
					src={sql}
					alt='img'
					className='cardImg'
				/>
			</div>
			<hr />
			<h2>Others</h2>
			<div>
				<img
					src={c}
					alt='img'
					className='cardImg'
				/>
				<img
					src={cpp}
					alt='img'
					className='cardImg'
				/>
			</div>
			<hr />
			<br />
			<br />
			<br />
			<br />
		</>
	);
}
export default Skills;
