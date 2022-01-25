import React, { useState, useEffect, useRef } from "react";
import moment from "moment";
import {
	BsCheckCircleFill,
	BsCheckCircle,
	BsThreeDotsVertical,
} from "react-icons/bs";

const Task = ({ title, isCompleted, time }) => {
	const [isOpen, setIsOpen] = useState(false);
	const ref = useRef(null);
	const isWeekDiff = moment(time).isBefore(
		moment(new Date().toLocaleString()).subtract(7, "d").format("L")
	);

	const handleOpen = () => setIsOpen(!isOpen);

	useEffect(() => {
		function handleClickOutside(event) {
			if (ref.current && !ref.current.contains(event.target)) {
				setIsOpen(false);
			}
		}

		document.addEventListener("mousedown", handleClickOutside);
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, [ref]);

	return (
		<div className="task">
			<div className="task-heaeder">
				<div className="title">
					{isCompleted ? (
						<BsCheckCircleFill
							className="task-icon"
							style={{ color: "#27AE60" }}
						/>
					) : (
						<BsCheckCircle className="task-icon" />
					)}{" "}
					{title}
				</div>
				<div className="menu-submenu">
					<button onClick={handleOpen} className="menu">
						<BsThreeDotsVertical />
					</button>
					{isOpen && (
						<div ref={ref} className="submenu">
							<button className="action">Edit</button>
							<button className="action task-done">Completed</button>
							<button className="action delete">Delete</button>
						</div>
					)}
				</div>
			</div>
			<div className="time">
				{isWeekDiff ? moment(time).format("L") : moment(time).format("dddd")}
			</div>
		</div>
	);
};

export default Task;
