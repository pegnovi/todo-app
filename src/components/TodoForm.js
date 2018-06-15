import React, { Component } from 'react';

export default class TodoForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			task: ''
		};
	}
	render() {
		const props = this.props;
		const state = this.state;
		return (
			<div>
				<h2>Add a todo</h2>
				<form onSubmit={(e) => {
					e.preventDefault();
					props.onSubmit(state);
					this.setState({task: ''});
				}}>
					<div>
						<label>Task: </label><input onChange={(e) => this.setState({task: e.target.value})} value={state.task}></input>
					</div>
					<button type='submit'>Add Todo!</button>
				</form>
			</div>
		);
	}
}

