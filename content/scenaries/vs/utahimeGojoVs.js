async function delay(ms) {
	return new Promise(resolve => setTimeout(resolve, ms))
}
const utahimeGojo = async ctx => {
	await ctx.replyWithAnimation(
		'https://media1.tenor.com/m/pG39SMAYC_gAAAAC/utahimethrowingtea.gif'
	)
	delay(850)
	await ctx.reply('Хе-хе-хе. Неможливо, ти ж слабачка)')
}

module.exports = { utahimeGojo }
