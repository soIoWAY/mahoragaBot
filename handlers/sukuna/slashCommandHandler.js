const sendMessages = require('../sendMessages')
async function slashCommandHandler(ctx) {
	const messages = [
		'Scale of the dragon\nRecoil\nTwin meteors\nWorld Cutting slash',
		'https://media1.tenor.com/m/C_LTrUH8TKUAAAAd/sukuna-true-form-sukuna-vs-kashimo.gif',
	]
	await sendMessages(ctx, messages, 800)
}

module.exports = slashCommandHandler
