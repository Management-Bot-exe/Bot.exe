const config = require('../../config.json')
const { MessageEmbed } = require('discord.js');

module.exports = {
	name: 'announce',
	description: 'Sends an announcement to the announcements channel',
	args: true,
	execute(message, args) {
    const announceChannel = config.announceChannel;
    if (!announceChannel)
      return this.sendErrorMessage(message, 1, 'announceChannelId property has not been set');
    if (!args[0]) return this.sendErrorMessage(message, 0, 'Please provide a message to send');
    let announcement = message.content.slice(message.content.indexOf(args[0]), message.content.length);

    // Send announcement
    const announceEmbed = new MessageEmbed()
      .setTitle('Announcement')
      .setDescription(announcement) 
      .addField('Announcement by:', message.member, true)
      .setFooter(message.member.displayName,  message.author.displayAvatarURL({ dynamic: true }))
      .setTimestamp()
      .setColor(message.guild.me.displayHexColor);
      message.channel.send(announceEmbed)
  }
};