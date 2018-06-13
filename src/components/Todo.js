import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as todoActions from '../actions/todoActions';

class Todo extends Component {
	constructor(props) {
		super(props);

		// initialize app state
		this.state = {
			readOnlyMode: props.readOnlyMode,
			task: props.task
		};
	}
	render() {
		const props = this.props;
		const state = this.state;
		const task = props.task;
		const subTasks = props.subTasks;
		const index = props.index;
		return (<span>
			{state.readOnlyMode ? 
				<span>
					<h3 style={{display: 'inline'}}>{task}</h3>
					<input onChange={(e) => this.setState({task: e.target.value})} value={state.task}></input>
					<button onClick={() => props.updateTodo(index, {task: state.task})}>Update</button>
					<button onClick={() => props.deleteTodo(index)}>Delete</button>
				{/*
					<ol>
						{subTasks.map((subTask, index) => <li key={`${task}-${index}`}>{subTask}</li>)}
					</ol>
				*/}
				</span>
				:
				<span>
					'editable form'
				</span>
			}
		</span>);
	}
}

function mapDispatchToProps(dispatch){
	return bindActionCreators(todoActions, dispatch);
}

export default connect(null, mapDispatchToProps)(Todo);