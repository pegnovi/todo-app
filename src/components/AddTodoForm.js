import React from 'react';
import 'whatwg-fetch';

export function AddTodoForm() {
	return (
		<div>
			<p>Add a todo</p>
			<form onSubmit={(e) => { e.preventDefault(); }}>
				<div>
					<label>Task: </label><input name={'task'}></input>
				</div>
				<button type='submit'>Add Todo!</button>
			</form>
		</div>
	);
}