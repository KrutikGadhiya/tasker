import React from "react";
import img404 from "./404.svg";
import { Link } from "react-router-dom";

const NoRouteFound = () => {
	return (
		<div className="notfound">
			<img
				className="img404"
				width={500}
				height={500}
				src={img404}
				alt="not found"
			/>
			<h2 className="message">
				Uh oh! Looks like you got lost.
				<br /> Go back to the homepage if you dare!
			</h2>
			<Link to="/" className="goback">
				I DARE!
			</Link>
		</div>
	);
};

export default NoRouteFound;
