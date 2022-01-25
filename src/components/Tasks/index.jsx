import React, { useState, useEffect } from "react";
import { AiOutlinePlus } from "react-icons/ai";

import { Header } from "../";
import Task from "./Task";
import NoData from "./NoData";
import { incompleteTasks, completedTasks } from "./tasks";

const Tasks = () => {
	const [taskList, setTaskList] = useState(incompleteTasks);
	const [completedTaskList, setCompletedTTaskList] = useState(completedTasks);
	const [cTask, setCTask] = useState([]);
	const [tasks, setTasks] = useState([]);
	const [searchTerm, setSearchTerm] = useState("");

	useEffect(() => {
		const filteredData = taskList?.filter((task) =>
			task.title.toLowerCase().includes(searchTerm.toLowerCase())
		);

		setTasks(filteredData);
	}, [taskList, searchTerm]);

	useEffect(() => {
		const filteredData = completedTaskList?.filter((task) =>
			task.title.toLowerCase().includes(searchTerm.toLowerCase())
		);

		setCTask(filteredData);
	}, [completedTaskList, searchTerm]);

	return (
		<>
			<Header
				withBtn
				withSearch
				heading="My Tasks"
				searchTerm={searchTerm}
				setSearchTerm={setSearchTerm}
			/>
			<div className="tasks">
				<div className="pending">
					<div className="header">
						<h4 className="heading">New Tasks</h4>
						<button className="add-task">
							<AiOutlinePlus /> Add
						</button>
					</div>
					<div className="task-list">
						{tasks.length ? (
							tasks.map((tsk, i) => (
								<Task
									isCompleted={tsk.isCompleted}
									title={tsk.title}
									time={tsk.time.toLocaleString()}
									key={i}
								/>
							))
						) : (
							<NoData />
						)}
					</div>
				</div>
				<div className="pending">
					<div className="header">
						<h4 className="heading">Completed</h4>
						<button className="add-task">
							<AiOutlinePlus /> Add
						</button>
					</div>
					<div className="task-list">
						{cTask.length ? (
							cTask.map((tsk, i) => (
								<Task
									isCompleted={tsk.isCompleted}
									title={tsk.title}
									time={tsk.time.toLocaleString()}
									key={i}
								/>
							))
						) : (
							<NoData />
						)}
					</div>
				</div>
			</div>
		</>
	);
};

export default Tasks;
