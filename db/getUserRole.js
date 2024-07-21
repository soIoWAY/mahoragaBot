const client = require('./database')
async function getUserRole(username) {
	try {
		const query = `SELECT role FROM users WHERE username = $1`
		const { rows } = await client.query(query, [username])
		if (rows.length > 0) {
			return rows[0].role
		} else {
			console.error('Користувача не знайдено')
			return null
		}
	} catch (err) {
		console.error('Помилка при витягувані ролі ', err)
		return null
	}
}
module.exports = getUserRole
