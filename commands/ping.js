export default {
    name: 'ping',
    description: "A ping command",
    async execute(message, args){
        await message.channel.send('> pong!');
    }
}