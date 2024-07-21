require('dotenv').config()
const { Telegraf } = require('telegraf')
const weatherCommandHandler = require('../handlers/weatherCommand')
const rtgCommandHandler = require('../handlers/gojo/rtgCommandHandler')
const rtsCommandHandler = require('../handlers/sukuna/rtsCommandHandler')
const rtmCommandHandler = require('../handlers/rtmCommandHandler')
const topmCommandHandler = require('../handlers/topmCommandHandler')
const purpleCommandHandler = require('../handlers/gojo/purpleCommandHandler')
const slashCommandHandler = require('../handlers/sukuna/slashCommandHandler')
const startCommandHandler = require('../handlers/startCommandHandler')
const wdragoCommandHandler = require('../handlers/geto/wdragoCommandHandler')
const wormCommandHanlder = require('../handlers/geto/wormCommandHandler')
const rolesCommandHandler = require('../handlers/rolesCommandHandler')
const ceyCommandHandler = require('../handlers/geto/ceyCommandHandler')
const banWords = require('../content/banWords')
const clowns = require('../content/clowns')
const gNames = require('../content/gNames')
// db
const client = require('../db/database')
const updateBanMessageCount = require('../db/updateBanMessageCount')
const updateMessageCount = require('../db/updateMessageCount')
const topUsersByMessage = require('../db/topUsersByMessage')
const vsCommandHandler = require('../handlers/vsCommandHandler')

const token = process.env.TOKEN
const bot = new Telegraf(token)

bot.start(startCommandHandler)

bot.command('weatherNow', weatherCommandHandler)
// Satoru
bot.command('purple', purpleCommandHandler)
// Sukuna
bot.command('slash', slashCommandHandler)
// geto
bot.command('rika', wdragoCommandHandler)
bot.command('worm', wormCommandHanlder)
bot.command('cey', ceyCommandHandler)
// Mahito
bot.command('rtm', rtmCommandHandler)
// general
bot.command('roles', rolesCommandHandler)
bot.command('topm', ctx => topmCommandHandler(ctx, topUsersByMessage))
bot.command('vs', vsCommandHandler)

