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

module.exports = sendMessages
