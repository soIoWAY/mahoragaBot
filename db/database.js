const { Client } = require('pg')
const client = new Client({
	connectionString: process.env.DATABASE_URL,
	ssl: {
		rejectUnauthorized: false,
	},
})

client
	.connect()
	.then(() => console.log('Успішно підключено до бд'))
	.catch(err => console.error('Помилка підключення до бд: ', err))

const createTableQuery = `
  CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    user_id BIGINT,
    username TEXT,
    message_count INTEGER DEFAULT 0,
    ban_message_count INTEGER DEFAULT 0,
    role TEXT
  );
`

client
	.query(createTableQuery)
	.then(() => console.log('Таблиця users успішно створена'))
	.catch(err => console.error('Помилка при створені таблиці users', err))

module.exports = client