bot.on('text', async ctx => {
	const messageText = ctx.message.text
	const username = ctx.message.from.username
	if (
		messageText.toLocaleLowerCase().includes('жінка') ||
		messageText === 'МАХОРАГА ХЕЛП'
	) {
		try {
			await ctx.replyWithAnimation(
				'https://media1.tenor.com/m/xxTiQVYbcAAAAAAd/jujutsu-kaisen-shibuya-arc-mahoraga-shibuya-arc.gif'
			)
		} catch (err) {
			console.error('Помилка надсилання анімації: ', err)
		}
	} else if (
		messageText.includes('@general_mahoraga_bot') &&
		username !== 'xzvetal'
	) {
		try {
			await ctx.reply('Алло бездарність, як ти смієш мене тегати?!')
		} catch (error) {
			console.error('Помилка надсилання повідомлення: ', error)
		}
	} else if (messageText.includes('МАХОРАГА') && username !== 'xzvetal') {
		try {
			await ctx.reply('*плюнув*')
		} catch (error) {
			console.error('Помилка надсилання повідомлення: ', error)
		}
	} else if (
		messageText === '@general_mahoraga_bot' ||
		(messageText === 'МАХОРАГА' && username === 'xzvetal')
	) {
		try {
			await ctx.reply('Ваш вірний слуга до ваших послуг!')
		} catch (error) {
			console.error('Помилка надсилання повідомлення: ', error)
		}
	} else if (
		messageText.toLocaleLowerCase().includes('тихо') ||
		messageText.toLocaleLowerCase().includes('тихе')
	) {
		try {
			await ctx.reply('Гаааааааааа?')
		} catch (error) {
			console.error(error)
		}
	} else if (messageText.toLocaleLowerCase().includes('шо то норм')) {
		try {
			await ctx.reply('А яке')
		} catch (error) {
			console.error(error)
		}
	} else if (messageText.toLocaleLowerCase().includes('школ')) {
		try {
			await ctx.reply('Топтав ту школу')
		} catch (error) {
			console.error(error)
		}
	} else if (messageText.toLocaleLowerCase().includes('ти програєш')) {
		try {
			await ctx.reply('Nah, Id Adapt')
		} catch (error) {
			console.error(error)
		}
	} else if (
		gNames.some(gName => messageText.toLocaleLowerCase().includes(gName))
	) {
		try {
			await ctx.reply('))')
		} catch (error) {
			console.error(error)
		}
	} else if (
		clowns.some(clown => messageText.toLocaleLowerCase().includes(clown))
	) {
		try {
			await ctx.reply(
				`ХАХАХАХАХАХАХАХАХХАХАХ НАХУЯ ВИ ТО ЧЕРПАЦЬКЕ ІМЯ ЗГАДУЄТЕ`
			)
		} catch (error) {
			console.error(error)
		}
	} else if (
		banWords.some(word => messageText.toLocaleLowerCase().includes(word))
	) {
		try {
			const user_id = ctx.message.from.id
			const username = ctx.message.from.username
			await updateBanMessageCount(user_id, username)
		} catch (error) {
			console.error(error)
		}
	} else if (messageText.toLocaleLowerCase() === 'макс') {
		try {
			await ctx.replyWithPhoto('https://i.imgur.com/tKeUWiN.jpeg')
		} catch (error) {
			console.error(error)
		}
	} else if (messageText.toLocaleLowerCase().includes('виклик')) {
		const messageText = ctx.message.text
		const parts = messageText.split(' ')
		const username = ctx.message.from.username
		const targetUsername = parts[1]
		const randomEq = Math.round(Math.random())
		const usernames = ['xzvetal', 'H4untt']
		if (usernames.includes(username)) {
			if (messageText.includes('NightHanami')) {
				if (username === 'xzvetal') {
					await ctx.replyWithAnimation(
						'https://media1.tenor.com/m/_zGJ55uKUfwAAAAC/geto-suguru-suguru-geto.gif'
					)
				} else {
					const rand = Math.random()
					await ctx.reply(
						`@${username} розпочав битву територій проти ${targetUsername}`
					)
					await new Promise(resolve => setTimeout(resolve, 800))
					await ctx.replyWithAnimation(
						'https://media1.tenor.com/m/wu7M_BzAKMAAAAAC/geto-suguru-suguru-geto.gif'
					)
					await new Promise(resolve => setTimeout(resolve, 800))
					if (rand > 0.5) {
						await ctx.reply(
							`4461 прокляття знищили територію, @NightHanami переміг`
						)
					} else {
						await ctx.reply(
							`Переміг @${username}, його теориторія поглинула всі прокляття`
						)
					}
				}
			} else {
				try {
					await ctx.reply(
						`@${username} розпочав битву територій проти ${targetUsername}`
					)
					await new Promise(resolve => setTimeout(resolve, 800))
					await rtgCommandHandler(ctx)
					await new Promise(resolve => setTimeout(resolve, 800))
					await rtsCommandHandler(ctx)
					await new Promise(resolve => setTimeout(resolve, 800))
					await ctx.replyWithAnimation(
						'https://media1.tenor.com/m/KprNz_Lhdr4AAAAd/sukuna-gojo.gif'
					)
					await new Promise(resolve => setTimeout(resolve, 1000))
					// username & hp check
					if (randomEq) {
						await ctx.reply(`Переміг @${username}`)
						await new Promise(resolve => setTimeout(resolve, 800))
					} else {
						await ctx.reply(`Переміг ${targetUsername}`)
						await new Promise(resolve => setTimeout(resolve, 800))
					}
				} catch (error) {
					console.error('Помилка:', error)
				}
			}
		} else {
			await ctx.reply('Якаааа тобі битва територій? Що ти будеш розширювати?')
		}
	} else {
		const user_id = ctx.message.from.id
		const username = ctx.message.from.username
		await updateMessageCount(user_id, username)
	}
})

module.exports = async (req, res) => {
	await bot.handleUpdate(req.body, res)
	res.status(200).end()
}
