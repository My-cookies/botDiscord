
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
            cooldown: 30,
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
            cooldown: 30,
            permissions: "",
            auth: "dev",
            args: "true"
        },
        BUY: {
            name: "buy",
            aliases: ["b"],
            category: "general",
            description: "buy a article in a shop",
            usage: "",
            cooldown: 10,
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
    }
}