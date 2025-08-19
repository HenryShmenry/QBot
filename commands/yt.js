export default {
    name: 'yt',
    description: "A yt command",
    async execute(message, args){
        await message.channel.send('>https://www.youtube.com/channel/UCS23wq8siBHnBnOepVP9gig');
    }
}