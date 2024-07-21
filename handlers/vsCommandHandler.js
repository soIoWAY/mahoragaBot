const getUserRole = require('../db/getUserRole')

async function vsCommandHandler(ctx) {
	const username = ctx.message.from.username
	const parts = ctx.message.text.split(' ')
	const targetUsername = parts[1]
	if (parts.length !== 2) {
		await ctx.reply(
			'Команда /vs введена некоректно. Правильний синтаксис команди: /vs @нікнейм'
		)
		return
	}
	try {
		const role = await getUserRole(username)
		if (role) {
			await ctx.reply('Ок')
		} else {
			await ctx.reply('роль не знайдена')
		}
	} catch (err) {
		console.error('Помилка при витягувані ролі ', err)
	}
}

module.exports = vsCommandHandler
