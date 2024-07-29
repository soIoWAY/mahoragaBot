const {
	gojoSukunaVs,
	sukunaGojoVs,
} = require('../content/scenaries/vs/gojoSukunaVs')
const {
	getoSukunaVs,
	sukunaGetoVs,
} = require('../content/scenaries/vs/getoSukuna')
const {
	itadoriSukunaVs,
	sukunaItadoriVs,
} = require('../content/scenaries/vs/itadoriSukuna')
const getUserRole = require('../db/getUserRole')
const { utahimeGojo } = require('../content/scenaries/vs/utahimeGojoVs')

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
		if (username === sanitizedTargetUsername) {
			await ctx.reply('-_-')
		} else {
			if (usernameRole === 'gojo' && targetUsernameRole === 'sukuna') {
				await gojoSukunaVs(ctx, username, targetUsername)
			} else if (usernameRole === 'sukuna' && targetUsernameRole === 'gojo') {
				await sukunaGojoVs(ctx, username, targetUsername)
			} else if (
				(usernameRole === 'gojo' && targetUsernameRole === 'geto') ||
				(usernameRole === 'geto' && targetUsernameRole === 'gojo')
			) {
				await ctx.replyWithAnimation(
					'https://media1.tenor.com/m/_zGJ55uKUfwAAAAC/geto-suguru-suguru-geto.gif'
				)
			} else if (
				(usernameRole === 'itadori' && targetUsernameRole === 'geto') ||
				(usernameRole === 'geto' && targetUsernameRole === 'itadori')
			) {
				await ctx.reply('Заціпся)')
				await delay(850)
				await ctx.replyWithAnimation(
					'https://media1.tenor.com/m/j8LF6K0cFF4AAAAC/blue-spring-geto-suguru.gif'
				)
			} else if (
				(usernameRole === 'itadori' && targetUsernameRole === 'gojo') ||
				(usernameRole === 'gojo' && targetUsernameRole === 'itadori')
			) {
				await ctx.replyWithAnimation(
					'https://media1.tenor.com/m/9F1H_NisG4QAAAAC/cry-about-it.gif'
				)
			} else if (usernameRole === 'geto' && targetUsernameRole === 'sukuna') {
				await getoSukunaVs(ctx, username, targetUsername)
			} else if (usernameRole === 'sukuna' && targetUsernameRole === 'geto') {
				await sukunaGetoVs(ctx, username, targetUsername)
			} else if (
				usernameRole === 'itadori' &&
				targetUsernameRole === 'sukuna'
			) {
				await itadoriSukunaVs(ctx, username, targetUsername)
			} else if (
				usernameRole === 'sukuna' &&
				targetUsernameRole === 'itadori'
			) {
				await sukunaItadoriVs(ctx, username, targetUsername)
			} else if (usernameRole === 'utahime' && targetUsernameRole === 'gojo') {
				await utahimeGojo(ctx)
			} else if (
				usernameRole === 'utahime' &&
				targetUsernameRole === 'sukuna'
			) {
			} else {
				await ctx.reply('Роль не знайдена')
			}
		}
	} catch (err) {
		console.error('Помилка при витягувані ролі ', err)
	}
}

module.exports = vsCommandHandler
