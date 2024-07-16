async function rtsCommandHandler(ctx) {
	try {
		await ctx.reply('Розширення території... 🫸⛩️🫷')
		await new Promise(resolve => setTimeout(resolve, 800))
		await ctx.reply('Гробниця зла!')
		await new Promise(resolve => setTimeout(resolve, 800))
		await ctx.replyWithAnimation(
			'https://media1.tenor.com/m/WCHHpHEPq7MAAAAd/sukuna.gif'
		)
	} catch (error) {
		console.error(error)
	}
}

module.exports = rtsCommandHandler
