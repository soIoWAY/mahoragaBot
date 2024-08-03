const getUserRole = require('../../db/getUserRole')

async function rikaCommandHandler(ctx) {
	const username = ctx.message.from.username
	const parts = ctx.message.text.split(' ')
	const targetUsername = parts[1]
	const usernameRole = await getUserRole(username)
	const sanitizedTargetUsername = targetUsername.replace(/^@/, '')
	const targetUsernameRole = await getUserRole(sanitizedTargetUsername)
	async function delay(ms) {
		return new Promise(resolve => setTimeout(resolve, ms))
	}
	if (usernameRole !== 'geto') {
		await ctx.reply('Ти не Гето Сугуру!')
	} else {
		await ctx.reply('Маніпуляція прокляттями... 👾\nКоролева проклять!')
		await delay(850)
		await ctx.reply('Ріка!')
		await delay(850)
		await ctx.replyWithAnimation(
			'https://media1.tenor.com/m/oJGVvk77WMoAAAAC/rika-vol0.gif'
		)
		if (targetUsernameRole) {
			if (targetUsernameRole === 'gojo') {
				await ctx.replyWithAnimation(
					'https://media1.tenor.com/m/_zGJ55uKUfwAAAAC/geto-suguru-suguru-geto.gif'
				)
			} else if (targetUsernameRole === 'itadori') {
				await ctx.replyWithAnimation(
					'https://media1.tenor.com/m/fqdS87GSLCoAAAAC/jujustsu-kaisen.gif'
				)
			} else if (targetUsernameRole === 'sukuna') {
				const isAdapt = Math.random()
				if (isAdapt <= 0.3) {
					await ctx.reply(`Махорага зміг адаптуватись`)
				} else if (isAdapt > 0.3 && isAdapt <= 0.9) {
					await ctx.reply(`Ріка знесла половину хп ${targetUsername}`)
				} else {
					await ctx.reply(`Ріка знищила ${targetUsername}`)
				}
			} else {
				await ctx.reply(`Ріка знищила ${targetUsername}`)
			}
		} else {
			await ctx.reply('Така слабка мавпа стала кормом для моїх проклять')
		}
	}
}

module.exports = rikaCommandHandler
