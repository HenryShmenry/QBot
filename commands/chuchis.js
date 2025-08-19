export default {
    name: 'chuchis',
    description: "The chuchis Command",
    async execute(message, args){
        await message.channel.send('> Pronounced "Chu-Cheese"\n> https://www.twitch.tv/chu_chis');
    }
}