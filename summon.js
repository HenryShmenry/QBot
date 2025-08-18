module.exports = {
    name: 'summon',
    description: "A command for everyone",
    execute(message, args){
        message.channel.send('> @everyone');
    }
}