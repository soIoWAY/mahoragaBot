async function wormCommandHanlder(ctx) {
	const username = ctx.message.from.username
	if (username !== 'NightHanami') {
		await ctx.reply('Ти не Гето Сугуру')
	} else {
		await ctx.reply('Маніпуляція прокляттями... 👾')
		await new Promise(resolve => setTimeout(resolve, 800))
		await ctx.reply('Прокляття хробака!')
		await new Promise(resolve => setTimeout(resolve, 800))
		await ctx.replyWithAnimation(
			'https://media1.tenor.com/m/omcB5GXfvY8AAAAd/jujutsu-kaisen-jujutsu-kaisen-season-2.gif'
		)
	}
}
