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
		await ctx.reply('Райдужний дракон!')
		await new Promise(resolve => setTimeout(resolve, 800))
		await ctx.replyWithAnimation(
			'https://media1.tenor.com/m/Xjz7N5T75aIAAAAd/jujutsu-kaisen-season-2.gif'
		)
		if (usersWithRoles.includes(targetUsername)) {
			if (targetUsername === '@xzvetal') {
				await ctx.replyWithAnimation(
					'https://media1.tenor.com/m/tYFlGuVQpVcAAAAd/vfan-vfant.gif'
				)
			} else if (targetUsername == '@H4untt') {
				const isAdapt = Math.random()
				if (isAdapt > 0.5) {
					await ctx.reply(`${targetUsername} знищив дракона розрізом`)
				} else {
					await ctx.reply(`Дракон зніс половину хп ${targetUsername}`)
				}
			} else {
				await ctx.reply(`Райдужний дракон вбив ${targetUsername}`)
			}
		} else {
			await ctx.reply('Така слабка мавпа стала кормом для моїх проклять')
		}
	}
}

module.exports = wdragoCommandHandler
