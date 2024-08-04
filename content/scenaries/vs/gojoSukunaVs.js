const getUserRole = require('../../../db/getUserRole')
const sendMessages = require('../../../handlers/sendMessages')

const sukunaGojoMessages = [
	'Найсильніший маг сучасності проти найсильнішого мага в історії',
	'Розширення території... 🤞',
	'Розширення території... 🫸⛩️🫷',
	'https://media1.tenor.com/m/TJgMlZW8qN8AAAAC/jujutsu-kaisen-kaisen-jujutsu.gif',
]

const gojoSukunaVs = async (ctx, username, targetUsername) => {
	const random = Math.round(Math.random())
	const usernameRole = await getUserRole(username)
	await sendMessages(ctx, sukunaGojoMessages, 850)
	const winMessage =
		usernameRole === 'gojo'
			? 'Нескінченна Порожнеча знищила мозок ворога '
			: 'Всі розрізи всередині Гробниці Зла влучили в ворога '
	if (random) {
		await ctx.reply(winMessage + `@${username} переміг 🟣`)
	} else {
		await ctx.reply(winMessage + `${targetUsername} переміг ⛩️`)
	}
}

module.exports = { gojoSukunaVs }
