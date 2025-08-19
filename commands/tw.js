export default {
    name: 'tw',
    description: "link to Twitch Channel",
    async execute(message, args){
        await message.channel.send('> https://www.twitch.tv/predominantpancake');
    }
}