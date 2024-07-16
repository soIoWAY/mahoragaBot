async function rtgCommandHandler(ctx) {
	try {
		await ctx.reply('Розширення території... 🤞')
		setTimeout(async () => {
			await ctx.reply('Нескінченна порожнеча!')
			setTimeout(async () => {
				await ctx.replyWithAnimation(
					'https://media1.tenor.com/m/FdEyz5OrqLwAAAAC/jjk.gif'
				)
			}, 750)
		}, 750)
	} catch (err) {
		console.error('Помилка виконання команди rtg: ', err)
	}
}

module.exports = rtgCommandHandler
