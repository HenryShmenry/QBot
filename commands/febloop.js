export default {
    name: 'febloop',
    description: "A febloop command",
    async execute(message, args){
        await message.channel.send('> https://www.twitch.tv/febloop5');
    }
}