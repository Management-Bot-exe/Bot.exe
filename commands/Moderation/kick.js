const { MessageEmbed } = require(`discord.js`)

module.exports = {
    name: 'kick',
    description: 'Kick a member!',
    permissions: 'KICK_MEMBERS',
    guildOnly: true,
    execute(message, args, client){
        const user = message.mentions.users.first();
        if (user) {
      const member = message.guild.member(user);
      if (member) {
        member
          .kick()
          .then(() => {
            message.channel.send({embed: {
                color: "RANDOM",
                author: {
                    name: message.author.username,
                    icon_url: message.author.avatarURL()
                },
                title: ":white_check_mark:  A Successfull Kick!",
                fields: [{
                    name: "Kicked by:",
                    value: `${message.author.username}`
                },
                {
                    name: "Kicked User:",
                    value: `${user.username}`
                }],
                timestamp: new Date(),
                footer: {
                    icon_url: message.author.avatarURL(),
                    text: "Bot coded by: Commander R#9371"
                }
            }})
          })
          .catch(err => {
            message.reply('I was unable to kick the member');
            console.error(err);
          });
      } else {
        message.reply("That user isn't in this guild!");
      }
    } else {
      message.reply("You didn't mention the user to kick!");
    }
    }
}