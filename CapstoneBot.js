require('dotenv').config()              //So that i dont have to upload the bot token to github
const { Client, Intents } = require('discord.js'); // Import relevant classes from discord.js
const client = new Client( // Instantiate a new client with some necessary parameters.
    { intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] }
);

function buildReply(message) {
    var sendMe = ""
    if (message.content.match(/generator/i)){
        if (message.content.match(/kwh|capacity|output/i)) {
            sendMe = sendMe.concat("Your Current Generator is rated for 1000 kWh, the New generator will be rated for 4000 kWh but won't arrive for 12 months.\n")
        }
        if (message.content.match(/borrow|lend|extra.+generator/i)) {
            sendMe = sendMe.concat("We do not have a spare generator that can be borrowed.\n")
        }
        else {
            sendMe = sendMe.concat("I'm not sure what you're asking here\n")
        }
    }
    sendMe = sendMe.concat("\nRANDY “SPARKY” BROWN, MSgt, 333 CES\nNCOIC, Electrical Engineering")
    return sendMe
}


client.on('ready', function(e) {
    console.log(`Logged in as ${client.user.tag}!`)
})

client.on('messageCreate', function (msg) {
    if (msg.content.match(/^[t|T]eam\s+\d{1,2}\s+rfi\s+\d+:/i)) {
        if (msg.content.match(/msgt\s\w+,/i)) {
            msg.reply(buildReply(msg))  
        } 
    }
})

client.login(process.env.TOKEN)

/*
the bot needs to do things when....
  a message is recieved
  the bot comes online

when a message is recieved...
    check if it is an RFI or a follow up
    determine which topic is being asked about
    determine the sub-topic that is being asked about
    respond with all available information on the topic

when the bot comes online...
    tell the person running the script
*/