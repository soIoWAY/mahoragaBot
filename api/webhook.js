require('dotenv').config()
const { Telegraf } = require('telegraf')
const weatherCommandHandler = require('../handlers/weatherCommand')
const rtgCommandHandler = require('../handlers/rtgCommandHandler')
const rtsCommandHandler = require('../handlers/rtsCommandHandler')
const rtmCommandHandler = require('../handlers/rtmCommandHandler')

const token = process.env.TOKEN
const bot = new Telegraf(token)

async function sendMessages(ctx, messages, delay) {
	for (const message of messages) {
		try {
			if (!message.includes('.gif')) {
				await ctx.reply(message)
			} else {
				await ctx.replyWithAnimation(message)
			}
			await new Promise(resolve => setTimeout(resolve, delay))
		} catch (err) {
			console.error('Помилка надсилання повідомлення: ', err)
		}
	}
}

bot.start(async ctx => {
	const messages = [
		'Нехай коло ваше почне свій рух о святосте!',
		'Восьмиручний меч!',
		'Святий воєвода!',
		'МАХОРАГА!',
	]
	await sendMessages(ctx, messages, 800)
})

bot.command('weatherNow', weatherCommandHandler)
bot.command('rtg', rtgCommandHandler)
bot.command('rts', rtsCommandHandler)
bot.command('rtm', rtmCommandHandler)
bot.command('purple', async ctx => {
	const messages = [
		'Phase twilight',
		'Eyes of wisdom',
		'Nine ropes',
		'Crow and declaration',
		'Between front and back',
		'Hollow... Purple',
		'https://media1.tenor.com/m/DSyo0NKX8gMAAAAC/gojo-satoru.gif',
	]
	await sendMessages(ctx, messages, 800)
})
bot.command('slash', async ctx => {
	const messages = [
		'Scale of the dragon',
		'Recoil',
		'Twin meteors',
		'World Cutting slash',
		'https://media1.tenor.com/m/C_LTrUH8TKUAAAAd/sukuna-true-form-sukuna-vs-kashimo.gif',
	]
	await sendMessages(ctx, messages, 800)
})

module.exports = async (req, res) => {
	await bot.handleUpdate(req.body, res)
	res.status(200).end()
}
