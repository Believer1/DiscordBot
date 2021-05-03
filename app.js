const Discord = require('discord.js')
require('dotenv').config();

const client = new Discord.Client()

client.login(process.env.BOT_TOKEN)


client.on('ready', () => {
  console.log('bot is ready')
})

client.on('message', (msg) => {
  const responses = [
		"It is certain",
		"It is decidedly so",
		"Without a doubt",
		"Yes – definitely",
		"You may rely on it",
		"As I see it",
		"yes",
		"Most Likely",
		"Outlook good",
		"Yes",
		"Signs point to yes"
	];

	const randomIndex = Math.floor(Math.random() * responses.length);
  if (msg.content === 'Yahallo!') msg.reply(":wave:")
  else if (msg.content.includes("!8ball")) msg.reply(responses[randomIndex])
})


