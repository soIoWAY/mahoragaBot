const createTableQuery = `
  CREATE TABLE IF NOT EXISTS user_messages (
    id SERIAL PRIMARY KEY,
    user_id INTEGER,
    username TEXT,
    message_count INTEGER DEFAULT 0,
    ban_message_count INTEGER DEFAULT 0
  );
`
const selectUserMessagesQuery = 'SELECT * FROM user_messages WHERE user_id = $1'

const insertUserMessageQuery =
	'INSERT INTO user_messages (user_id, username, ban_message_count) VALUES ($1, $2, 1)'

const updateUserBanMessageCountQuery =
	'UPDATE user_messages SET ban_message_count = ban_message_count + 1 WHERE user_id = $1'

module.exports = {
	createTableQuery,
	selectUserMessagesQuery,
	insertUserMessageQuery,
	updateUserBanMessageCountQuery,
}
