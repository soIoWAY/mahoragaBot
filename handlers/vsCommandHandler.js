const getUserRole = require('../db/getUserRole')

async function vsCommandHandler(ctx) {
	const username = ctx.message.from.username
	const parts = ctx.message.text.split(' ')
	const targetUsername = parts[1]
	const delay = () => {
		new Promise(resolve => setTimeout(resolve, 850))
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
		if (username === targetUsername) {
			await ctx.reply('-_-')
		} else {
			if (
				(usernameRole === 'gojo' && targetUsernameRole === 'sukuna') ||
				(usernameRole === 'sukuna' && targetUsername === 'gojo')
			) {
				await ctx.reply(
					'Найсильніший маг сучасності проти найсильнішого мага в історії'
				)
				delay()
				await ctx.reply('Розширення території... 🤞')
				delay()
				await ctx.reply('Розширення території... 🫸⛩️🫷')
				delay()
				await ctx.replyWithAnimation(
					'https://media1.tenor.com/m/2k8d9V9K74sAAAAd/gojo-satoru-sukuna.gif'
				)
				if (sukunaVsGojoRandom && usernameRole === 'gojo') {
					await ctx.reply(
						`Нескінченан Порожнеча знищила мозок ворога, @${username} переміг`
					)
				} else {
					await ctx.reply(
						`Всі розрізи всередині Гробниці Зла влучили в ворога, ${targetUsername} переміг`
					)
				}
			} else {
				await ctx.reply('роль не знайдена')
			}
		}
	} catch (err) {
		console.error('Помилка при витягувані ролі ', err)
	}
}

module.exports = vsCommandHandler
