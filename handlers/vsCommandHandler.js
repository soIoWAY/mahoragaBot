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
				(usernameRole === 'sukuna' && targetUsernameRole === 'gojo')
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
				if (sukunaVsGojoRandom && targetUsernameRole === 'sukuna') {
					await ctx.reply(
						`Нескінченна Порожнеча знищила мозок ворога, @${username} переміг`
					)
				} else if (!sukunaVsGojoRandom && targetUsernameRole === 'gojo') {
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
			} else if (usernameRole === 'geto' && targetUsernameRole === 'sukuna') {
				const sukunaVsGetoRandom = Math.random()
				await ctx.reply('Розширення території... 🫸⛩️🫷')
				await delay(850)
				await ctx.reply(
					'Маніпуляція проклятими духами... ☝️\nНайвище мистецтво...'
				)
				await delay(850)
				await ctx.reply('Узумакі 🌀')
				await delay(850)
				await ctx.replyWithAnimation(
					'https://media1.tenor.com/m/61GhJxxu1-oAAAAd/kenjaku-geto.gif'
				)
				if (sukunaVsGetoRandom > 0.6 && usernameRole === 'geto') {
					await ctx.reply(`Вихор знищив Гробницю Зла, переміг @${username}`)
				} else {
					await ctx.reply(
						`Вихор був знищений Гробницею Зла, переміг ${targetUsername}`
					)
				}
			} else {
				await ctx.reply('Роль не знайдена')
			}
		}
	} catch (err) {
		console.error('Помилка при витягувані ролі ', err)
	}
}

module.exports = vsCommandHandler
