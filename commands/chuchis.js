module.exports = {
    name: 'chuchis',
    description: "The chuchis Command",
    execute(message, args){
        message.channel.send('> Pronounced "Chu-Cheese"\n> https://www.twitch.tv/chu_chis');
    }
}