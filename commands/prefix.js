export default {
    name: 'prefix',
    description: "A prefix command",
    async execute(message, args){
        await message.channel.send('> The Current Prefix is [ - ]');
    }
}