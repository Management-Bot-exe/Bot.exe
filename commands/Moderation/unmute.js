module.exports = {
    name: "unmute",
    aliases: [],
    permissions: 'MUTE_MEMBERS',
    description: "Unutes the mentionned user!",
    execute(message, client, args){
        let role = message.guild.roles.cache.find(role => role.name === "Muted");
        const member = message.mentions.members.first();
        if(message.guild.roles.cache.find(r => r.name === "Muted")) {
        const user = message.mentions.members.first();
        member.roles.remove(role).then(() => {
            message.channel.send({embed: {
                color: "RANDOM",
                author: {
                    name: message.author.username,
                    icon_url: message.author.avatarURL()
                },
                title: ":white_check_mark:  A Successfull Unmute!",
                fields: [{
                    name: "Unmuted by:",
                    value: `${message.author.username}`
                },
                {
                    name: "Unmuted User:",
                    value: `${user.username}`
                }],
                timestamp: new Date(),
                footer: {
                    icon_url: message.author.avatarURL(),
                    text: `Bot coded by: Commander R#9371`
                }
            }})
          })
        } else {
            message.reply(":x:  This member is not muted!")
          }
        }
}