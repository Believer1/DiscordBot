const Discord = require('discord.js')
require('dotenv').config();

const client = new Discord.Client()

client.login(process.env.BOT_TOKEN)


client.on('ready', () => {
  console.log('bot is ready')
})

client.on('message', (msg) => {
  const responses = [
						'Yes',
            'It is certain',
            'It is decidedly so',
            'Without a doubt',
            'Yes definitely',
            'You may rely on it',
            'As I see it, yes',
            'Most likely',
            'Outlook good',
            'Signs point to yes',
            'Reply hazy try again',
            'Ask again later',
            'Better not tell you now',
            'Cannot predict now',
            'Concentrate and ask again',
            'Don\'t count on it',
            'My reply is no',
            'My sources say no',
            'Outlook not so good',
            'Very doubtful',
	];

	const randomIndex = Math.floor(Math.random() * responses.length);
  if (msg.content === 'Yahallo!') msg.reply("https://tenor.com/view/yui-yuigahama-yahallo-gif-18724491")
  else if (msg.content.includes("!8ball")) msg.reply(responses[randomIndex])
  else if (msg.content === 'Sheeesh') msg.reply('https://tenor.com/view/sheesh-gif-21357175')
})


