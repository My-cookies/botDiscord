const Discord = require("discord.js");
const {PREFIX} = require("../../config.json");
const COMMANDS = require('../../Utils/help');
module.exports.run = (client, message, args) => {

    let user = message.author
    let argent = economy.fetch(`money_${message.guild.id}_${user.id}`)
    if (argent === null) argent = 0

    let items = item.fetch(`cookies_${message.guild.id}_${user.id}`)
    if (items === null) items = 0

return message.channel.send(`${argent}**cookoins** Cookies **${items}**`)
}

module.exports.help = COMMANDS.GENERAL.SEEMONEY;