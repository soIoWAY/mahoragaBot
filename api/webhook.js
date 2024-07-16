require('dotenv').config()
const { Telegraf } = require('telegraf')

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

bot.command('weatherNow', async ctx => {
	try {
		const weatherApi =
			'https://api.open-meteo.com/v1/forecast?latitude=49.78&longitude=23.64&current=temperature_2m,wind_speed_10m&hourly=temperature_2m,relative_humidity_2m,wind_speed_10m&timezone=Europe/Kiev'

		const res = await axios.get(weatherApi)
		const temp = res.data.current.temperature_2m
		const wind = res.data.current.wind_speed_10m
		const isoTime = res.data.current.time
		const date = new Date(isoTime)
		let hours = date.getHours()
		let minutes = date.getMinutes()
		let formattedTime = `${hours}:${minutes < 10 ? '0' : ''}${minutes}`
		await ctx.reply(
			`Час: ${formattedTime} ⏰\nТемпература: ${temp}°C 🌡\nШвидкість вітру: ${wind}km/h 💨`
		)
	} catch (err) {
		console.error(err)
	}
})

module.exports = async (req, res) => {
	await bot.handleUpdate(req.body, res)
	res.status(200).end()
}
