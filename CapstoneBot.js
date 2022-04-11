require('dotenv').config()              //So that i dont have to upload the bot token to github
//for this to work as is, you need to create a file in the same directory as this one, title it ".env"
//within .env there should be one (1) line, and it should be:
//TOKEN="bottokengoesherekeepthequotationmarks"
const { Client, Intents } = require('discord.js'); // Import relevant classes from discord.js
const client = new Client( // Instantiate a new client with some necessary parameters.
    { intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] }
);

function buildReply(message) {
    var sendMe = ""
    switch (message.content) {
        case message.content.match(/generator/i).input:
            switch (message.content) {
                case message.content.match(/kwh|capacity|output/i).input:
                    sendMe = sendMe.concat("Your Current Generator is rated for 1000 kWh, the New generator will be rated for 4000 kWh but won't arrive for 12 months.\n")
                    break
                case message.content.match(/borrow|lend|extra.+generator|another.+generator/i).input:
                    sendMe = sendMe.concat("We do not have a spare generator that can be borrowed.\n")
                    break
                default:
                    sendMe = sendMe.concat("I'm not sure what you're asking here\n")
                    break
            }
            break;
        case message.content.match(/.+team|technicians|people/i).input:
            sendMe = sendMe.concat("We have a team of 4 technicians available.\n")
            switch (message.content) {
                case message.content.match(/lmr/i).input:
                    sendMe = sendMe.concat("we will have our own LMRs.\n")
                    break;
                case message.content.match(/what.+?plan/i).input:
                    sendMe = sendMe.concat("The plan includes us removing panels and clearing lanes and anything else that could save us time before we kill building power. We'll do our job and run the neutral return, that takes about five minutes to include egress.\n")
                    sendMe = sendMe.concat("We cannot segment the work. We can either finish the job or roll back. Plan on it taking about a minute to roll back.\n")
                    break;
                default:
                    sendMe = sendMe.concat("Don't try to micromanage my team\n")
                    break;
            }
            break;
        case message.content.match(/UPS/i).input:
            switch (message.content) {
                case message.content.match(/charge/i).input:
                    sendMe = sendMe.concat("Your new UPS is currently 50% charged from the factory and after we finish the job, it will take 2 hours before it reaches 100% charge.\n")
                    sendMe = sendMe.concat("Once the new UPS reaches 100% charge, it will be able to maintain power to all your devices for 1 hour.\n")
                    break;
                case message.content.match(/wiring|wired|connected/i).input:
                    sendMe = sendMe.concat("The new UPS will be wired to the building power independently from the old UPS.\n")
                    break;
                case message.content.match(/remove/i).input:
                    sendMe  = sendMe.concat("We will remove the old UPS at at later date.\n")
                    break;
                case message.content.match(/neutral.return/i).input:
                    sendMe  = sendMe.concat("The facility power must be cut off before we can run the neutral return to the new UPS but, if you want your devices to remain powered on, the old UPS can still be discharging while we run that neutral return.\n")
                    break;
                case message.content.match(/old.+UPS/i).input:
                    sendMe  = sendMe.concat("The old UPS is obsolete and too degraded to replace the batteries. If we could have done that, we wouldn't have purchased the new UPS.\n")
                    break;
                case message.content.match(/voltage/i).input:
                    sendMe  = sendMe.concat("We cannot monitor the voltage. It gives a reading but the reading is unreliable.\n")
                    break;
                default:
                    sendMe  = sendMe.concat("In regards to the rest, You'll have to direct that to my flight commander, Capt Cousins\n")
                    break;
            }
        case message.content.match(/power.?study/i).input:
            sendMe = sendMe.concat("I'm not sure how much time that would save. It would take another power study to know for sure.\n")
            break;
        default:
            sendMe = sendMe.concat("I don't have the answer you need.\n")
            console.log("it did not work")
            break;
    }
    //generator questions
    //if (message.content.match(/generator/i)){
    //    if (message.content.match(/kwh|capacity|output/i)) {
    //        sendMe = sendMe.concat("Your Current Generator is rated for 1000 kWh, the New generator will be rated for 4000 kWh but won't arrive for 12 months.\n")
    //    }
    //    if (message.content.match(/borrow|lend|extra.+generator|another.+generator/i)) {
    //        sendMe = sendMe.concat("We do not have a spare generator that can be borrowed.\n")
    //    }
    //    else {
    //        sendMe = sendMe.concat("I'm not sure what you're asking here\n")
    //    }
    //}
    //team questions
    //if (message.content.match(/.+team|technicians|people/i)){
    //    sendMe = sendMe.concat("We have a team of 4 technicians available.\n")
    //    if (message.content.match(/lmr/i)) {
    //        sendMe = sendMe.concat("we will have our own LMRs.\n")
    //    }
    //    if (message.content.match(/what.+?plan/i)) {
    //        sendMe = sendMe.concat("The plan includes us removing panels and clearing lanes and anything else that could save us time before we kill building power. We'll do our job and run the neutral return, that takes about five minutes to include egress.\n")
    //        sendMe = sendMe.concat("We cannot segment the work. We can either finish the job or roll back. Plan on it taking about a minute to roll back.\n")
    //   }
    //    else {
    //        sendMe = sendMe.concat("Don't try to micromanage my team\n")
    //    }
    //}
    //UPS questions
    //if (message.content.match(/UPS/i)) {
    //    if (message.content.match(/charge/i)){
    //        sendMe = sendMe.concat("Your new UPS is currently 50% charged from the factory and after we finish the job, it will take 2 hours before it reaches 100% charge.\n")
    //        sendMe = sendMe.concat("Once the new UPS reaches 100% charge, it will be able to maintain power to all your devices for 1 hour.\n")
    //    }
    //    if (message.content.match(/wiring|wired|connected/i)) {
    //        sendMe = sendMe.concat("The new UPS will be wired to the building power independently from the old UPS.\n")
    //    }
    //    if (message.content.match(/remove/i)) {
    //       sendMe  = sendMe.concat("We will remove the old UPS at at later date.\n")   
    //    }
    //    if (message.content.match(/neutral.return/i)) {
    //        sendMe  = sendMe.concat("The facility power must be cut off before we can run the neutral return to the new UPS but, if you want your devices to remain powered on, the old UPS can still be discharging while we run that neutral return.\n")
    //    }
    //    if (message.content.match(/old.+UPS/i)) {
    //        sendMe  = sendMe.concat("The old UPS is obsolete and too degraded to replace the batteries. If we could have done that, we wouldn't have purchased the new UPS.\n")
    //    }
    //    if (message.content.match(/voltage/i)) {
    //        sendMe  = sendMe.concat("We cannot monitor the voltage. It gives a reading but the reading is unreliable.\n")
    //    }
    //    else {
    //        sendMe  = sendMe.concat("In regards to the rest, You'll have to direct that to my flight commander, Capt Cousins\n")
    //    }
    //}
    //if (message.content.match(/power.study/i)) {
    //    sendMe = sendMe.concat("I'm not sure how much time that would save. It would take another power study to know for sure.\n")
    //}
    //else {
    //    sendMe = sendMe.concat("I don't have the answer you need.\n")
    //}
    sendMe = sendMe.concat("\n-RANDY “SPARKY” BROWN, MSgt, 333 CES\nNCOIC, Electrical Engineering")
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