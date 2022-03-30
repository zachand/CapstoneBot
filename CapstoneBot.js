require('dotenv').config()              //So that i dont have to upload the bot token to github
const { Client, Intents } = require('discord.js'); // Import relevant classes from discord.js
const client = new Client( // Instantiate a new client with some necessary parameters.
    { intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] }
);

client.on('ready', function(e) {
    console.log(`Logged in as ${client.user.tag}!`)
})

client.on('messageCreate', function (msg) {
    if (msg.content.match(/^[t|T]eam\s+\d{1,2}\s+[rfi|RFI]{3}\s+\d+:\s+?\w+\s\w+,/)) {
        console.log("success")
    }
})

client.login(process.env.TOKEN)