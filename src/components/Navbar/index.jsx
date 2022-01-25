import React from "react";
import { NavLink } from "react-router-dom";
import { RiHomeLine } from "react-icons/ri";
import { FaRegCheckCircle } from "react-icons/fa";
import { FiMessageSquare } from "react-icons/fi";
import { IoAnalytics, IoNotificationsOutline } from "react-icons/io5";

const Navbar = () => {
	const activeNav = {
		backgroundColor: "#1e2329",
		borderRight: "2px solid #fff",
	};

	return (
		<nav className="navbar">
			<div className="logo">
				<p>Tasker</p>
			</div>
			<div className="nav-links">
				<NavLink
					className="link"
					style={({ isActive }) => (isActive ? activeNav : undefined)}
					to={"/"}>
					<RiHomeLine className="link-icon" /> Home
				</NavLink>
				<NavLink
					className="link"
					style={({ isActive }) => (isActive ? activeNav : undefined)}
					to={"/tasks"}>
					<FaRegCheckCircle className="link-icon" />
					My Tasks
				</NavLink>
				<NavLink
					className="link"
					style={({ isActive }) => (isActive ? activeNav : undefined)}
					to={"/messages"}>
					<FiMessageSquare className="link-icon" />
					Messages
				</NavLink>
				<NavLink
					className="link"
					style={({ isActive }) => (isActive ? activeNav : undefined)}
					to={"/notifications"}>
					<IoNotificationsOutline className="link-icon" />
					Notifications
				</NavLink>
				<NavLink
					className="link"
					style={({ isActive }) => (isActive ? activeNav : undefined)}
					to={"/analytics"}>
					<IoAnalytics className="link-icon" />
					Analytics
				</NavLink>
			</div>
			<div className="user-sec">
				<img
					src="https://avatars.dicebear.com/api/avataaars/krutik%20gadhiya.svg"
					alt="krutik gadhiya"
					className="avatar"
				/>
				<div>
					<p className="username">Krutik Gadhiya</p>
					<p className="user-desc">Web Developer</p>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
