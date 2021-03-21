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
        .setDescription(`When the bot comes public you can add Bot.exe to your server via [this](https://discord.com/oauth2/authorize?client_id=784871149695533076&permissions=8&scope=bot) link!`)
        .addField(`**Links:**

        `)
        .setFooter(`Bot Coded By: Commander R#9371`)
        message.channel.send(embed);
    }
}