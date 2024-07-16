require('dotenv').config()
const { Telegraf } = require('telegraf')
const weatherCommandHandler = require('../handlers/weatherCommand')

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

module.exports = async (req, res) => {
	await bot.handleUpdate(req.body, res)
	res.status(200).end()
}
