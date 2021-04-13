module.exports = {
    name: 'purge',
    description: `Purges the amount of messages that you've given`,
    aliases: ["clear", "clean"],
    permissions: 'MANAGE_MESSAGES',
    guildOnly: true,
    async execute(message, args){
        if(!args[0]) return message.reply(`You need to specify an amount of messages to purge!`);
        if(isNaN(args[0])) return message.reply(`Please enter a **NUMBER** nothing else!`);

        if(args[0] > 100) return message.reply(`You can't purge more messages then 100!`);
        if(args[0] < 1) return message.reply(`You Need at least to purge 1 message!`);
    
        await message.channel.messages.fetch({limit: args[0]}).then(messages => {
            message.channel.bulkDelete(messages)
        })
    }
}