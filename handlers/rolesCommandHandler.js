async function rolesCommandHandler(ctx) {
	await ctx.reply(
		'🟣 Годжо Сатору:\n /purple\n⛩ Рьомен Сукуна:\n /slash\n👾 Гето Сугуру:\n /rika\n🔴 Юджі Ітадорі: \n /bl\n 🔨 Кугісакі Нобара:\n /res'
	)
	await new Promise(resolve => setTimeout(resolve, 800))
	await ctx.reply('Спільні команди:\n/vs - дуель')
	await new Promise(resolve => setTimeout(resolve, 800))
}

module.exports = rolesCommandHandler
