require('dotenv').config()
const { Telegraf } = require('telegraf')
const { Client } = require('pg')
const weatherCommandHandler = require('../handlers/weatherCommand')
const rtgCommandHandler = require('../handlers/gojo/rtgCommandHandler')
const rtsCommandHandler = require('../handlers/sukuna/rtsCommandHandler')
const rtmCommandHandler = require('../handlers/rtmCommandHandler')
const topmCommandHandler = require('../handlers/topmCommandHandler')
const purpleCommandHandler = require('../handlers/gojo/purpleCommandHandler')
const slashCommandHandler = require('../handlers/sukuna/slashCommandHandler')
const banWords = require('../content/banWords')
const clowns = require('../content/clowns')
const gNames = require('../content/gNames')
const startCommandHandler = require('../handlers/startCommandHandler')
const wdragoCommandHandler = require('../handlers/geto/wdragoCommandHandler')
const wormCommandHanlder = require('../handlers/geto/wormCommandHandler')
const rolesCommandHandler = require('../handlers/rolesCommandHandler')
const ceyCommandHandler = require('../handlers/geto/ceyCommandHandler')
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

const token = process.env.TOKEN
const bot = new Telegraf(token)

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

bot.start(startCommandHandler)

bot.command('weatherNow', weatherCommandHandler)
// Satoru
bot.command('purple', purpleCommandHandler)
// Sukuna
bot.command('slash', slashCommandHandler)
// geto
bot.command('rika', wdragoCommandHandler)
bot.command('worm', wormCommandHanlder)
bot.command('cey', ceyCommandHandler)
// Mahito
bot.command('rtm', rtmCommandHandler)
// general
bot.command('roles', rolesCommandHandler)
bot.command('topm', ctx => topmCommandHandler(ctx, topUsersByMessage))

bot.on('text', async ctx => {
	const messageText = ctx.message.text
	const username = ctx.message.from.username
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
	} else if (messageText.toLocaleLowerCase().includes('виклик')) {
		const messageText = ctx.message.text
		const parts = messageText.split(' ')
		const username = ctx.message.from.username
		const targetUsername = parts[1]
		const randomEq = Math.round(Math.random())
		const usernames = ['xzvetal', 'H4untt']
		if (usernames.includes(username)) {
			if (messageText.includes('NightHanami')) {
				await ctx.reply(
					`@${username} розпочав битву територій проти ${targetUsername}`
				)
				await new Promise(resolve => setTimeout(resolve, 800))
				await ctx.reply('Прибув Годжо Сатору')
				await new Promise(resolve => setTimeout(resolve, 800))
				await ctx.replyWithAnimation(
					'https://media1.tenor.com/m/KprNz_Lhdr4AAAAd/sukuna-gojo.gif'
				)
				await new Promise(resolve => setTimeout(resolve, 800))
				await ctx.replyWithAnimation(
					'https://media1.tenor.com/m/86T288RZJrEAAAAC/jujutsu-kaisen-season-2.gif'
				)
				await new Promise(resolve => setTimeout(resolve, 800))
				await ctx.reply(`@xzvetal & @NightHanami перемогли`)
				await new Promise(resolve => setTimeout(resolve, 800))
				await ctx.replyWithAnimation(
					'https://media1.tenor.com/m/80PqNpBssIgAAAAd/gojo-satoru-gojo.gif'
				)
			} else {
				try {
					await ctx.reply(
						`@${username} розпочав битву територій проти ${targetUsername}`
					)
					await new Promise(resolve => setTimeout(resolve, 800))
					await rtgCommandHandler(ctx)
					await new Promise(resolve => setTimeout(resolve, 800))
					await rtsCommandHandler(ctx)
					await new Promise(resolve => setTimeout(resolve, 800))
					await ctx.replyWithAnimation(
						'https://media1.tenor.com/m/KprNz_Lhdr4AAAAd/sukuna-gojo.gif'
					)
					await new Promise(resolve => setTimeout(resolve, 1000))
					// username & hp check
					if (randomEq) {
						await ctx.reply(`Переміг @${username}`)
						await new Promise(resolve => setTimeout(resolve, 800))
					} else {
						await ctx.reply(`Переміг ${targetUsername}`)
						await new Promise(resolve => setTimeout(resolve, 800))
					}
				} catch (error) {
					console.error('Помилка:', error)
				}
			}
		} else {
			await ctx.reply('Якаааа тобі битва територій? Що ти будеш розширювати?')
		}
	} else if (messageText.toLocaleLowerCase().includes('я програв')) {
		if (username === 'xzvetal') {
			await ctx.reply('.......')
			await new Promise(resolve => setTimeout(resolve, 1000))
			await ctx.reply('Прокинься і подивись на реальність...')
			await new Promise(resolve => setTimeout(resolve, 2500))
			await ctx.reply(
				'Не завжди все йде за планом.\nВ світі де є світло, завжди буде і темрява.\nПоки є переможці, доти будуть і переможені.\nА егоїстичне бажання миру завжди веде до війни'
			)
			await new Promise(resolve => setTimeout(resolve, 1000))
			await ctx.reply('ТОЖ ПОРИНЬТЕ ВСІ В ВІЧНЕ ЦУКУЙОМІ')
			await new Promise(resolve => setTimeout(resolve, 1500))
			await ctx.replyWithAnimation(
				'https://media1.tenor.com/m/YbopFZINhUkAAAAC/madara-uchiha-madara.gif'
			)
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
