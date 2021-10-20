const Discord = require("discord.js");
const COMMANDS = require('../../Utils/help')
const axios = require("axios");
const {MessageEmbed} = require("discord.js");

module.exports.run = (client, message, args) => {
    axios({
        method: 'get',
        url: `${client.config.setting.API_URL}/api/user/top`,
    }).then(r => {

        const embed = new MessageEmbed()
            .setTitle("Top 20 players")
            .setDescription("" + r.data.top
                .filter(x => client.users.cache.get(x.userID))
                .map((x, i) => "\n"  + (i + 1) +". "+ `${client.users.cache.get(x.userID).toString()}`))
        return message.channel.send({ embeds: [embed]})
    })
}

module.exports.help = COMMANDS.GENERAL.RANKMONEY;