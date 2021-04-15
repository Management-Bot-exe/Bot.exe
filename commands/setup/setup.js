const { MessageEmbed } = require(`discord.js`)

module.exports = {
    name: 'setup',
    description: 'Sends an message with how to setup the bot.',
    aliases: [],
    execute(message, args, Discord){

    const embed = new MessageEmbed()
        .setTitle(`How to setup Bot.exe?`)
        .setColor(`RANDOM`)
        .setAuthor(`${message.author.username}`)
        .setDescription(`This message shows you how to set the bot up!`)
        .addField(`Verification Setup`, `Make a role called 'Verified'. And make sure that that role can access the channels all verified users needs to see!`)
        .addField(`Muting Setup`, `If you haven't already created a role called 'Muted' then go ahead and do that.\nIf you've done that, set the correct permissions for every channel so people with the @Muted Role can't chat in those channels!`)
        .addField(`TIP`, `You can go to the server settings in the role section you can go to the everyone role and disable the permission "VIEW CHANNELS"`)
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