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
		.addField(`Setup`, `
${prefix}setup`)
       .addField("verification", `
${prefix}verify \`Gives the author of the message 'Verified role' THIS ONLY WORKS WHEN YOU HAVE A ROLE CALLED EXACTLY:  'Verified'  **(BETA)**\`;`)
		.addField(`Fun`, `
${prefix}8ball \`Gets a random answer for your question\`;
${prefix}beep \`Boop!\`;
${prefix}coinflip \`Flips a coin!\`;
${prefix}dice \`Rolls a dice!\`;
${prefix}emojify \`Puts your message in emojis!\`;
${prefix}rps \`Play rock, paper, sciccors with Bot.exe!\`.`)
		.addField(`Misc`, `
${prefix}apply \`Apply for staff in the support server!\`;
${prefix}report \`How to report a bug, malfunction or user\`;
${prefix}support \`Sends a message with how you can get support for the bot!\`;
${prefix}invite \`Invite Me!\`;
${prefix}ping \`Gets the ping of the bot\`.`)
		.addField("Utility", `
${prefix}args-info \`Sends info about the args (arguments)\`;
${prefix}avatar \`Gets someones avatar!\`;
${prefix}help \`Displays this message!\`;
${prefix}botinfo \`Get info about the bot!\`;
${prefix}members \`See howmany people are online! **(BETA)**\`;
${prefix}server \`Get basic info about a server **(BETA)**\`;
${prefix}suggestion \`Sends your suggestion to a channel called "↗suggestions"\`;
${prefix}uptime \`See howlong the bot is online for!\`;
${prefix}userinfo \`Displays some basic user info!\`;
${prefix}website \`Gives you the link to our website!\`;
${prefix}vote \`Gives you links to where to vote for our bots!\`.`)
		.addField("Moderation", `
${prefix}ban \`Bans a user\`;
${prefix}kick \`Kicks a user\`;
${prefix}purge \`Deletes messages (up to 100!)\`;
${prefix}svm \`Sends the 'Server Verification Message' **(BETA)**\`;
${prefix}poll \`Creates a poll in the current channel!\`;
${prefix}mute \`Gives a 'Muted' role to the taged person **(BETA)**\`;
${prefix}unmute \`Removes the 'Muted' role from the taged person **(BETA)**\`.`)
		.addField("Secret Commands", `
${prefix}420_69 \`This is secret :)\`.`)
        .setFooter(`Bot Coded By Commander R#9371!`)
        return message.channel.send(embed)
    }
};