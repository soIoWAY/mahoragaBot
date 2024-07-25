const {
	gojoSukunaVs,
	sukunaGojoVs,
} = require('../content/scenaries/vs/gojoSukunaVs')
const {
	getoSukunaVs,
	sukunaGetoVs,
} = require('../content/scenaries/vs/getoSukuna')
const getUserRole = require('../db/getUserRole')
const sendMessages = require('./sendMessages')

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
		const sukVsGojoRandom = Math.random()
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
			} else if (usernameRole === 'geto' && targetUsernameRole === 'sukuna') {
				await getoSukunaVs(ctx, username, targetUsername)
			} else if (usernameRole === 'sukuna' && targetUsernameRole === 'geto') {
				await sukunaGetoVs(ctx, username, targetUsername)
			} else if (
				usernameRole === 'itadori' &&
				targetUsernameRole === 'sukuna'
			) {
				const sukunaVsItadori = Math.random()
				await ctx.reply('Серія чорних блискавок ⚫️⚡️')
				await delay(850)
				await ctx.reply('Розширення території... 🫸⛩️🫷')
				await delay(850)
				await ctx.replyWithAnimation(
					'https://media1.tenor.com/m/UVe_VIz4vPcAAAAd/jjk-jujutsu-kaisen.gif'
				)
				if (sukunaVsItadori <= 0.4) {
					await ctx.reply(
						`Серія чорних блискавок знищила Гробницю Зла, @${username} переміг`
					)
				} else if (sukunaVsItadori > 0.4 && sukunaVsItadori < 0.9) {
					await ctx.reply(
						`Гробниця Зла порізала ворога, переміг ${targetUsername}`
					)
				} else {
					await ctx.reply('Нічия')
				}
			} else if (
				usernameRole === 'sukuna' &&
				targetUsernameRole === 'itadori'
			) {
				const sukunaVsItadori = Math.random()
				await ctx.reply('Серія чорних блискавок ⚫️⚡️')
				await delay(850)
				await ctx.reply('Розширення території... 🫸⛩️🫷')
				await delay(850)
				await ctx.replyWithAnimation(
					'https://media1.tenor.com/m/hp1qKBQclPMAAAAC/jujutsu-kaisen-shibuya-arc-sukuna-domain-expansion.gif'
				)
				if (sukunaVsItadori <= 0.4) {
					await ctx.reply(
						`Серія чорних блискавок знищила Гробницю Зла, ${targetUsername} переміг`
					)
				} else if (sukunaVsItadori > 0.4 && sukunaVsItadori < 0.9) {
					await ctx.reply(`Гробниця Зла порізала ворога, переміг @${username}`)
				} else {
					await ctx.reply('Нічия')
				}
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
					'https://media1.tenor.com/m/wpRUcTgq0FwAAAAC/cry.gif'
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
