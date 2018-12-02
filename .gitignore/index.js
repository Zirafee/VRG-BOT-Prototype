const Discord = require('discord.js');
const bot = new Discord.Client();

var prefix = ("*")

bot.on('ready', function() {
    bot.user.setActivity("mise à jour");
});

bot.login(process.env.TOKEN);
});
