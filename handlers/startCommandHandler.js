const sendMessages = require('./sendMessages')
async function startCommandHandler() {
	const messages = [
		'Нехай коло ваше почне свій рух о святосте!\nВосьмиручний меч!\nСвятий воєвода!',
		'МАХОРАГА!',
	]
	await sendMessages(ctx, messages, 800)
}

module.exports = startCommandHandler
