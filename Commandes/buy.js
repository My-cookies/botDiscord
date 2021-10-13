const Discord = require("discord.js");
const {PREFIX} = require("../config.js");
const economy = new db.table("Economy")
const item = new db.table("Cookies")

module.exports.run = (client, message, args) => {
    
    let user = message.author

    let monnaie = economy.fetch(`money_${message.guild.id}_${user.id}`)

    if (args[0] === 1) {

        if (monnaie < 1000) return message.channel.send("Vous n'avez pas asser de cookoin")

        item.add(`cookies_${message.guild.id}_${user.id}`)
        economy.subtract(`money_${message.guild.id}_${user.id}`, 1000)

        return message.channel.send("Vous avez acheté")
    }
}

module.exports.help = {
    name: 'buy',
  };