const sendMessages = require('../../../handlers/sendMessages')

const getoSukunaMessages = [
	'Розширення території... 🫸⛩️🫷',
	'Маніпуляція проклятими духами... ☝️\nНайвище мистецтво...\nУзумакі 🌀',
]

async function delay(ms) {
	return new Promise(resolve => setTimeout(resolve, ms))
}

const getoSukunaVs = async (ctx, username, targetUsername) => {
	const random = Math.round(Math.random())
	await sendMessages(ctx, getoSukunaMessages, 850)
	await delay(850)
	await ctx.replyWithAnimation(
		'https://media1.tenor.com/m/61GhJxxu1-oAAAAd/kenjaku-geto.gif'
	)
	await delay(850)
	if (random) {
		await ctx.reply(`Вихор знищив Гробницю Зла, переміг @${username} 🌀`)
	} else {
		await ctx.reply(
			`Вихор був знищений Гробницею Зла, переміг ${targetUsername} ⛩️`
		)
	}
}

const sukunaGetoVs = async (ctx, username, targetUsername) => {
	const random = Math.round(Math.random())
	await sendMessages(ctx, getoSukunaMessages, 850)
	await delay(850)
	await ctx.replyWithAnimation(
		'https://media1.tenor.com/m/hp1qKBQclPMAAAAC/jujutsu-kaisen-shibuya-arc-sukuna-domain-expansion.gif'
	)
	await delay(850)
	if (random) {
		await ctx.reply(`Вихор знищив Гробницю Зла, переміг ${targetUsername} 🌀`)
	} else {
		await ctx.reply(`Вихор був знищений Гробницею Зла, переміг @${username} ⛩️`)
	}
}

module.exports = { getoSukunaVs, sukunaGetoVs }
