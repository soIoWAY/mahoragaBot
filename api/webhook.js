require('dotenv').config()
const { Telegraf } = require('telegraf')
const weatherCommandHandler = require('../handlers/weatherCommand')
const topmCommandHandler = require('../handlers/topmCommandHandler')
const startCommandHandler = require('../handlers/startCommandHandler')
const rolesCommandHandler = require('../handlers/rolesCommandHandler')
const { banWords, clowns, gNames } = require('../content/words')
const updateBanMessageCount = require('../db/updateBanMessageCount')
const updateMessageCount = require('../db/updateMessageCount')
const topUsersByMessage = require('../db/topUsersByMessage')
const vsCommandHandler = require('../handlers/vsCommandHandler')

// characters command handlers
const purple = require('../handlers/characters/gojo/purpleCommandHandler')
const rika = require('../handlers/characters/geto/rikaCommandHandler')
const bl = require('../handlers/characters/itadori/blCommandHandler')
const res = require('../handlers/characters/nobara/resCommandHandler')
const slash = require('../handlers/characters/sukuna/slashCommandHandler')

const token = process.env.TOKEN
const bot = new Telegraf(token)

const ALLOWED_CHAT_ID = -1002149849126

bot.use((ctx, next) => {
	if (ctx.chat.id !== ALLOWED_CHAT_ID) {
		return
	}
	return next()
})

bot.start(startCommandHandler)

bot.command('bl', bl)
bot.command('weatherNow', weatherCommandHandler)
bot.command('purple', purple)
bot.command('slash', slash)
bot.command('rika', rika)
bot.command('res', res)
bot.command('roles', rolesCommandHandler)
bot.command('topm', ctx => topmCommandHandler(ctx, topUsersByMessage))
bot.command('vs', vsCommandHandler)

bot.on('text', async ctx => {
	const messageText = ctx.message.text
	const msgTextToLC = messageText.toLocaleLowerCase()
	const username = ctx.message.from.username
	if (username === 'H4untt') {
		return
	} else {
		if (
			messageText.toLocaleLowerCase().includes('жінка') ||
			messageText === 'МАХОРАГА ХЕЛП'
		) {
			await ctx.replyWithAnimation(
				'https://media1.tenor.com/m/xxTiQVYbcAAAAAAd/jujutsu-kaisen-shibuya-arc-mahoraga-shibuya-arc.gif'
			)
		} else if (
			messageText.includes('@general_mahoraga_bot') ||
			messageText.includes('МАХОРАГА')
		) {
			if (username !== 'xzvetal') {
				await ctx.reply('*плюнув*')
			} else {
				await ctx.reply('Ваш вірний слуга до ваших послуг!')
			}
		} else if (msgTextToLC.includes('тихо') || msgTextToLC.includes('тихе')) {
			await ctx.reply('Гаааааааааа?')
		} else if (msgTextToLC.includes('шо то норм')) {
			await ctx.reply('А яке')
		} else if (msgTextToLC.includes('школ')) {
			await ctx.reply('Топтав ту школу')
		} else if (gNames.some(gName => msgTextToLC.includes(gName))) {
			await ctx.reply('))')
		} else if (clowns.some(clown => msgTextToLC.includes(clown))) {
			await ctx.reply(`ХАХАХАХАХАХАХАХАХХ НАХУЯ ВИ ТО ЧЕРПАЦЬКЕ ІМЯ ЗГАДУЄТЕ`)
		} else if (msgTextToLC === 'макс') {
			await ctx.replyWithPhoto('https://i.imgur.com/tKeUWiN.jpeg')
		} else if (banWords.some(word => msgTextToLC.includes(word))) {
			const user_id = ctx.message.from.id
			await updateBanMessageCount(user_id, username)
		} else {
			const user_id = ctx.message.from.id
			await updateMessageCount(user_id, username)
		}
	}
})

module.exports = async (req, res) => {
	await bot.handleUpdate(req.body, res)
	res.status(200).end()
}
