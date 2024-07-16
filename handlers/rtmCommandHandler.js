async function rtmCommandHandler(ctx) {
	try {
		await ctx.reply('Розширення території... 🤚🖐✋')
		await new Promise(resolve => setTimeout(resolve, 800))
		await ctx.reply('Самовтілення ідеалу!')
		await new Promise(resolve => setTimeout(resolve, 800))
		await ctx.replyWithAnimation(
			'https://media1.tenor.com/m/U1F_tvRzh2QAAAAd/mahito-domain-expansion.gif'
		)
	} catch (error) {
		console.error(error)
	}
}

module.exports = rtmCommandHandler
