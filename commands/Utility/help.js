const { prefix } = require('../../config.json');
const Discord = require('discord.js');
const { MessageEmbed } = require('discord.js');

module.exports = {
	name: 'help',
	description: 'List all of my commands.',
	aliases: ['h', 'commands'],
	usage: 'help',
	cooldown: 5,
    execute(message, args, Discord){

    const embed = new MessageEmbed()
        .setTitle(`Command List`)
        .setColor(`#829eef`)
        .setAuthor(`Commander R#9371`)
        .setDescription(`These are all the commands the bot can do at the moment!`)
        .addField("verification", `
    ${prefix}verify`)
		.addField("Utility", `
    ${prefix}args-info
    ${prefix}avatar
    ${prefix}help
    ${prefix}invite
    ${prefix}serverinfo
    ${prefix}support
    ${prefix}userinfo
    ${prefix}website
    ${prefix}ping`)
		.addField("Moderation", `
    ${prefix}ban
    ${prefix}kick
    ${prefix}purge
    ${prefix}svm`)
		.addField("**Owner Only!**", `
    ${prefix}reload
    ${prefix}servers
    ${prefix}test`)
        .setFooter(`Bot Coded By Commander R#9371!`)
        return message.author.send(embed)
			.then(() => {
				if (message.channel.type === 'dm') return;
				message.reply('I\'ve sent you a DM with all my commands!');
			})
    }
};