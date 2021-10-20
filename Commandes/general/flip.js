const { randomInt } = require("crypto");
const Discord = require("discord.js");
const COMMANDS = require('../../Utils/help')
const axios = require("axios");

module.exports.run = (client, message, args) => {

    if ((!args.length) || (args[0] !== "pile" && args[0] !== "face")) return message.reply("Veuillez indiquer face/pile")

    const alea = Math.floor(Math.random() * 2);
    if ((alea === 0 && args[0] === "face") || (alea === 1 && args[0] === "pile"))

    axios({
        method: 'post',
        url: `${client.config.setting.API_URL}/api/${message.author.id}/money/add`,
        data: {
            money: 100
        }
    });
    return message.channel.send(`Vous avez gagné 100`)
}

module.exports.help = COMMANDS.GENERAL.FLIP;