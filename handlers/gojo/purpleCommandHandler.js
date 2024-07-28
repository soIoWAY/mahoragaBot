const getUserRole = require('../../db/getUserRole')
const sendMessages = require('../sendMessages')
async function purpleCommandHandler(ctx) {
	const username = ctx.message.from.username
	const parts = ctx.message.text.split(' ')
	const targetUsername = parts[1]
	const supportUsername = parts[2]
	const usernameRole = await getUserRole(username)
	const sanitizedTargetUsername = targetUsername.replace(/^@/, '')
	const sanitizedSupportUsername = supportUsername.replace(/^@/, '')
	const targetUsernameRole = await getUserRole(sanitizedTargetUsername)
	const supportUsernameRole = await getUserRole(sanitizedSupportUsername)
	async function delay(ms) {
		return new Promise(resolve => setTimeout(resolve, ms))
	}
	if (usernameRole !== 'gojo') {
		await ctx.reply('Ти не Годжо Сатору!')
	} else {
		const messages = [
			'Девять мотузок\nПоляризоване світло\nСпівають ворона і Шомо',
			'Розрив між внутрішнім і зовнішнім\nТехніка пустоти... Фіолетовий 🟣',
		]
		await sendMessages(ctx, messages, 850)
		await new Promise(resolve => setTimeout(resolve, 1000))
		if (targetUsernameRole) {
			if (targetUsernameRole === 'sukuna') {
				const isMahoraAdapt = Math.random()
				let purple =
					isMahoraAdapt <= 0.3
						? 'https://media1.tenor.com/m/J5FKJH_pdZQAAAAd/gojo-satoru-gojo.gif'
						: isMahoraAdapt > 0.3 && isMahoraAdapt <= 0.83
						? 'https://media1.tenor.com/m/J5FKJH_pdZQAAAAd/gojo-satoru-gojo.gif'
						: 'https://media1.tenor.com/m/Gr3phjzcytAAAAAC/manga-jujutsu-kaisen.gif'
				if (isMahoraAdapt <= 0.3) {
					await ctx.replyWithAnimation(purple)
					await delay(850)
					await ctx.reply('Махорага зміг адаптуватись')
				} else if (isMahoraAdapt > 0.3 && isMahoraAdapt <= 0.83) {
					await ctx.replyWithAnimation(purple)
					await ctx.reply(`@${username} влучив в ${targetUsername} фіолетовим`)
				} else if (isMahoraAdapt > 0.83) {
					if (supportUsernameRole && supportUsernameRole === 'utahime') {
						await ctx.reply('УТАХІМЕ')
						await delay(850)
						await ctx.replyWithAnimation('https://i.imgur.com/lD6Q0q0.gif')
						await delay(850)
						await ctx.replyWithAnimation(purple)
						await delay(850)
						await ctx.reply(
							`@${username} і ${supportUsername} влучили в ${targetUsername} 200% фіолетовим, Махорага і ${targetUsername} були знищені.`
						)
					} else {
						await ctx.replyWithAnimation(purple)
						await ctx.reply(
							`@${username} влучив в ${targetUsername} фіолетовим`
						)
					}
				}
			} else if (targetUsernameRole === 'geto') {
				await ctx.replyWithAnimation(
					'https://media1.tenor.com/m/_zGJ55uKUfwAAAAC/geto-suguru-suguru-geto.gif'
				)
			} else {
				await ctx.replyWithAnimation(
					'https://media1.tenor.com/m/J5FKJH_pdZQAAAAd/gojo-satoru-gojo.gif'
				)
				await delay(850)
				await ctx.reply(`@${username} влучив в ${targetUsername} фіолетовим`)
			}
		} else {
			await ctx.replyWithAnimation(
				'https://media1.tenor.com/m/J5FKJH_pdZQAAAAd/gojo-satoru-gojo.gif'
			)
			await delay(850)
			await ctx.reply(`Фіолетовий розніс на атоми такого слабака`)
		}
	}
}

module.exports = purpleCommandHandler
