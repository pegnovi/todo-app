import React from 'react';
import { TodoList } from './TodoList';
import { AddTodoForm } from './AddTodoForm';

export function MainPage() {
	return (
		<div>
			<TodoList/>

			<AddTodoForm/>
		</div>
	);
}