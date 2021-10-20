const { randomInt } = require("crypto");
const COMMANDS = require('../../Utils/help')
const axios = require("axios");

module.exports.run = (client, message, args) => {

    axios({
        method: 'post',
        url: `${client.config.setting.API_URL}/api/${message.author.id}/money/add`,
        data: {
            money: 1500
        }
    });
    return message.channel.send(`Vous avez gagné 1500`)
}

module.exports.help = COMMANDS.GENERAL.WORK;