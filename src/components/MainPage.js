import React from 'react';
import {applyMiddleware, createStore} from 'redux';
import { Provider } from 'react-redux';
import TodoList from './TodoList';
import TodoForm from './TodoForm';

import allReducers from '../reducers'; // index.js of directory

const store = createStore(allReducers);

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