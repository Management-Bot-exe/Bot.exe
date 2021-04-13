const { MessageEmbed } = require('discord.js');
const { oneLine } = require('common-tags');

module.exports = {
      name: 'apply',
      usage: 'apply',
      description: `Sends a link to where you can apply for moderator on the support server of Bot.exe.`,

  execute(message, args) {
    const applyChannel = message.client.channels.cache.get('808735871565561866');
    if (!applyChannel)
      return this.sendErrorMessage(message, 1, 'The applicationChannelId property has not been set');
    let report = message.content.slice(message.content.indexOf(args[0]), message.content.length);

    // Send report
    const reportEmbed = new MessageEmbed()
      .setTitle('Staff Application')
      .setThumbnail(applyChannel.guild.iconURL({ dynamic: true }))
      .addField('User', message.member, true)
      .addField('Server', message.guild.name, true)
      .setFooter(message.member.displayName,  message.author.displayAvatarURL({ dynamic: true }))
      .setTimestamp()
      .setColor(message.guild.me.displayHexColor);
      applyChannel.send(reportEmbed);
    applyChannel.send(`<@271285474516140033>`);

    // Send response
    if (report.length > 1024) report = report.slice(0, 1021) + '...';
    const embed = new MessageEmbed()
      .setTitle('Staff Application')
      .setThumbnail('')
      .setDescription(oneLine`
Successfully sent application link!
 can apply [here](https://forms.gle/qbZWwheFNp3zpd1d8)
Please join the [Bot.exe Support Server](https://discord.gg/XqduXggTD6) if you haven't already.
      `) 
      .addField('Member', message.member, true)
      .setFooter(message.member.displayName,  message.author.displayAvatarURL({ dynamic: true }))
      .setTimestamp()
      .setColor(message.guild.me.displayHexColor);
    message.channel.send(embed);
  }
};