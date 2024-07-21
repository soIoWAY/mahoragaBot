const getUserRole = require('../db/getUserRole')

async function vsCommandHandler(ctx) {
	const username = ctx.message.from.username
	const parts = ctx.message.text.split(' ')
	const targetUsername = parts[1]
	async function delay(ms) {
		return new Promise(resolve => setTimeout(resolve, ms))
	}
	if (parts.length !== 2) {
		await ctx.reply(
			'Команда /vs введена некоректно. Правильний синтаксис команди: /vs @нікнейм'
		)
		return
	}
	try {
		const usernameRole = await getUserRole(username)
		const sanitizedTargetUsername = targetUsername.replace(/^@/, '')
		const targetUsernameRole = await getUserRole(sanitizedTargetUsername)
		const sukunaVsGojoRandom = Math.round(Math.random())
		if (username === sanitizedTargetUsername) {
			await ctx.reply('-_-')
		} else {
			if (
				(usernameRole === 'gojo' && targetUsernameRole === 'sukuna') ||
				(usernameRole === 'sukuna' && targetUsername === 'gojo')
			) {
				await ctx.reply(
					'Найсильніший маг сучасності проти найсильнішого мага в історії'
				)
				await delay(850)
				await ctx.reply('Розширення території... 🤞')
				await delay(850)
				await ctx.reply('Розширення території... 🫸⛩️🫷')
				await delay(850)
				await ctx.replyWithAnimation(
					'https://media1.tenor.com/m/2k8d9V9K74sAAAAd/gojo-satoru-sukuna.gif'
				)
				await delay(850)
				if (sukunaVsGojoRandom && usernameRole === 'gojo') {
					await ctx.reply(
						`Нескінченна Порожнеча знищила мозок ворога, @${username} переміг`
					)
				} else {
					await ctx.reply(
						`Всі розрізи всередині Гробниці Зла влучили в ворога, ${targetUsername} переміг`
					)
				}
			} else if (
				(usernameRole === 'gojo' && targetUsernameRole === 'geto') ||
				(usernameRole === 'geto' && targetUsernameRole === 'gojo')
			) {
				await ctx.replyWithAnimation(
					'https://media1.tenor.com/m/_zGJ55uKUfwAAAAC/geto-suguru-suguru-geto.gif'
				)
			} else {
				await ctx.reply('Роль не знайдена')
			}
		}
	} catch (err) {
		console.error('Помилка при витягувані ролі ', err)
	}
}

module.exports = vsCommandHandler
