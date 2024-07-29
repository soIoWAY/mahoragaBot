const sendMessages = require('../../../handlers/sendMessages')

const sukunaGojoMessages = [
	'Розширення території... 🤞',
	'Розширення території... 🫸🌋🫷',
]
async function delay(ms) {
	return new Promise(resolve => setTimeout(resolve, ms))
}
const gojoVulkanVs = async (ctx, username, targetUsername) => {
	const random = Math.round(Math.random())
	await sendMessages(ctx, sukunaGojoMessages, 850)
	await delay(850)
	await ctx.replyWithAnimation(
		'https://media1.tenor.com/m/j-gnYrbtTIEAAAAd/gojo-satoru-eyes-gojo-satoru.gif'
	)
	if (random <= 0.85) {
		await ctx.reply(
			`Нескінченна Порожнеча знищила мозок ворога, @${username} переміг 🟣`
		)
	} else {
		await ctx.reply(
			`Ворог згорів всередині Гробниці Залізної Гори, ${targetUsername} переміг 🌋`
		)
	}
}

const vulkanGojoVs = async (ctx, username, targetUsername) => {
	const random = Math.round(Math.random())
	await sendMessages(ctx, sukunaGojoMessages, 850)
	await delay(850)
	await ctx.replyWithAnimation(
		'https://media1.tenor.com/m/n9_qaRbFXM8AAAAC/jujutsu-kaisen-cursed-clash-cursed-clash.gif'
	)
	if (random <= 0.85) {
		await ctx.reply(
			`Нескінченна Порожнеча знищила мозок ворога, ${targetUsername} переміг 🟣`
		)
	} else {
		await ctx.reply(
			`Ворог згорів всередині Гробниці Залізної Гори, @${username} переміг 🌋`
		)
	}
}

module.exports = { gojoVulkanVs, vulkanGojoVs }
