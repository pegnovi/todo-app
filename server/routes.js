const pgp = require('pg-promise')({});
const pgpConfig = {
	user: process.env.PG_USER,
	password: process.env.PG_PASSWORD,
	database: process.env.PG_DATABASE,
	host: process.env.PG_HOST,
	poolSize: 10, // max number of clients in pool
	idleTimeoutMillis: 1000,
	port: process.env.PG_PORT
};
const db = pgp(pgpConfig);

module.exports = function(app) {

	app.post('/api/todo', (req, res) => {
		db.one('INSERT INTO todos (task) VALUES (${task}) RETURNING id',
			{
				task: req.body.task
			}
		)
		.then(todoId => {
			console.log(todoId);
			res.status(201).json(todoId);
		})
		.catch(error => {
			console.log(error);
			res.status(400).send(error);
		});
	});

	//https://stackoverflow.com/questions/43208713/express-get-route-will-not-work-with-parameters
	//https://stackoverflow.com/questions/30967822/when-do-i-use-path-params-vs-query-params-in-a-restful-api
	app.get('/api/todo/:id', (req, res) => {
		db.one('SELECT id, task FROM todos WHERE id=${id}',
			{
				id: req.params.id
			}
		)
		.then(todo => {
			res.status(200).json(todo);
		})
		.catch(error => {
			console.log(error);
			res.status(400).send(error);
		});
	});

	app.get('/api/todos', (req, res) => {
		db.any('SELECT id, task FROM todos')
		.then(todos => {
			res.status(200).json(todos);
		})
		.catch(error => {
			console.log(error);
			res.status(400).send(error);
		});
	});

	app.delete('/api/todo', (req, res) => {
		db.none('DELETE FROM todos WHERE id=${id}',
			{
				id: req.body.id
			}
		)
		.then(() => {
			res.status(200).send('OK');
		})
		.catch(error => {
			console.log(error);
			res.status(400).send(error);
		});
	});

	app.put('/api/todo', (req, res) => {
		db.none('UPDATE todos SET task=${task} WHERE id=${id}',
			{
				task: req.body.task,
				id: req.body.id
			}
		)
		.then(() => {
			res.status(200).send('OK');
		})
		.catch(error => {
			console.log(error);
			res.status(400).send(error);
		});
	});

};