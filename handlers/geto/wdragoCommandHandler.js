const getUserRole = require('../../db/getUserRole')

async function wdragoCommandHandler(ctx) {
  const username = ctx.message.from.username
  const parts = ctx.message.text.split(' ')
  const targetUsername = parts[1]
  const usernameRole = getUserRole(username)
  const sanitizedTargetUsername = targetUsername.replace(/^@/, '')
  const targetUsernameRole = getUserRole(sanitizedTargetUsername)
  async function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
  }
  if (usernameRole !== 'geto') {
    await ctx.reply('Ти не Гето Сугуру!')
  } else {
    await ctx.reply('Маніпуляція прокляттями... 👾')
    await delay(850)
    await ctx.reply('Королева проклять!')
    await delay(850)
    await ctx.reply('Ріка!')
    await delay(850)
    await ctx.replyWithAnimation(
      'https://media1.tenor.com/m/oJGVvk77WMoAAAAC/rika-vol0.gif'
    )
    if (targetUsernameRole) {
      if (targetUsernameRole === 'gojo') {
        await ctx.replyWithAnimation(
          'https://media1.tenor.com/m/_zGJ55uKUfwAAAAC/geto-suguru-suguru-geto.gif'
        )
      } else if (targetUsernameRole === 'sukuna') {
        const isAdapt = Math.random()
        if (isAdapt <= 0.4) {
          await ctx.reply(`${targetUsername} з Махорагою ухилились`)
        } else if (isAdapt > 0.4 && isAdapt <= 0.93) {
          await ctx.reply(`Ріка знесла половину хп ${targetUsername}`)
        } else {
          await ctx.reply(`Ріка знищила ${targetUsername}`)
        }
      } else {
        await ctx.reply(`Ріка знищила ${targetUsername}`)
      }
    } else {
      await ctx.reply('Така слабка мавпа стала кормом для моїх проклять')
    }
  }
}

module.exports = wdragoCommandHandler
