import React from 'react';
import {applyMiddleware, createStore} from 'redux';
import { Provider } from 'react-redux';
import TodoList from './TodoList';
import TodoForm from './TodoForm';

import allReducers from '../reducers'; // index.js of directory

import * as todoActions from '../actions/todoActions';

const store = createStore(allReducers);

function createTodoObj(task, subTasks = []) {
	return {
		task,
		subTasks
	};
}
const todos = [
	createTodoObj('go jogging'),
	createTodoObj('fight a bear')
];
store.dispatch(todoActions.getTodos(todos));


export function MainPage() {
	return (
		<Provider store={store}>
			<div>
				<TodoList/>

				<TodoForm/>
			</div>
		</Provider>
	);
}