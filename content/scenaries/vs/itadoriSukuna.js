const sendMessages = require('../../../handlers/sendMessages')

const sukunaItadoriMessages = [
	'Розширення території.. 🤘',
	'Розширення території.. 🫸⛩️🫷',
]

const itadoriSukunaVs = async (ctx, username, targetUsername) => {
	const random = Math.round(Math.random())
	await sendMessages(ctx, sukunaItadoriMessages, 850)
	await delay(850)
	await ctx.replyWithAnimation('https://i.imgur.com/DOn1KNC.gif')
	if (random) {
		await ctx.reply(
			`Сукуна, на що дивишся? Пішли зі мною.\n@${username} переміг 🔴`
		)
	} else {
		await ctx.reply(
			`Непогана спроба паршивцю, а тепер помри.\n${targetUsername} переміг ⛩️`
		)
	}
}

const sukunaItadoriVs = async (ctx, username, targetUsername) => {
	const random = Math.round(Math.random())
	await sendMessages(ctx, sukunaItadoriMessages, 850)
	await delay(850)
	await ctx.replyWithAnimation(
		'https://media1.tenor.com/m/6FtXg-hF9FoAAAAC/jjk-jjk-s2.gif'
	)
	if (random) {
		await ctx.reply(
			`Сукуна, на що дивишся? Пішли зі мною.\n${targetUsername} переміг 🔴`
		)
	} else {
		await ctx.reply(
			`Непогана спроба паршивцю, а тепер помри.\n@${username} переміг ⛩️`
		)
	}
}

module.exports = { itadoriSukunaVs, sukunaItadoriVs }
