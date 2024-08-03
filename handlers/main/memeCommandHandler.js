const { default: axios } = require('axios')

async function memeCommandHandler(ctx) {
	try {
		const memeApi =
			'https://www.reddit.com/r/dankmemes/top/.json?limit=1&t=hour'
		const res = await axios.get(memeApi)
		await ctx.replyWithPhoto(res.data.children[0].data.url_overridden_by_dest)
	} catch (err) {
		console.error(err)
	}
}

module.exports = memeCommandHandler
