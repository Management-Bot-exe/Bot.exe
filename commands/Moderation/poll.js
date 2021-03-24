const { MessageEmbed } = require('discord.js');
const Title = [
    `It's voting time!`,
    'Your vote counts!',
    'What would we do without your vote?',
    'Did you vote?',
    'So, You voted?',
    'Voting time, yay!',
    'What are you voting for?',
    'Are you sure thats what you\'re voting for?',
    'You can change your vote...',
    'Keep it there, Don\'t change it now!'
  ];

module.exports = {
    name: 'poll',
    description: 'creates a poll.',
    permissions: 'MANAGE_MESSAGES',
    cooldown: 5,
    guildOnly: true,
    execute(message, args){
        const msg = message.content.slice(message.content.indexOf(args[0]), message.content.length);
        const embed = new MessageEmbed()
        .setTitle(`${Title[Math.floor(Math.random() * Title.length)]}`)
        .addField('created by:', message.member, true)
        .addField('Poll', msg)
        .setTimestamp()
        .setColor(`#288cc8`)
        message.channel.send(embed).then( (message) => {
            message.react('✅')
            .then(() => message.react('❎'))
            })
    }
}