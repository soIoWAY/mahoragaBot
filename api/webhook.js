require('dotenv').config()
const { Telegraf } = require('telegraf')
const weatherCommandHandler = require('../handlers/weatherCommand')
const rtmCommandHandler = require('../handlers/rtmCommandHandler')
const topmCommandHandler = require('../handlers/topmCommandHandler')
const slashCommandHandler = require('../handlers/sukuna/slashCommandHandler')
const startCommandHandler = require('../handlers/startCommandHandler')
const wdragoCommandHandler = require('../handlers/geto/wdragoCommandHandler')
const wormCommandHanlder = require('../handlers/geto/wormCommandHandler')
const rolesCommandHandler = require('../handlers/rolesCommandHandler')
const ceyCommandHandler = require('../handlers/geto/ceyCommandHandler')
const { banWords, clowns, gNames } = require('../content/words')
const updateBanMessageCount = require('../db/updateBanMessageCount')
const updateMessageCount = require('../db/updateMessageCount')
const topUsersByMessage = require('../db/topUsersByMessage')
const vsCommandHandler = require('../handlers/vsCommandHandler')
const blCommandHandler = require('../handlers/itadori/blCommandHandler')
const resCommandHandler = require('../handlers/nobara/resCommandHandler')

const purpleCommandHandler = require('../handlers/characters/gojo/purpleCommandHandler')

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
// Itadori
bot.command('bl', blCommandHandler)
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
bot.command('res', resCommandHandler)
// general
bot.command('roles', rolesCommandHandler)
bot.command('topm', ctx => topmCommandHandler(ctx, topUsersByMessage))
bot.command('vs', vsCommandHandler)

bot.on('text', async ctx => {
	const messageText = ctx.message.text
	const msgTextToLC = messageText.toLocaleLowerCase()
	const username = ctx.message.from.username
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
	} else if (msgTextToLC.includes('ти програєш')) {
		await ctx.reply('Nah, Id Adapt')
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
})

module.exports = async (req, res) => {
	await bot.handleUpdate(req.body, res)
	res.status(200).end()
}
