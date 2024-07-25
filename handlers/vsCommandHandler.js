const getUserRole = require('../db/getUserRole')
const sendMessages = require('./sendMessages')

async function vsCommandHandler(ctx) {
	const username = ctx.message.from.username
	const parts = ctx.message.text.split(' ')
	const targetUsername = parts[1]
	const sukunaGojoMessages = [
		'Найсильніший маг сучасності проти найсильнішого мага в історії',
		'Розширення території... 🤞',
		'Розширення території... 🫸⛩️🫷',
	]
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
				await sendMessages(ctx, sukunaGojoMessages, 850)
				await ctx.replyWithAnimation(
					'https://media1.tenor.com/m/2k8d9V9K74sAAAAd/gojo-satoru-sukuna.gif'
				)
				await delay(850)
				if (sukVsGojoRandom > 0 && sukVsGojoRandom <= 0.4) {
					await ctx.reply(
						`Нескінченна Порожнеча знищила мозок ворога, @${username} переміг`
					)
				} else if (sukVsGojoRandom > 0.4 && sukVsGojoRandom <= 0.8) {
					await ctx.reply(
						`Всі розрізи всередині Гробниці Зла влучили в ворога, ${targetUsername} переміг`
					)
				} else {
					await ctx.reply('Я скажу, що це ти все зламав')
					await delay(850)
					await ctx.reply('Паршивець')
					await ctx.replyWithPhoto(
						'https://i.pinimg.com/564x/06/f5/51/06f551a67fac436d386db135b3e3d119.jpg'
					)
				}
			} else if (usernameRole === 'sukuna' && targetUsernameRole === 'gojo') {
				await sendMessages(ctx, sukunaGojoMessages, 850)
				await ctx.replyWithAnimation(
					'https://media1.tenor.com/m/2k8d9V9K74sAAAAd/gojo-satoru-sukuna.gif'
				)
				await delay(850)
				if (sukVsGojoRandom > 0 && sukVsGojoRandom <= 0.4) {
					await ctx.reply(
						`Всі розрізи всередині Гробниці Зла влучили в ворога, @${username} переміг`
					)
				} else if (sukVsGojoRandom > 0.4 && sukVsGojoRandom <= 0.8) {
					await ctx.reply(
						`Нескінченна Порожнеча знищила мозок ворога, ${targetUsername} переміг`
					)
				} else {
					await ctx.reply('Я скажу, що це ти все зламав')
					await delay(850)
					await ctx.reply('Паршивець')
					await ctx.replyWithPhoto(
						'https://i.pinimg.com/564x/06/f5/51/06f551a67fac436d386db135b3e3d119.jpg'
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
				if (sukunaVsGetoRandom <= 0.4) {
					await ctx.reply(`Вихор знищив Гробницю Зла, переміг @${username}`)
				} else if (sukunaVsGetoRandom > 0.4 && sukVsGojoRandom < 0.9) {
					await ctx.reply(
						`Вихор був знищений Гробницею Зла, переміг ${targetUsername}`
					)
				} else {
					await ctx.reply('Втрутилась Ріка Орімото, нічия!')
				}
			} else if (usernameRole === 'sukuna' && targetUsernameRole === 'geto') {
				const sukunaVsGetoRandom = Math.random()
				await ctx.reply(
					'Маніпуляція проклятими духами... ☝️\nНайвище мистецтво...'
				)
				await delay(850)
				await ctx.reply('Узумакі 🌀')
				await delay(850)
				await ctx.reply('Розширення території... 🫸⛩️🫷')
				await delay(850)
				await ctx.replyWithAnimation(
					'https://media1.tenor.com/m/hp1qKBQclPMAAAAC/jujutsu-kaisen-shibuya-arc-sukuna-domain-expansion.gif'
				)
				if (sukunaVsGetoRandom <= 0.4) {
					await ctx.reply(
						`Вихор знищив Гробницю Зла, переміг ${targetUsername}`
					)
				} else if (sukunaVsGetoRandom > 0.4 && sukVsGojoRandom < 0.9) {
					await ctx.reply(
						`Вихор був знищений Гробницею Зла, переміг @${username}`
					)
				} else {
					await ctx.reply('Втрутилась Ріка Орімото, нічия!')
				}
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
