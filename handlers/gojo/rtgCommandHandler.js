async function rtgCommandHandler(ctx) {
	try {
		await ctx.reply('Розширення території... 🤞')
	} catch (err) {
		console.error('Помилка виконання команди rtg: ', err)
	}
}

module.exports = rtgCommandHandler
