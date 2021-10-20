const bot = require("./base/bot-eco"),
    dotenv = require('dotenv');

dotenv.config();

bot(process.env.BOT_TOKEN)
    .launch()
    .then(() => {
      console.log("Bot démarré")
    })
    .catch((err) => {
      console.log("Erreur lors du démarrage : " + err)
    });