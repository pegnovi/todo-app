export const ADD_TODO = 'ADD_TODO';
export const GET_TODOS = 'GET_TODOS';
export const UPDATE_TODO = 'UPDATE_TODO';
export const DELETE_TODO = 'DELETE_TODO';

export const addTodo = (todo) => {
	return {
		type: ADD_TODO,
		payload: todo
	};
}

export const getTodos = () => {
	return {
		type: GET_TODOS,
		payload: [] // temp (will be async call)
	};
}

export const updateTodo = (index, todo) => {
	return {
		type: UPDATE_TODO,
		payload: {index, todo}
	};
}

export const deleteTodo = (index) => {
	return {
		type: DELETE_TODO,
		payload: index
	};
}