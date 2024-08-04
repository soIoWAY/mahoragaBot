const sendMessages = require('./sendMessages')
async function startCommandHandler(ctx) {
	const messages = [
		'Дзвони дзвенять\nРеліквії похитуються 🔔',
		'Нехай коло ваше почне свій рух о святосте!\nВосьмиручний меч!\nСвятий воєвода! 🗡',
		'МАХОРАГА!',
	]
	await sendMessages(ctx, messages, 800)
}

module.exports = startCommandHandler
