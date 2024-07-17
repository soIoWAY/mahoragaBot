async function topmCommandHandler(ctx, topUsersByMessage) {
	try {
		const rows = await topUsersByMessage()

		let message = 'Топ за кількістю повідомлень:\n'
		rows.forEach((row, index) => {
			message += `${index + 1}. @${row.username} - Повідомлення: ${
				row.message_count + row.ban_message_count
			}, з них матів: ${row.ban_message_count}\n`
		})

		await ctx.reply(message)
	} catch (err) {
		console.error('Помилка виконання команди topm: ', err)
	}
}

module.exports = topmCommandHandler
