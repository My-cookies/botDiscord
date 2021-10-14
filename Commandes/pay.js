const Discord = require("discord.js");
const {PREFIX} = require("../config.js");
const economy = new db.table("Economy")
const item = new db.table("Cookies")

module.exports.run = (client, message, args) => {
    
    let user = message.author

    let monnaie = economy.fetch(`money_${message.guild.id}_${user.id}`)

    if (monnaie < args[1]) return message.channel.send("Vous n'avez pas asser de cookoin")

    economy.add(`money_${message.guild.id}_${user.id}`,args[1])
    economy.subtract(`money_${message.guild}_${user}`, args[1])

    return message.channel.send(`Vous avez donné ${args[1]}`)
}

module.exports.help = COMMANDS.GENERAL.PAY;