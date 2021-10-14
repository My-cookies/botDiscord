const { randomInt } = require("crypto");
const Discord = require("discord.js");
const { PREFIX } = require("../config.js");
const economy = new db.table("Economy")

module.exports.run = (client, message, args) => {

    let user = message.mentions.members.first() || message.author;

    if (args[1] === randomInt(0, 50)) {
        economy.add(`money_${message.guild.id}_${user.id}`, 5000)
        return message.channel.send(`Vous avez gagné ${args[1]}`)
    }
}

module.exports.help = COMMANDS.GENERAL.ROULETTE;