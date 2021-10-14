const Discord = require("discord.js");
const {PREFIX} = require("../config.js");
const economy = new db.table("Economy")

module.exports.run = (client, message, args) => {

    let user = message.mentions.members.first() || message.author;

    let rdm = randomInt(0, 100);
    let moneyrdm = randomInt(50, 500);

    if (0 <= rdm <= 30) {
        economy.remove(`money_${message.guild.id}_${user.id}`, moneyrdm)
        economy.add(`money_${message.guild}_${user}`, moneyrdm)
        return message.channel.send(`Vous avez volé ${moneyrdm}`)
    }
}

module.exports.help = COMMANDS.GENERAL.ROB;