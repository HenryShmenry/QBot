export default {
    name: 'saga',
    description: "A hidden command",
    async execute(message, args){
        await message.channel.send('Sorry, this command is not recognised.');
    }
}