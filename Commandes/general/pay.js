const Discord = require("discord.js");
const COMMANDS = require('../../Utils/help')
const axios = require("axios");

module.exports.run = (client, message, args) => {

    if (args.length < 2) return message.reply("Veuillez spécifier un destinataire et un prix")
    let user = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(x => x.user.username.toLowerCase() === args.slice(0).join(" ") || x.user.username === args[0]);
    if (!user) return message.reply("Utilisateur introuvable")
    if (isNaN(args[1])) return message.reply('Veuillez entrer un montant valide');
    axios({
        method: 'put',
        url: `${client.config.setting.API_URL}/api/donate`,
        data: {
            user1: message.author.id,
            user2: user.id,
            amount: args[1]
        }
    });
    return message.channel.send(`Vous avez donné ${args[1]} à <@${user.id}>`)

}

module.exports.help = COMMANDS.GENERAL.PAY;