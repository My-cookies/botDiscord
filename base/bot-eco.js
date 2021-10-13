const { Client, Collection, Intents } = require('discord.js'),
    { readdirSync } = require('fs'),
    dotenv = require('dotenv');

class Bot extends Client{
    constructor() {
        super({
            intents: [
                Intents.FLAGS.GUILDS,
                Intents.FLAGS.GUILD_MEMBERS,
                Intents.FLAGS.GUILD_BANS,
                Intents.FLAGS.GUILD_WEBHOOKS,
                Intents.FLAGS.GUILD_VOICE_STATES,
                Intents.FLAGS.GUILD_MESSAGES,
                Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
                Intents.FLAGS.DIRECT_MESSAGE_REACTIONS,
                Intents.FLAGS.GUILD_PRESENCES
            ]
        });

        dotenv.config();
        this.config = require(`../config.json`);
        // BOT sys
        this.token = process.env.BOT_TOKEN;
        this.commands = new Collection();
        this.cooldowns = new Collection();

    }
}