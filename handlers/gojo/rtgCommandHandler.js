async function rtgCommandHandler(ctx) {
	try {
		await ctx.reply('Розширення території... 🤞')
		await new Promise(resolve => setTimeout(resolve, 1000))
		await ctx.reply('Нескінченна порожнеча!')
		await new Promise(resolve => setTimeout(resolve, 1000))
		await ctx.replyWithPhoto(
			'https://i.pinimg.com/564x/1d/97/12/1d971250d4f2800ac3a5b7623ab74d23.jpg'
		)
	} catch (err) {
		console.error('Помилка виконання команди rtg: ', err)
	}
}

module.exports = rtgCommandHandler
