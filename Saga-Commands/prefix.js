module.exports = {
    name: 'prefix',
    description: "A prefix command",
    execute(message, args){
        message.channel.send('> The Current Prefix is [ - ]');
    }
}