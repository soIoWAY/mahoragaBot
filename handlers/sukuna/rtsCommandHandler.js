async function rtsCommandHandler(ctx) {
	try {
		await ctx.reply('Розширення території... 🫸⛩️🫷')
		await new Promise(resolve => setTimeout(resolve, 800))
		await ctx.reply('Гробниця зла!')
		await new Promise(resolve => setTimeout(resolve, 800))
		await ctx.replyWithPhoto(
			'https://i.pinimg.com/564x/63/67/de/6367de152d753a3187388a2d451a827c.jpg'
		)
	} catch (error) {
		console.error(error)
	}
}

module.exports = rtsCommandHandler
