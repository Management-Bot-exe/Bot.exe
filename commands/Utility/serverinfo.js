module.exports = {
	name: 'server',
	description: 'Display info about this server.',
	execute(message) {

		if (message.channel.type === 'dm') 
        message.channel.send(`You can't do this in a DM message.`); else
		message.channel.send(`Server name: ${message.guild.name}\nTotal members: ${message.guild.memberCount}`);
	},
};