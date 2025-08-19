export default {
    name: 'questionable',
    description: "link to YouTube Channel",
    async execute(message, args){
        await message.channel.send('> https://www.youtube.com/channel/UCS23wq8siBHnBnOepVP9gig\n> https://www.twitch.tv/predominantpancake\nhttps://discord.gg/MeFxVfk');
    }
}