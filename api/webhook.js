require('dotenv').config()
const { Telegraf } = require('telegraf')
const { Client } = require('pg')
const client = new Client({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
})

client
  .connect()
  .then(() => console.log('Успішно підключено до бази даних PostgreSQL'))
  .catch(err => console.error('Помилка підключення до бд: ', err))

const createTableQuery = `
  CREATE TABLE IF NOT EXISTS user_messages (
    id SERIAL PRIMARY KEY,
    user_id INTEGER,
    username TEXT,
    message_count INTEGER DEFAULT 0,
    ban_message_count INTEGER DEFAULT 0
  );
`

client
  .query(createTableQuery)
  .then(() => console.log('Таблиця user_messages створена успішно'))
  .catch(err => console.error('Помилка створення таблиці:', err))

const weatherCommandHandler = require('../handlers/weatherCommand')
const rtgCommandHandler = require('../handlers/rtgCommandHandler')
const rtsCommandHandler = require('../handlers/rtsCommandHandler')
const rtmCommandHandler = require('../handlers/rtmCommandHandler')

const token = process.env.TOKEN
const bot = new Telegraf(token)

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

async function updateBanMessageCount(user_id, username) {
  try {
    const query = 'SELECT * FROM user_messages WHERE user_id = $1'
    const { rows } = await client.query(query, [user_id])

    if (rows.length === 0) {
      const insertQuery =
        'INSERT INTO user_messages (user_id, username, ban_message_count) VALUES ($1, $2, 1)'
      await client.query(insertQuery, [user_id, username])
    } else {
      const updateQuery =
        'UPDATE user_messages SET ban_message_count = ban_message_count + 1 WHERE user_id = $1'
      await client.query(updateQuery, [user_id])
    }
  } catch (err) {
    console.error('Помилка зміни кількості повідомлень в бд: ', err)
  }
}

async function updateMessageCount(user_id, username) {
  try {
    const query = 'SELECT * FROM user_messages WHERE user_id = $1'
    const { rows } = await client.query(query, [user_id])

    if (rows.length === 0) {
      const insertQuery =
        'INSERT INTO user_messages (user_id, username, message_count) VALUES ($1, $2, 1)'
      await client.query(insertQuery, [user_id, username])
    } else {
      const updateQuery =
        'UPDATE user_messages SET message_count = message_count + 1 WHERE user_id = $1'
      await client.query(updateQuery, [user_id])
    }
    console.log('Оновлено кількість повідомлень для користувача:', username)
  } catch (err) {
    console.error('Помилка оновлення кількості повідомлень в базі даних:', err)
  }
}

async function topUsersByMessage() {
  try {
    const query = `
      SELECT username, message_count, ban_message_count 
      FROM user_messages 
      ORDER BY (message_count + ban_message_count) DESC 
      LIMIT 10;
    `
    const { rows } = await client.query(query)

    return rows
  } catch (err) {
    console.error('Помилка зчитування даних з бд:', err)
  }
}

bot.start(async ctx => {
  const messages = [
    'Нехай коло ваше почне свій рух о святосте!',
    'Восьмиручний меч!',
    'Святий воєвода!',
    'МАХОРАГА!',
  ]
  await sendMessages(ctx, messages, 800)
})

bot.command('weatherNow', weatherCommandHandler)
bot.command('rtg', rtgCommandHandler)
bot.command('rts', rtsCommandHandler)
bot.command('rtm', rtmCommandHandler)
bot.command('purple', async ctx => {
  const messages = [
    'Phase twilight',
    'Eyes of wisdom',
    'Nine ropes',
    'Crow and declaration',
    'Between front and back',
    'Hollow... Purple',
    'https://media1.tenor.com/m/DSyo0NKX8gMAAAAC/gojo-satoru.gif',
  ]
  await sendMessages(ctx, messages, 800)
})
bot.command('slash', async ctx => {
  const messages = [
    'Scale of the dragon',
    'Recoil',
    'Twin meteors',
    'World Cutting slash',
    'https://media1.tenor.com/m/C_LTrUH8TKUAAAAd/sukuna-true-form-sukuna-vs-kashimo.gif',
  ]
  await sendMessages(ctx, messages, 800)
})
bot.command('topm', async ctx => {
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
})

