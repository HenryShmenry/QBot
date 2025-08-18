module.exports = {
    name: 'saga',
    description: "A hidden command",
    execute(message, args){
        message.channel.send('Sorry, this command is not recognised.');
    }
}