const axios = require('axios')

async function handleWeatherCommand(ctx) {
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
}

module.exports = handleWeatherCommand
