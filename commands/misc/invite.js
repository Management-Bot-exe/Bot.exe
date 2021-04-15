const Discord = require('discord.js');
const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'invite',
    description: 'Sends an invite link to invite the bot.',
    aliases: ["i", "inv"],
    execute(message, args, Discord){

    const embed = new MessageEmbed()
	    .setTitle(`This bot is still in development. Wait for it to come public to invite the bot! :wink:`)
        .setColor(`#5a28cb`)
        .setAuthor(`${message.author.username}`)
        .setDescription(`You can add me via [this](https://discord.com/oauth2/authorize?client_id=784871149695533076&permissions=8&scope=bot) link!`)
        .addField(`**Links:**`, `
click [here](https://fateslist.xyz) to go to fateslist the bot list!
click [here](https://discord.com/oauth2/authorize?client_id=709333161057714187&permissions=8&scope=bot) to add me to your server! 
click [here](https://discord.gg/duRePxp5v2) to join the support server!  
click [here](https://sites.google.com/view/commander-r-bots-website/bots/backup-bot-exe) to go to our site
        `)
        .setFooter(`Bot Coded By: Commander R#9371`)
        message.channel.send(embed);
    }
}