import React, { Component } from 'react';
import Todo from './Todo';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as todoActions from '../actions/todoActions';


// function createTodoObj(task, subTasks = []) {
// 	return {
// 		task,
// 		subTasks
// 	};
// }

// const todos = [
// 	createTodoObj('go jogging'),
// 	createTodoObj('fight a bear', ['get boxing gloves', 'find bear'])
// ];

class TodoList extends Component {
	render() {
		var todos = this.props.todos;
		return (
			<div>
				<h1>Todos</h1>
				<ol>
					{
						todos.map((todo, index) => {
							return <li key={`todo-${index}`}>
								<Todo index={index} readOnlyMode={true} {...todo}/>
							</li>
						})
					}
				</ol>
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