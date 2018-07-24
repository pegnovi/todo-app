export const ADD_TODO_ASYNC = 'ADD_TODO_ASYNC';
export const ADD_TODO = 'ADD_TODO';
export const GET_TODOS_ASYNC = 'GET_TODOS_ASYNC';
export const SET_TODOS = 'SET_TODOS';
export const UPDATE_TODO_ASYNC = 'UPDATE_TODO_ASYNC';
export const UPDATE_TODO = 'UPDATE_TODO';
export const DELETE_TODO_ASYNC = 'DELETE_TODO_ASYNC';
export const DELETE_TODO = 'DELETE_TODO';


export const addTodoAsync = (todo) => {
	return {
		type: ADD_TODO_ASYNC,
		payload: todo
	};
}

export const addTodo = (todo) => {
	return {
		type: ADD_TODO,
		payload: todo
	};
}

export const getTodosAsync = (todos) => {
	return {
		type: GET_TODOS_ASYNC,
		payload: todos
	};
}

export const setTodos = (todos) => {
	return {
		type: SET_TODOS,
		payload: todos
	};
}

export const updateTodoAsync = (index, todo) => {
	return {
		type: UPDATE_TODO_ASYNC,
		payload: {index, todo}
	};
}

export const updateTodo = (index, todo) => {
	return {
		type: UPDATE_TODO,
		payload: {index, todo}
	};
}

export const deleteTodoAsync = (index, id) => {
	return {
		type: DELETE_TODO_ASYNC,
		payload: {index, id}
	};
}

export const deleteTodo = (index) => {
	return {
		type: DELETE_TODO,
		payload: index
	};
}