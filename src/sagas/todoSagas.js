import { delay } from 'redux-saga';
import { put, takeEvery, all } from 'redux-saga/effects';
import axios from 'axios';
import uuidv4 from 'uuid/v4';


import {
	ADD_TODO_ASYNC, ADD_TODO,
	GET_TODOS_ASYNC, SET_TODOS,
	UPDATE_TODO_ASYNC, UPDATE_TODO,
	DELETE_TODO_ASYNC, DELETE_TODO
} from '../actions/todoActions';


//https://davidwalsh.name/es6-generators-dive

// ADD
function addTodoToServerP(todo) {
	return axios.post('/api/todo', todo)
	.then(function() {
		console.log(arguments);
		return null;
	})
	.catch(function(err) {
		throw err;
	});
}

function* addTodoAsync(actionObj) {
	console.log(actionObj);
	try {
		yield delay(2000);
		//yield addTodoToServerP(actionObj.payload);
		yield put({type: ADD_TODO, payload: actionObj.payload});
	}
	catch (err) {
		throw err;
	}
}

// Our watcher Saga: spawn a new addTodo task on each ADD_TODO
function* watchAddTodoAsync() {
	yield takeEvery(ADD_TODO_ASYNC, addTodoAsync);
}


// GET
function getTodosFromServerP() {
	console.log('GETTING TODOS FROM SERVER');
	return axios.get('/api/todos')
	.then(function(todos) {
		console.log(arguments);
		return todos;
	})
	.catch(function(err) {
		throw err;
	});
}

function getSampleTodos() {
	console.log('GETTING SAMPLE TODOS');
	function createTodoObj(task, subTasks = []) {
		return {
			id: uuidv4(),
			task,
			subTasks
		};
	}
	const todos = [
		createTodoObj('go jogging'),
		createTodoObj('fight a bear')
	];
	return todos;
}

function* getTodosFromServerAsync() {
	try {
		yield delay(2000);
		const todos = getSampleTodos();
		//const todos = yield getTodosFromServerP();
		yield put({type: SET_TODOS, payload: todos});
	}
	catch (err) {
		throw err;
	}
}

function* watchGetTodosFromServer() {
	yield takeEvery(GET_TODOS_ASYNC, getTodosFromServerAsync);
}


// UPDATE
function updateTodosOnServerP(todo) {
	console.log('UPDATING TODOS TO SERVER');
	return axios.put('/api/todo', todo)
	.then(function() {
		console.log(arguments);
		return null;
	})
	.catch(function(err) {
		throw err;
	});
}

function* updateTodoOnServerAsync(actionObj) {
	try {
		yield delay(2000);
		//yield updateTodosOnServerP(actionObj.payload.todo);
		yield put({type: UPDATE_TODO, payload: actionObj.payload});
	}
	catch (err) {
		throw err;
	}
}

function* watchUpdateTodoOnServer() {
	yield takeEvery(UPDATE_TODO_ASYNC, updateTodoOnServerAsync);
}


// DELETE
function deleteTodoOnServerP(id) {
	console.log('DELETING TODO ON SERVER');
	return axios.delete('/api/todo', {id})
	.then(function() {
		console.log(arguments);
		return null;
	})
	.catch(function(err) {
		throw err;
	});
}

function* deleteTodoOnServerAsync(actionObj) {
	console.log(actionObj);
	try {
		yield delay(2000);
		//yield deleteTodoOnServerP(actionObj.payload.id);
		yield put({type: DELETE_TODO, payload: actionObj.payload.index});
	}
	catch (err) {
		throw err;
	}
}

function* watchDeleteTodoOnServer() {
	yield takeEvery(DELETE_TODO_ASYNC, deleteTodoOnServerAsync);
}

// notice how we now only export the rootSaga
// single entry point to start all Sagas at once
export default function* todoRootSaga() {
	yield all([
		watchAddTodoAsync(),
		watchGetTodosFromServer(),
		watchUpdateTodoOnServer(),
		watchDeleteTodoOnServer()
	]);
}