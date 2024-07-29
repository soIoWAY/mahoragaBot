const sendMessages = require('../../../handlers/sendMessages')

const sukunaGojoMessages = [
	'Розширення території... 🫸⛩️🫷',
	'Розширення території... 🫸🌋🫷',
]
async function delay(ms) {
	return new Promise(resolve => setTimeout(resolve, ms))
}
const sukunaVulkanVs = async (ctx, username, targetUsername) => {
	const random = Math.round(Math.random())
	await sendMessages(ctx, sukunaGojoMessages, 850)
	await delay(850)
	await ctx.replyWithAnimation(
		'https://media1.tenor.com/m/6FtXg-hF9FoAAAAC/jjk-jjk-s2.gif'
	)
	if (random <= 0.85) {
		await ctx.reply(
			`Всі розрізи всередині Гробниці Зла влучили в ворога, @${username} переміг ⛩️`
		)
	} else {
		await ctx.reply(
			`Ворог згорів всередині Гробниці Залізної Гори, ${targetUsername} переміг 🌋`
		)
	}
}

const vulkanSukunaVs = async (ctx, username, targetUsername) => {
	const random = Math.round(Math.random())
	await sendMessages(ctx, sukunaGojoMessages, 850)
	await delay(850)
	await ctx.replyWithAnimation(
		'https://media1.tenor.com/m/n9_qaRbFXM8AAAAC/jujutsu-kaisen-cursed-clash-cursed-clash.gif'
	)
	if (random <= 0.85) {
		await ctx.reply(
			`Всі розрізи всередині Гробниці Зла влучили в ворога, ${targetUsername} переміг ⛩️`
		)
	} else {
		await ctx.reply(
			`Ворог згорів всередині Гробниці Залізної Гори, @${username} переміг 🌋`
		)
	}
}

module.exports = { sukunaVulkanVs, vulkanSukunaVs }
