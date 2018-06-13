import React, { Component } from 'react';
import 'whatwg-fetch';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as todoActions from '../actions/todoActions';

class TodoForm extends Component {
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
					props.addTodo(state);
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

function mapDispatchToProps(dispatch){
	return bindActionCreators(todoActions, dispatch);
}

export default connect(null, mapDispatchToProps)(TodoForm);
