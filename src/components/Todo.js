import React, { Component } from 'react';

export default class Todo extends Component {
	constructor(props) {
		super(props);

		// initialize app state
		this.state = {
			editMode: false,
			task: props.task
		};

		//https://reactjs.org/docs/handling-events.html
		this.setTask = this.setTask.bind(this);
		this.setEditMode = this.setEditMode.bind(this);
		this.setReadOnlyMode = this.setReadOnlyMode.bind(this);
		this.onEditClick = this.onEditClick.bind(this);
		this.onTaskChange = this.onTaskChange.bind(this);
		this.onUpdateClick = this.onUpdateClick.bind(this);
		this.onCancelClick = this.onCancelClick.bind(this);
		this.onDeleteClick = this.onDeleteClick.bind(this);

	}
	setTask(task) {
		this.setState({task: task});
	}
	setEditMode() {
		this.setState({editMode: true});
	}
	setReadOnlyMode() {
		this.setState({editMode: false});
	}
	onEditClick() {
		this.setEditMode();
	}
	onTaskChange(e) {
		this.setTask(e.target.value);
	}
	onUpdateClick() {
		this.setReadOnlyMode();
		this.props.updateTodo({task: this.state.task});
	}
	onCancelClick() {
		this.setTask(this.props.task);
		this.setReadOnlyMode();
	}
	onDeleteClick() {
		this.props.deleteTodo();
	}
	render() {
		const props = this.props;
		const state = this.state;
		return (<span>
			{state.editMode ?
				<span>
					<input onChange={this.onTaskChange} value={state.task}></input>
					<button onClick={this.onUpdateClick}>Update</button>
					<button onClick={this.onCancelClick}>Cancel</button>
				</span>
				:
				<span>
					<h3 style={{display: 'inline'}}>{props.task}</h3>
					<button onClick={this.onEditClick}>Edit</button>
					<button onClick={this.onDeleteClick}>Delete</button>
				</span>
			}
		</span>);
	}
}
