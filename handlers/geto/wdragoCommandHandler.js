async function wdragoCommandHandler(ctx) {
	const username = ctx.message.from.username
	const parts = ctx.message.text.split(' ')
	const targetUsername = parts[1]
	const usersWithRoles = ['@xzvetal', '@NightHanami', '@H4untt']
	if (username !== 'NightHanami' && username !== 'xzvetal') {
		await ctx.reply('Ти не Гето Сугуру!')
	} else {
		await ctx.reply('Маніпуляція прокляттями... 👾')
		await new Promise(resolve => setTimeout(resolve, 800))
		await ctx.reply('Королева проклять!')
		await new Promise(resolve => setTimeout(resolve, 800))
		await ctx.reply('Ріка!')
		await new Promise(resolve => setTimeout(resolve, 800))
		await ctx.replyWithAnimation(
			'https://media1.tenor.com/m/oJGVvk77WMoAAAAC/rika-vol0.gif'
		)
		if (usersWithRoles.includes(targetUsername)) {
			if (targetUsername === '@xzvetal') {
				await ctx.replyWithAnimation(
					'https://media1.tenor.com/m/_zGJ55uKUfwAAAAC/geto-suguru-suguru-geto.gif'
				)
			} else if (targetUsername == '@H4untt') {
				const isAdapt = Math.random()
				if (isAdapt > 0.5) {
					await ctx.reply(`${targetUsername} з Махорагою ухилились`)
				} else {
					await ctx.reply(`Ріка знесла половину хп ${targetUsername}`)
				}
			} else {
				await ctx.reply(`Ріка знищила ${targetUsername}`)
			}
		} else {
			await ctx.reply('Така слабка мавпа стала кормом для моїх проклять')
		}
	}
}

module.exports = wdragoCommandHandler
