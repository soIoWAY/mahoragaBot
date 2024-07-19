const sendMessages = require('../sendMessages')
async function slashCommandHandler(ctx) {
	const username = ctx.message.from.username
	const parts = ctx.message.text.split(' ')
	const targetUsername = parts[1]
	const usersWithRoles = ['@xzvetal', '@NightHanami', '@H4untt']
	if (username !== 'H4untt' || username !== 'xzvetal') {
		await ctx.reply('Ти не Рьомен Сукуна!')
	} else {
		const messages = [
			'Scale of the dragon\nRecoil\nTwin meteors\nWorld Cutting slash',
			'https://media1.tenor.com/m/C_LTrUH8TKUAAAAd/sukuna-true-form-sukuna-vs-kashimo.gif',
		]
		await sendMessages(ctx, messages, 850)
		await new Promise(resolve => setTimeout(resolve, 1000))
		if (usersWithRoles.includes(targetUsername)) {
			if (targetUsername === '@xzvetal') {
				const isAdapt = Math.random()
				if (isAdapt > 0.7) {
					await ctx.reply('Сатору зміг ухилитись')
				} else {
					await ctx.reply(`@${username} влучив в ${targetUsername} розрізом`)
				}
			} else {
				await ctx.reply(`@${username} влучив в ${targetUsername} розрізом`)
			}
		} else {
			await ctx.reply(
				`Я хотів порізати тебе на три частини, але порізав на сім, бо ти слабак!`
			)
		}
	}
}

module.exports = slashCommandHandler
