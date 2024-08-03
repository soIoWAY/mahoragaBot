const getUserRole = require('../../../db/getUserRole')

async function resCommandHandler(ctx) {
	const username = ctx.message.from.username
	const parts = ctx.message.text.split(' ')
	const targetUsername = parts[1]
	const sanitizedTargetUsername = targetUsername.replace(/^@/, '')
	const usernameRole = await getUserRole(username)
	const targetUsernameRole = await getUserRole(sanitizedTargetUsername)

	async function delay(ms) {
		return new Promise(resolve => setTimeout(resolve, ms))
	}

	if (usernameRole !== 'nobara') {
		await ctx.reply('Ти не Кугісакі Нобара!')
	} else {
		await ctx.reply('Техніка Резонанс! 🔨')
		await delay(850)
		await ctx.replyWithAnimation(
			'https://media1.tenor.com/m/Tri2GtbXyzsAAAAC/kugisaki-kugisaki-nobara.gif'
		)
		await delay(850)
		if (targetUsernameRole) {
			const isTarget = Math.random()
			if (targetUsernameRole === 'sukuna') {
				if (isTarget <= 0.65) {
					await ctx.reply('Махорага зміг адаптуватись')
				} else {
					await ctx.reply(
						`@${username} влучила в ${targetUsername} технікою резонансу`
					)
				}
			} else if (targetUsernameRole === 'gojo') {
				await ctx.replyWithAnimation(
					'https://media1.tenor.com/m/Vmtzuub57cgAAAAd/gojo-nobara.gif  '
				)
			} else if (targetUsernameRole === 'geto') {
				await ctx.reply('Заціпся)')
				await delay(850)
				await ctx.replyWithAnimation(
					'https://media1.tenor.com/m/cYuVeEJLh7UAAAAd/geto-jujutsu-kaisen.gif'
				)
			} else if (targetUsernameRole === 'itadori') {
				await ctx.replyWithAnimation(
					'https://media1.tenor.com/m/GSu6UWjBtukAAAAC/anime-jujutsu-kaisen.gif'
				)
			} else if (targetUsernameRole === 'utahime') {
				await ctx.replyWithAnimation(
					'https://media1.tenor.com/m/gYjbTItBi7oAAAAd/megumi-fushiguro-megumi.gif'
				)
			}
		} else {
			await ctx.reply('Техніка Резонансу знищила такого слабака!')
		}
	}
}

module.exports = resCommandHandler
