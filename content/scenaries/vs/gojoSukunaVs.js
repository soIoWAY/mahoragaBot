const sendMessages = require('../../../handlers/sendMessages')

const sukunaGojoMessages = [
	'Найсильніший маг сучасності проти найсильнішого мага в історії',
	'Розширення території... 🤞',
	'Розширення території... 🫸⛩️🫷',
	'https://media1.tenor.com/m/TJgMlZW8qN8AAAAC/jujutsu-kaisen-kaisen-jujutsu.gif',
]
const roleMessages = {
	gojo: 'Нескінченна порожнеча знищила мозок ворога, ',
	sukuna: 'Всі розрази всередині Гробниці зла влучили в ворога, ',
}

const battle = async (
	ctx,
	username,
	targetUsername,
	usernameRole,
	targetUsernameRole
) => {
	const random = Math.round(Math.random())
	await sendMessages(ctx, sukunaGojoMessages, 850)
	if (random) {
		await ctx.reply(`${roleMessages[usernameRole]} @${username} переміг`)
	} else {
		await ctx.reply(
			`${roleMessages[targetUsernameRole]} ${targetUsername} переміг`
		)
	}
}

module.exports = { battle }
