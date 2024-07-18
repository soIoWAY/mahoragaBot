const sendMessages = require('../sendMessages')
async function purpleCommandHandler(ctx) {
	const username = ctx.message.from.username
	const parts = ctx.message.text.split(' ')
	const targetUsername = parts[1]
	const usersWithRoles = ['@xzvetal', '@NightHanami', '@H4untt']
	if (username !== 'xzvetal') {
		await ctx.reply('Ти не Годжо Сатору!')
	} else {
		const messages = [
			'Phase twilight\nEyes of wisdom\nNine ropes',
			'Crow and declaration\nBetween front and back\nHollow... Purple',
			'https://media1.tenor.com/m/DSyo0NKX8gMAAAAC/gojo-satoru.gif',
		]
		await sendMessages(ctx, messages, 850)
		await new Promise(resolve => setTimeout(resolve, 1000))
		if (usersWithRoles.includes(targetUsername)) {
			if (targetUsername === '@H4untt') {
				const isMahoraAdapt = Math.random()
				if (isMahoraAdapt > 0.6) {
					await ctx.reply('Махорага зміг адаптуватись')
				} else {
					await ctx.reply(`@${username} влучив в ${targetUsername} фіолетовим`)
				}
			} else {
				await ctx.reply(`@${username} влучив в ${targetUsername} фіолетовим`)
			}
		} else {
			await ctx.reply(`Фіолетовий розніс на атоми такого слабака`)
		}
	}
}

module.exports = purpleCommandHandler
