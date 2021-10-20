const Discord = require("discord.js");
const { PREFIX } = require("../../config.json");
const COMMANDS = require("../../Utils/help");
const {MessageEmbed} = require("discord.js");

module.exports.run = (client, message, args) => {

    const embed = new MessageEmbed()
        .setTitle("Voici la liste des commandes :")
        .setDescription(`- **,addmoney** : Ajoute de la monnaie virtuelle à l'utilisateur
- **,removemoney** : Retire de la monnaie à l'utilisateur
- **,seemoney** : Permet de voir la monnaie de l'utilisateur
- **,pay** : Permet de payer un utilisateur
- **,rankmoney** : Permet de voir le classement des utilisateurs possédant le plus de cookoins
- **,work** : permet de gagner aléatoirement dans une tranche de 100 à 1000 cookoins avec un cooldown de 1h
- **,flip** : Permet de gagner 50 cookoins à 50% de chance avec un cooldown d'1 minute`)

    return message.channel.send({ embeds: [embed] })
}

module.exports.help = COMMANDS.GENERAL.HELP;