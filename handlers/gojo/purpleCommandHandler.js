const sendMessages = require('../sendMessages')
async function purpleCommandHandler(ctx) {
	const username = ctx.message.from.username
	const parts = ctx.message.text.split(' ')
	const targetUsername = parts[1]
	if (username !== 'xzvetal') {
		await ctx.reply('Ти не Годжо Сатору!')
	} else {
		const messages = [
			'Phase twilight\nEyes of wisdom\nNine ropes',
			'Crow and declaration\nBetween front and back\nHollow... Purple',
			'https://media1.tenor.com/m/DSyo0NKX8gMAAAAC/gojo-satoru.gif',
		]
		await sendMessages(ctx, messages, 850)
		await new Promise(resolve => setTimeout(resolve, 1000))
		await ctx.reply(`${username} влучив в ${targetUsername} фіолетовим`)
	}
}

module.exports = purpleCommandHandler
