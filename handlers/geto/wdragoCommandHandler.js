async function wdragoCommandHandler(ctx) {
	const username = ctx.message.from.username
	if (username !== 'NightHanami' && username !== 'xzvetal') {
		await ctx.reply('Ти не Гето Сугуру!')
	} else {
		try {
			await ctx.reply('Маніпуляція прокляттями... 👾')
			await new Promise(resolve => setTimeout(resolve, 800))
			await ctx.reply('Райдужний дракон!')
			await new Promise(resolve => setTimeout(resolve, 800))
			await ctx.replyWithAnimation(
				'https://media1.tenor.com/m/Xjz7N5T75aIAAAAd/jujutsu-kaisen-season-2.gif'
			)
		} catch (error) {
			console.error(error)
		}
	}
}

module.exports = wdragoCommandHandler
