async function rtsCommandHandler(ctx) {
	try {
		await ctx.reply('Розширення території... 🫸⛩️🫷')
	} catch (error) {
		console.error(error)
	}
}

module.exports = rtsCommandHandler
