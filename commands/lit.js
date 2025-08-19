export default {
    name: 'lit',
    description: "A lit command",
    async execute(message, args){
        await message.channel.send('> **Lets get it, we lit** - __Travis Scott__ + __Dwayne The Rock Johnson__');
    }
}