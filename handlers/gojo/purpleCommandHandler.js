const sendMessages = require('../sendMessages')
async function purpleCommandHandler(ctx) {
	const username = ctx.message.from.username
	if (username !== 'xzvetal') {
		await ctx.reply('Ти не Годжо Сатору!')
	} else {
		const messages = [
			'Phase twilight\nEyes of wisdom\nNine ropes',
			'Crow and declaration\nBetween front and back\nHollow... Purple',
			'https://media1.tenor.com/m/DSyo0NKX8gMAAAAC/gojo-satoru.gif',
		]
		await sendMessages(ctx, messages, 800)
	}
}

module.exports = purpleCommandHandler
