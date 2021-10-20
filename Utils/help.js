
const COMMANDS = {
    GENERAL: {
        SEEMONEY: {
            name: "seemoney",
            aliases: ["seemcookoin"],
            category: "general",
            description: "see money for user",
            usage: "",
            cooldown: 5,
            permissions: "",
            auth: "",
            args: "none"
        },
        ADDMONEY: {
            name: "addmoney",
            aliases: ["addcookoin"],
            category: "general",
            description: "add money for user",
            usage: "",
            cooldown: 5,
            permissions: "",
            auth: "dev",
            args: "true"
        },
        REMOVEMONEY: {
            name: "removemoney",
            aliases: ["removecookoin"],
            category: "general",
            description: "remove money for user",
            usage: "",
            cooldown: 5,
            permissions: "",
            auth: "dev",
            args: "true"
        },
        PAY: {
            name: "pay",
            aliases: ["p"],
            category: "general",
            description: "pay money for user",
            usage: "",
            cooldown: 5,
            permissions: "",
            auth: "",
            args: "true"
        },
        BUY: {
            name: "buy",
            aliases: ["b"],
            category: "general",
            description: "buy a article in a shop",
            usage: "",
            cooldown: 5,
            permissions: "",
            auth: "",
            args: "true"
        },
        SHOP: {
            name: "shop",
            aliases: ["s"],
            category: "general",
            description: "see a shop",
            usage: "",
            cooldown: 5,
            permissions: "",
            auth: "",
            args: "false"
        },
        RANKMONEY: {
            name: "rankmoney",
            aliases: ["rankcookoin"],
            category: "general",
            description: "see user rank money",
            usage: "",
            cooldown: 5,
            permissions: "",
            auth: "",
            args: "false"
        },
        RANKCOOKIE: {
            name: "rankcookie",
            aliases: ["rank"],
            category: "general",
            description: "see user rank cookie",
            usage: "",
            cooldown: 5,
            permissions: "",
            auth: "",
            args: "false"
        },
        WORK: {
            name: "work",
            aliases: ["w"],
            category: "general",
            description: "gain money over time",
            usage: "",
            cooldown: 3600,
            permissions: "",
            auth: "",
            args: "none"
        },
        FLIP: {
            name: "flip",
            aliases: ["f"],
            category: "general",
            description: "flip a coin for a chance to win cookoins",
            usage: "",
            cooldown: 60,
            permissions: "",
            auth: "",
            args: "none"
        },
        ROB: {
            name: "rob",
            aliases: [],
            category: "general",
            description: "rob a player",
            usage: "",
            cooldown: 60,
            permissions: "",
            auth: "",
            args: "none"
        },
        ROULETTE: {
            name: "roulette",
            aliases: [],
            category: "general",
            description: "try to win a prize",
            usage: "",
            cooldown: 60,
            permissions: "",
            auth: "",
            args: "none"
        },
        HELP: {
            name: "help",
            aliases: ["h"],
            category: "general",
            description: "Show all commands",
            descriptionFr: "Montre la liste des commandes",
            usage: "[command_name]",
            usageFr: "[nom_commande]",
            cooldown: 0,
            permissions: "",
            auth: "",
            args: "none"
        },
    }
}

module.exports = COMMANDS