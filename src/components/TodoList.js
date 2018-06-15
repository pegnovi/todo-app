import React, { Component } from 'react';
import Todo from './Todo';
import TodoForm from './TodoForm';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as todoActions from '../actions/todoActions';


class TodoList extends Component {
	render() {
		const props = this.props;
		const todos = props.todos;
		return (
			<div>
				<h1>Todos</h1>
				<ol>
					{
						todos.map((todo, index) => {
							return <li key={`todo-${index}`}>
								<Todo
									{...todo}
									updateTodo={(nuTodo) => props.updateTodo(index, nuTodo)}
									deleteTodo={() => props.deleteTodo(index)}/>
							</li>
						})
					}
				</ol>

				<TodoForm onSubmit={(todo) => props.addTodo(todo)}/>

			</div>
		);
	}
}

function mapStateToProps(state){
	return {
		todos: state.todos
	}
}

function mapDispatchToProps(dispatch){
	return bindActionCreators(todoActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);