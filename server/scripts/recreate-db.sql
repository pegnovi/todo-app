CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

DROP TABLE IF EXISTS todos;

CREATE TABLE todos(
	id uuid DEFAULT uuid_generate_v4 (),
	task text,
	PRIMARY KEY (id)
);