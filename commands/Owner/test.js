module.exports = {
    name: 'test',
    aliases: ["e"],
    description: 'test',
    execute(message, args){

        if (message.channel.type === 'dm') 
        message.channel.send(`You can't do this in a DM message.`); else

        if(message.member.roles.cache.has('812673380527505408')){
        message.channel.send(`This was a successfull test`)
        } else {
            message.channel.send(`You Don't have the staff role so you can't do this command :rolling_eyes:`)
        }
    }
}