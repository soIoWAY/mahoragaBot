const client = require('./database')

async function topUsersByMessage() {
	try {
		const query = `
      SELECT username, message_count, ban_message_count 
      FROM users 
      ORDER BY (message_count + ban_message_count) DESC 
      LIMIT 10;
    `
		const { rows } = await client.query(query)

		return rows
	} catch (err) {
		console.error('Помилка зчитування даних з бд:', err)
	}
}

module.exports = topUsersByMessage
