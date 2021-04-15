const githubLink = 'https://github.com/Management-Bot-exe/Bot.exe';
const { MessageEmbed } = require('discord.js');
module.exports = {
    "name": "github",
    "aliases": [],
    "description": "This gives you the github link!",
    execute(message, Discord) {
        const embed = new MessageEmbed()
        .setTitle(`Github Repository Link!`)
        .setDescription(`This bots code is almost fully on the site. Only the 'Secret Commands' aren't on github!`)
        .addField(`Github link:`, `[${githubLink}](${githubLink})`)
        .addField(`Other links:`, `
click [here](https://fateslist.xyz) to go to fateslist the bot list!
click [here](https://discord.com/oauth2/authorize?client_id=709333161057714187&permissions=8&scope=bot) to add me to your server! 
click [here](https://discord.gg/duRePxp5v2) to join the support server!  
click [here](https://sites.google.com/view/commander-r-bots-website/bots/backup-bot-exe) to go to our site`)
        .setFooter(`Command executed by: ${message.author.username}`)
        .setColor(`RANDOM`);

        message.channel.send(embed)
    }
}