const Discord = require("discord.js");
const {PREFIX} = require("../config.js");
const economy = new db.table("Economy")

module.exports.run = (client, message, args) => {

    let Owner = ''
    if (message.author.id !== Owner) return;
    
    let user = message.mentions.members.first() || message.author;
    if (isNumber(args[1])) return;
    economy.add(`money_${message.guild.id}_${user.id}`, args[1])

    return message.channel.send(`Vous avez donné ${args[1]}`)
}

module.exports.help = COMMANDS.GENERAL.ADDMONEY;