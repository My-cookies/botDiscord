const { randomInt } = require("crypto");
const Discord = require("discord.js");
const { PREFIX } = require("../../config.json");
const COMMANDS = require('../../Utils/help');

module.exports.run = (client, message, args) => {

    let user = message.mentions.members.first() || message.author;
    economy.add(`money_${message.guild.id}_${user.id}`, randomInt(100, 1000))

    return message.channel.send(`Vous avez gagné ${cookies} cookoins !`)
}

module.exports.help = COMMANDS.GENERAL.WORK;