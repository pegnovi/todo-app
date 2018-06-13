import React from 'react';
import { Todo } from './Todo';

function createTodoObj(task, subTasks = []) {
	return {
		task,
		subTasks
	};
}

const todos = [
	createTodoObj('go jogging'),
	createTodoObj('fight a bear', ['get boxing gloves', 'find bear'])
];

export function TodoList() {
	return (
		<div>
			<h2>Todos</h2>
			<ol>
				{todos.map((todo, index) => <li key={`todo-${index}`}><Todo {...todo}/></li>)}
			</ol>
		</div>
	);
}