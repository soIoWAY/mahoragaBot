const client = require('./database')

async function updateBanMessageCount(user_id, username) {
	try {
		const query = 'SELECT * FROM user_messages WHERE user_id = $1'
		const { rows } = await client.query(query, [user_id])

		if (rows.length === 0) {
			const insertQuery =
				'INSERT INTO user_messages (user_id, username, ban_message_count) VALUES ($1, $2, 1)'
			await client.query(insertQuery, [user_id, username])
		} else {
			const updateQuery =
				'UPDATE user_messages SET ban_message_count = ban_message_count + 1 WHERE user_id = $1'
			await client.query(updateQuery, [user_id])
		}
	} catch (err) {
		console.error('Помилка зміни кількості повідомлень в бд: ', err)
	}
}

module.exports = updateBanMessageCount
