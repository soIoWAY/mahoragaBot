const sendMessages = require('../../../handlers/sendMessages')

const utahimeSukunaMessages = [
	'https://media1.tenor.com/m/h3bcTdAmnXwAAAAC/gojo-satoru-gojo.gif',
	'Я тебе рятувати прийшов...Утахіме',
	'Розширення території... 🤞',
	'Розширення території... 🫸⛩️🫷',
]

const utahimeSukunaVs = async (ctx, username, targetUsername) => {
	const random = Math.round(Math.random())
	await sendMessages(ctx, utahimeSukunaMessages, 850)
	if (random) {
		await ctx.reply(
			`Нескінченна Порожнеча знищила мозок ворога, @${username} перемогла`
		)
	} else {
		await ctx.reply(
			`Всі розрізи всередині Гробниці Зла влучили в ворога, ${targetUsername} переміг ⛩️`
		)
	}
}

const sukunaUtahimeVs = async (ctx, username, targetUsername) => {
	const random = Math.round(Math.random())
	await sendMessages(ctx, utahimeSukunaMessages, 850)
	if (random) {
		await ctx.reply(
			`Всі розрізи всередині Гробниці Зла влучили в ворога, @${username} переміг ⛩️`
		)
	} else {
		await ctx.reply(
			`Нескінченна Порожнеча знищила мозок ворога, ${targetUsername} перемогла`
		)
	}
}

module.exports = { utahimeSukunaVs, sukunaUtahimeVs }
