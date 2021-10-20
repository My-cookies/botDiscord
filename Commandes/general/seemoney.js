const Discord = require("discord.js");
const COMMANDS = require('../../Utils/help')
const axios = require("axios");

module.exports.run = (client, message, args) => {

    if (!args.length) return message.reply("Veuillez spécifier un utilisateur")
    let user = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(x => x.user.username.toLowerCase() === args.slice(0).join(" ") || x.user.username === args[0]);
    if (!user) return message.reply("Utilisateur introuvable")
    axios({
        method: 'get',
        url: `${client.config.setting.API_URL}/api/${user.id}/seemoney`,
    }).then(r => {
        return message.channel.send(`L'argent de <@${user.id}> est de ${r.data.money}`)
    })
}

module.exports.help = COMMANDS.GENERAL.SEEMONEY;