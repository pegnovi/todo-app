import { ADD_TODO, GET_TODOS, UPDATE_TODO, DELETE_TODO } from '../actions/todoActions';
import { cloneDeep } from 'lodash';

export default function(state = [], action) {

	const nextState = cloneDeep(state);
	switch(action.type){
		case ADD_TODO:
			nextState.push(action.payload);
			return nextState;
		case GET_TODOS:
			nextState = action.payload;
			return nextState;
		case UPDATE_TODO:
			console.log(action.payload);
			nextState[action.payload.index] = action.payload.todo;
			return nextState;
		case DELETE_TODO:
			nextState.splice(action.payload, 1);
			return nextState;
		default:
			break;
	}
	return state;
}