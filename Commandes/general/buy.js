const Discord = require("discord.js");
const { PREFIX } = require("../../config.json");
const COMMANDS = require('../../Utils/help');

module.exports.run = (client, message, args) => {

    let user = message.author

    let monnaie = economy.fetch(`money_${message.guild.id}_${user.id}`)

    if (args[0] === 1) {

        if (monnaie < 1000) return message.channel.send("Vous n'avez pas assez de cookoins")

        item.add(`cookies_${message.guild.id}_${user.id}`)
        economy.subtract(`money_${message.guild.id}_${user.id}`, 1000)

        return message.channel.send("Vous avez acheté votre cookie")
    }

    if (args[0] === 5) {

        if (monnaie < 4800) return message.channel.send("Vous n'avez pas asser de cookoin")

        item.add(`cookies_${message.guild.id}_${user.id}`)
        economy.subtract(`money_${message.guild.id}_${user.id}`, 4800)

        return message.channel.send("Vous avez acheté votre cookie")
    }

    if (args[0] === 10) {

        if (monnaie < 9000) return message.channel.send("Vous n'avez pas asser de cookoin")

        item.add(`cookies_${message.guild.id}_${user.id}`)
        economy.subtract(`money_${message.guild.id}_${user.id}`, 9000)

        return message.channel.send("Vous avez acheté votre cookie")
    }

    if (args[0] === 20) {

        if (monnaie < 17000) return message.channel.send("Vous n'avez pas asser de cookoin")

        item.add(`cookies_${message.guild.id}_${user.id}`)
        economy.subtract(`money_${message.guild.id}_${user.id}`, 17000)

        return message.channel.send("Vous avez acheté votre cookie")
    }

    if (args[0] === 50) {

        if (monnaie < 42000) return message.channel.send("Vous n'avez pas asser de cookoin")

        item.add(`cookies_${message.guild.id}_${user.id}`)
        economy.subtract(`money_${message.guild.id}_${user.id}`, 42000)

        return message.channel.send("Vous avez acheté votre cookie")
    }

    if (args[0] === 100) {

        if (monnaie < 80000) return message.channel.send("Vous n'avez pas asser de cookoin")

        item.add(`cookies_${message.guild.id}_${user.id}`)
        economy.subtract(`money_${message.guild.id}_${user.id}`, 80000)

        return message.channel.send("Vous avez acheté votre cookie")
    }
}

module.exports.help = COMMANDS.GENERAL.BUY;