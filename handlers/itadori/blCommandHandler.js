const getUserRole = require('../../db/getUserRole')

async function blCommandHandler(ctx) {
	const username = ctx.message.from.username
	const parts = ctx.message.text.split(' ')
	const targetUsername = parts[1]
	const sanitizedTargetUsername = targetUsername.replace(/^@/, '')
	const usernameRole = await getUserRole(username)
	const targetUsernameRole = await getUserRole(sanitizedTargetUsername)

	async function delay(ms) {
		return new Promise(resolve => setTimeout(resolve, ms))
	}

	if (usernameRole !== 'itadori') {
		await ctx.reply('Ти не Ітадорі Юджі!')
	} else {
		await ctx.reply('Чорна блискавка! ⚫️⚡️')
		await delay(850)
		await ctx.replyWithAnimation(
			'https://media1.tenor.com/m/Opyt-NsK7-IAAAAC/itadori-itadori-yuji.gif'
		)
		await delay(850)
		if (targetUsernameRole) {
			const isTarget = Math.random()
			if (targetUsernameRole === 'sukuna') {
				if (isTarget <= 0.6) {
					await ctx.reply('Махорага зміг адаптуватись')
				} else {
					await ctx.reply(
						`@${username} влучив в ${targetUsername} чорною блискавкою`
					)
				}
			} else if (targetUsernameRole === 'gojo') {
				await ctx.replyWithAnimation(
					'https://media1.tenor.com/m/wpRUcTgq0FwAAAAC/cry.gif'
				)
			} else if (targetUsernameRole === 'geto') {
				await ctx.reply('Заціпся)')
				await delay(850)
				await ctx.replyWithAnimation(
					'https://media1.tenor.com/m/j8LF6K0cFF4AAAAC/blue-spring-geto-suguru.gif'
				)
			}
		} else {
			await ctx.reply('Чорна блискав знищила такого слабака!')
		}
	}
}

module.exports = blCommandHandler
