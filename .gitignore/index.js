const Discord = require('discord.js');
const bot = new Discord.Client();

var prefix = ("*")

bot.on('ready', function() {
    bot.user.setActivity("pour de l'aide: *help");
    console.log("Connectedç");
});

bot.login(process.env.TOKEN);


bot.on('message', message => {
    if (message.content === prefix + "help"){
        message.channel.send("Liste des commandes, n'oubliez pas de mettre: * ,avant la commande comme vous l'avez fait pour faire apparaître cette page: \n -help \n -JDQ");
    }

    if (message.content === prefix + "JDQ"){
        message.channel.send("Voici ce à quoi je peux répondre: \n -Salut \n -salut \n -yop \n Evidemment ily aura plus de répliques dans le futur et vous pouvez m'aider à en avoir plus en proposant vos idées dans Rue de la remarque !");
    }
    
    if (message.content === "Salut"){
        message.reply("Salut moi c'est VRG BOT");
        console.log("Commande Salut effectué");
    }

    if (message.content === "salut"){
        message.reply("Tu sais je déteste quand on ne met pas de majuscules ! Mais sinon salut");
        console.log("Commande salut sans maj effectué");
    }

    if (message.content === "yop"){
        message.reply("YoukYouk comme Dyno !");
        console.log("Commande YoukYouk effectué");
    }

    if (message.content === "bonsoir"){
        message.reply("salut ! Sinon qui bs avec toi ?");
        console.log("bonsoir xxrom effectué");
    }
});
