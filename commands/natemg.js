export default {
    name: 'natemg',
    description: "The NateMg Links Command",
    async execute(message, args){
        await message.channel.send('> https://www.twitch.tv/natemglive\n> https://www.youtube.com/channel/UCd1eoARWaxin8v7Zls0r_Nw');
    }
}