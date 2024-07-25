const sendMessages = require('../../../handlers/sendMessages')

const sukunaGojoMessages = [
	'Найсильніший маг сучасності проти найсильнішого мага в історії',
	'Розширення території... 🤞',
	'Розширення території... 🫸⛩️🫷',
]
async function delay(ms) {
	return new Promise(resolve => setTimeout(resolve, ms))
}
const gojoSukunaVs = async (ctx, username, targetUsername) => {
	const random = Math.round(Math.random())
	await sendMessages(ctx, sukunaGojoMessages, 850)
	await ctx.replyWithAnimation(
		'https://media1.tenor.com/m/TJgMlZW8qN8AAAAC/jujutsu-kaisen-kaisen-jujutsu.gif'
	)
	await delay(850)
	if (random) {
		await ctx.reply(
			`Нескінченна Порожнеча знищила мозок ворога, @${username} переміг`
		)
	} else {
		await ctx.reply(
			`Всі розрізи всередині Гробниці Зла влучили в ворога, ${targetUsername} переміг`
		)
	}
}

const sukunaGojoVs = async (ctx, username, targetUsername) => {
	const random = Math.round(Math.random())
	await sendMessages(ctx, sukunaGojoMessages, 850)
	await ctx.replyWithAnimation(
		'https://media1.tenor.com/m/TJgMlZW8qN8AAAAC/jujutsu-kaisen-kaisen-jujutsu.gif'
	)
	await delay(850)
	if (random) {
		await ctx.reply(
			`Всі розрізи всередині Гробниці Зла влучили в ворога, @${username} переміг`
		)
	} else {
		await ctx.reply(
			`Нескінченна Порожнеча знищила мозок ворога, ${targetUsername} переміг`
		)
	}
}

module.exports = { gojoSukunaVs, sukunaGojoVs }
