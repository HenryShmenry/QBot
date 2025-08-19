export default {
    name: 'summon',
    description: "A command for everyone",
    async execute(message, args){
        await message.channel.send('> @everyone');
    }
}