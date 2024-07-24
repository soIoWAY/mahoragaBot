async function rolesCommandHandler(ctx) {
  await ctx.reply('Годжо Сатору:\n/purple')
  await new Promise(resolve => setTimeout(resolve, 800))
  await ctx.reply('Рьомен Сукуна:\n/slash')
  await new Promise(resolve => setTimeout(resolve, 800))
  await ctx.reply('Гето Сугуру:\n/rika')
  await new Promise(resolve => setTimeout(resolve, 800))
  await ctx.reply('Спільні команди:\n/vs - дуель')
  await new Promise(resolve => setTimeout(resolve, 800))
  await ctx.reply('Доступні ролі:\nМахіто')
}

module.exports = rolesCommandHandler
