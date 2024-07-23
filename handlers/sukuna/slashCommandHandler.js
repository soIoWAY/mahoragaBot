const getUserRole = require('../../db/getUserRole')
const sendMessages = require('../sendMessages')
async function slashCommandHandler(ctx) {
  const username = ctx.message.from.username
  const parts = ctx.message.text.split(' ')
  const targetUsername = parts[1]
  const sanitizedTargetUsername = targetUsername.replace(/^@/, '')
  const usernameRole = await getUserRole(username)
  const targetUsernameRole = await getUserRole(sanitizedTargetUsername)
  async function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
  }
  if (usernameRole !== 'sukuna') {
    await ctx.reply('Ти не Рьомен Сукуна!')
  } else {
    const messages = [
      'Scale of the dragon\nRecoil\nTwin meteors\nWorld Cutting slash',
      'https://media1.tenor.com/m/C_LTrUH8TKUAAAAd/sukuna-true-form-sukuna-vs-kashimo.gif',
    ]
    await sendMessages(ctx, messages, 850)
    await delay(850)
    if (targetUsernameRole) {
      const isAdapt = Math.random()
      if (targetUsernameRole === 'gojo') {
        if (isAdapt <= 0.35) {
          await ctx.reply('Сатору зміг ухилитись')
        } else if (isAdapt > 0.35 && isAdapt <= 0.9) {
          await ctx.reply(`@${username} влучив в ${targetUsername} розрізом`)
        } else {
          await ctx.reply('Я ніколи тебе не забуду Годжо Сатору!')
          await delay(1000)
          await ctx.replyWithAnimation(
            'https://media1.tenor.com/m/nuUP6703DS4AAAAd/gojo-sukuna.gif'
          )
        }
      } else if (targetUsernameRole === 'geto') {
        if (isAdapt <= 0.25) {
          await ctx.reply(`Райдужний дракон прикрив ${targetUsername}`)
        } else {
          await ctx.reply(`@${username} влучив в ${targetUsername} розрізом`)
        }
      } else {
        await ctx.reply(`@${username} влучив в ${targetUsername} розрізом`)
      }
    } else {
      await ctx.reply(
        `Я хотів порізати тебе на три частини, але порізав на сім, бо ти слабак!`
      )
    }
  }
}

module.exports = slashCommandHandler
