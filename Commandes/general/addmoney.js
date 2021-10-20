const Discord = require("discord.js");
const axios = require('axios')
const COMMANDS = require('../../Utils/help')

module.exports.run = (client, message, args) => {

    if (args.length < 2) return message.reply("Veuillez spécifier un destinataire et un prix")
    let user = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(x => x.user.username.toLowerCase() === args.slice(0).join(" ") || x.user.username === args[0]);
    if (!user) return message.reply("Utilisateur introuvable")
    if (isNaN(args[1])) return message.reply('Veuillez entrer un montant valide');
    axios({
        method: 'post',
        url: `${client.config.setting.API_URL}/api/${user.id}/money/add`,
        data: {
            money: args[1]
        }
    });

    return message.channel.send(`Vous avez donné ${args[1]} à <@${user.id}>`)
}

module.exports.help = COMMANDS.GENERAL.ADDMONEY;