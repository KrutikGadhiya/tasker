import React from "react";
import { Routes, Route } from "react-router-dom";
import {
	Navbar,
	Tasks,
	Home,
	Messages,
	Notifications,
	Analytics,
} from "./components";

import "./app.css";

const App = () => {
	return (
		<div className="App">
			<Navbar />
			<div className="route-component">
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/tasks" element={<Tasks />} />
					<Route path="/messages" element={<Messages />} />
					<Route path="/notifications" element={<Notifications />} />
					<Route path="/analytics" element={<Analytics />} />
				</Routes>
			</div>
		</div>
	);
};

export default App;
