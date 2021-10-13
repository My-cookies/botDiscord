const Discord = require("discord.js");
const {PREFIX} = require("../config.js");
const economy = new db.table("Economy")

module.exports.run = (client, message, args) => {

    return message.channel.send("`1` : cookies")
}

module.exports.help = {
    name: 'shop',
  };