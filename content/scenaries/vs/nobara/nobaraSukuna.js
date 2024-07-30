const sendMessages = require('../../../../handlers/sendMessages')

const getoSukunaMessages = [
	'Розширення території... 🫸⛩️🫷',
	'Маніпуляція проклятою енергією...\nШпилька 🔨',
]

async function delay(ms) {
	return new Promise(resolve => setTimeout(resolve, ms))
}

const nobaraSukuna = async (ctx, username, targetUsername) => {
	const random = Math.round(Math.random())
	await sendMessages(ctx, getoSukunaMessages, 850)
	await delay(850)
	await ctx.replyWithAnimation(
		'https://media1.tenor.com/m/QCQi2H8amFsAAAAd/nobara-kugisaki.gif'
	)
	await delay(850)
	if (random <= 0.35) {
		await ctx.reply(
			`Вибух проклятої енергії знищив Гробницю Зла, перемогла @${username} 🔨`
		)
	} else {
		await ctx.reply(
			`Всі розрізи влучили в ворога, переміг ${targetUsername} ⛩️`
		)
	}
}

const sukunaNobara = async (ctx, username, targetUsername) => {
	const random = Math.round(Math.random())
	await sendMessages(ctx, getoSukunaMessages, 850)
	await delay(850)
	await ctx.replyWithAnimation(
		'https://media1.tenor.com/m/hp1qKBQclPMAAAAC/jujutsu-kaisen-shibuya-arc-sukuna-domain-expansion.gif'
	)
	await delay(850)
	if (random <= 0.35) {
		await ctx.reply(
			`Вибух проклятої енергії знищив Гробницю Зла, перемогла ${targetUsername} 🔨`
		)
	} else {
		await ctx.reply(`Всі розрізи влучили в ворога, переміг @${username} ⛩️`)
	}
}

module.exports = { nobaraSukuna, sukunaNobara }
