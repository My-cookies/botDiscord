const Discord = require("discord.js");
const {PREFIX} = require("../config.js");
const economy = new db.table("Economy")

module.exports.run = (client, message, args) => {

    return message.channel.send("`1` cookies : 1000\n `5` cookies : 4800\n `10` cookies : 9000\n `20` cookies : 17000\n `50` cookies : 42000\n `100` cookies : 80000")
}

module.exports.help = COMMANDS.GENERAL.SHOP;