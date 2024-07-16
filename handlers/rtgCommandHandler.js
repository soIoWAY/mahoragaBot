async function rtgCommandHandler(ctx) {
	try {
		await ctx.reply('Розширення території... 🤞')
		await new Promise(resolve => setTimeout(resolve, 800))
		await ctx.reply('Нескінченна порожнеча!')
		await new Promise(resolve => setTimeout(resolve, 800))
		await ctx.replyWithAnimation(
			'https://media1.tenor.com/m/FdEyz5OrqLwAAAAC/jjk.gif'
		)
	} catch (err) {
		console.error('Помилка виконання команди rtg: ', err)
	}
}

module.exports = rtgCommandHandler
