import React from 'react';

export function Todo(props) {
	const task = props.task;
	const subTasks = props.subTasks;
	return (
		<span>
			<h3 style={{display: 'inline'}}>{task}</h3>
			<ol>
				{subTasks.map((subTask, index) => <li key={`${task}-${index}`}>{subTask}</li>)}
			</ol>
		</span>
	);
}