bot.on('text', async ctx => {
  const messageText = ctx.message.text
  const username = ctx.message.from.username
  const clowns = ['дім', 'матв', 'чудо', 'колпаков']
  const gNames = ['оля', 'дарин', 'олен', 'март', 'ярин', 'марічк']
  const banWords = [
    'сук',
    'бля',
    'пізда',
    'уйобищ',
    'єбало',
    'їба',
    'пезд',
    'йобнут',
    'підар',
    'дебіл',
    'лох',
    'хуй',
  ]
  if (
    messageText.toLocaleLowerCase().includes('жінка') ||
    messageText === 'МАХОРАГА ХЕЛП'
  ) {
    try {
      await ctx.replyWithAnimation(
        'https://media1.tenor.com/m/xxTiQVYbcAAAAAAd/jujutsu-kaisen-shibuya-arc-mahoraga-shibuya-arc.gif'
      )
    } catch (err) {
      console.error('Помилка надсилання анімації: ', err)
    }
  } else if (
    messageText.includes('@general_mahoraga_bot') &&
    username !== 'xzvetal'
  ) {
    try {
      await ctx.reply('Алло бездарність, як ти смієш мене тегати?!')
    } catch (error) {
      console.error('Помилка надсилання повідомлення: ', error)
    }
  } else if (messageText.includes('МАХОРАГА') && username !== 'xzvetal') {
    try {
      await ctx.reply('*плюнув*')
    } catch (error) {
      console.error('Помилка надсилання повідомлення: ', error)
    }
  } else if (
    messageText === '@general_mahoraga_bot' ||
    (messageText === 'МАХОРАГА' && username === 'xzvetal')
  ) {
    try {
      await ctx.reply('Ваш вірний слуга до ваших послуг!')
    } catch (error) {
      console.error('Помилка надсилання повідомлення: ', error)
    }
  } else if (
    messageText.toLocaleLowerCase().includes('тихо') ||
    messageText.toLocaleLowerCase().includes('тихе')
  ) {
    try {
      await ctx.reply('Гаааааааааа?')
    } catch (error) {
      console.error(error)
    }
  } else if (messageText.toLocaleLowerCase().includes('шо то норм')) {
    try {
      await ctx.reply('А яке')
    } catch (error) {
      console.error(error)
    }
  } else if (messageText.toLocaleLowerCase().includes('школ')) {
    try {
      await ctx.reply('Топтав ту школу')
    } catch (error) {
      console.error(error)
    }
  } else if (messageText.toLocaleLowerCase().includes('ти програєш')) {
    try {
      await ctx.reply('Nah, Id Adapt')
    } catch (error) {
      console.error(error)
    }
  } else if (
    gNames.some(gName => messageText.toLocaleLowerCase().includes(gName))
  ) {
    try {
      await ctx.reply('))')
    } catch (error) {
      console.error(error)
    }
  } else if (
    clowns.some(clown => messageText.toLocaleLowerCase().includes(clown))
  ) {
    try {
      await ctx.reply(
        `ХАХАХАХАХАХАХАХАХХАХАХ НАХУЯ ВИ ТО ЧЕРПАЦЬКЕ ІМЯ ЗГАДУЄТЕ`
      )
    } catch (error) {
      console.error(error)
    }
  } else if (
    banWords.some(word => messageText.toLocaleLowerCase().includes(word))
  ) {
    try {
      const user_id = ctx.message.from.id
      const username = ctx.message.from.username
      await updateBanMessageCount(user_id, username)
    } catch (error) {
      console.error(error)
    }
  } else if (messageText.toLocaleLowerCase() === 'макс') {
    try {
      await ctx.replyWithPhoto('https://i.imgur.com/tKeUWiN.jpeg')
    } catch (error) {
      console.error(error)
    }
  } else if (messageText.toLocaleLowerCase().startsWith('виклик')) {
    const parts = messageText.split(' ')
    if (parts.length !== 2) {
      await ctx.reply("Неправильний формат. Введіть 'виклик юзернейм'.")
      return
    }

    const username = ctx.message.from.username
    const messageText = ctx.message.text
    const targetUsername = parts[1]

    try {
      await ctx.replyWithAnimation(
        `@${username} кинув виклик ${targetUsername}`
      )
      await new Promise(resolve => setTimeout(resolve, 800))
      await ctx.replyWithAnimation(
        'https://media1.tenor.com/m/KprNz_Lhdr4AAAAd/sukuna-gojo.gif'
      )
    } catch (error) {
      console.error('Помилка:', error)
    }
  } else {
    const user_id = ctx.message.from.id
    const username = ctx.message.from.username
    await updateMessageCount(user_id, username)
  }
})

module.exports = async (req, res) => {
  await bot.handleUpdate(req.body, res)
  res.status(200).end()
}
