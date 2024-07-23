const getUserRole = require('../../db/getUserRole')
const sendMessages = require('../sendMessages')
async function purpleCommandHandler(ctx) {
  const username = ctx.message.from.username
  const parts = ctx.message.text.split(' ')
  const targetUsername = parts[1]
  const supportUsername = parts[2]
  const usernameRole = await getUserRole(username)
  const sanitizedTargetUsername = targetUsername.replace(/^@/, '')
  const targetUsernameRole = await getUserRole(sanitizedTargetUsername)
  async function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
  }
  if (usernameRole !== 'gojo') {
    await ctx.reply('Ти не Годжо Сатору!')
  } else {
    const messages = [
      'Phase twilight\nEyes of wisdom\nNine ropes',
      'Crow and declaration\nBetween front and back\nHollow... Purple',
      'https://media1.tenor.com/m/DSyo0NKX8gMAAAAC/gojo-satoru.gif',
    ]
    await sendMessages(ctx, messages, 850)
    await new Promise(resolve => setTimeout(resolve, 1000))
    if (targetUsernameRole) {
      if (targetUsernameRole === 'sukuna') {
        const isMahoraAdapt = Math.random()
        if (isMahoraAdapt <= 0.4) {
          await ctx.reply('Махорага зміг адаптуватись')
        } else if (isMahoraAdapt > 0.4 && isMahoraAdapt <= 0.9) {
          await ctx.reply(`@${username} влучив в ${targetUsername} фіолетовим`)
        } else if (isMahoraAdapt > 0.9 && supportUsername === '@olerxv') {
          await ctx.reply('УТАХІМЕ')
          await delay(1000)
          await ctx.replyWithAnimation(
            'https://media1.tenor.com/m/Uk3MlwmQC90AAAAd/jujutsu-kaisen-ninjaristic.gif'
          )
          await delay(850)
          await ctx.reply(
            `@${username} влучив в ${targetUsername} 200% фіолетовим, Махорага здох`
          )
        }
      } else if (targetUsernameRole === 'geto') {
        await ctx.replyWithAnimation(
          'https://media1.tenor.com/m/_zGJ55uKUfwAAAAC/geto-suguru-suguru-geto.gif'
        )
      } else {
        await ctx.reply(`@${username} влучив в ${targetUsername} фіолетовим`)
      }
    } else {
      await ctx.reply(`Фіолетовий розніс на атоми такого слабака`)
    }
  }
}

module.exports = purpleCommandHandler
