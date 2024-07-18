async function ceyCommandHandler(ctx) {
	const username = ctx.message.from.username
	if (username !== 'NightHanami') {
		await ctx.reply('Ти не Гето Сугуру!')
	} else {
		await ctx.reply('Маніпуляція прокляттями... 👾')
		await new Promise(resolve => setTimeout(resolve, 800))
		await ctx.reply('Прокляте око!')
		await new Promise(resolve => setTimeout(resolve, 800))
		await ctx.replyWithAnimation(
			'https://media1.tenor.com/m/uc1dlkYfKZ4AAAAC/geto-geto-suguru.gif'
		)
	}
}

module.exports = ceyCommandHandler
