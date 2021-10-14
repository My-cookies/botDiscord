const Discord = require("discord.js");
const {PREFIX} = require("../../config.json");
const COMMANDS = require('../../Utils/help');
const axios = require("axios");

module.exports.run = (client, message, args) => {
    
    let user = message.mentions.members.first() || message.author;
    if (isNaN(args[1])) return message.reply("veuillez spécifier un montant valide");
    axios({
        method: 'post',
        url: `http://localhost:3000/api/${user.id}/money/remove`,
        data: {
            money: args[1],
        }
    })
        .then((res) => {
            return message.channel.send(`Vous avez retiré ${args[1]} à <@${user.id}>`)
        })
        .catch((e) => {
            return message.channel.send("Une erreur est survenue lors du retrait de monnaie")
        })
}

module.exports.help = COMMANDS.GENERAL.REMOVEMONEY;