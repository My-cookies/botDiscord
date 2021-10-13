
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
        DON: {
            name: "don",
            aliases: ["d"],
            category: "general",
            description: "don cookies for user",
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
    }
}