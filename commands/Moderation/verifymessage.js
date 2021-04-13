const { prefix } = require('../../config.json');
const Discord = require('discord.js');
const { MessageEmbed } = require('discord.js');

module.exports = {
	name: 'sendverificationmessage',
	description: 'List all of my commands or info about a specific command.',
	aliases: ['svm'],
	usage: 'svm',
	cooldown: 5,
    execute(message, args, Discord){

    const embed = new MessageEmbed()
        .setTitle(`How To Verify:`)
        .setColor(`#829eef`)
        .setAuthor(`${message.author.username}`)
        .setDescription(`Add Bot.exe to your server via [this](https://discord.com/oauth2/authorize?client_id=784871149695533076&permissions=8&scope=bot) link!`)
        .addField("How do I verify myself?", `You can verify yourself with doing \`${prefix}verify\` in a channel.`)
        .addField("Why do we need you to verify?", "Because we don't want scam/fake accounts in our server.")
        .addField(`links`, `
click [here](https://fateslist.xyz) to go to fateslist the bot list!
click [here](https://discord.com/oauth2/authorize?client_id=784871149695533076&permissions=8&scope=bot) to add me to your server! 
click [here](https://discord.gg/duRePxp5v2) to join the support server!  
click [here](https://sites.google.com/view/commander-r-bots-website/bots/bot-exe) to go to our site`)
    .setFooter(`Bot coded by: Commander R#9371`)
        message.channel.send(embed);
    }
};