import React from 'react';
import {applyMiddleware, createStore} from 'redux';
import createSagaMiddleware from 'redux-saga';
import { Provider } from 'react-redux';
import TodoList from './TodoList';

import allReducers from '../reducers'; // index.js of directory
import * as todoActions from '../actions/todoActions';

import rootSaga from '../sagas'
import todoRootSaga from '../sagas/todoSagas';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
	allReducers,
	applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(rootSaga);
sagaMiddleware.run(todoRootSaga);


store.dispatch(todoActions.getTodosAsync());


export function MainPage() {
	return (
		<Provider store={store}>
			<div>
				<TodoList/>
			</div>
		</Provider>
	);
}