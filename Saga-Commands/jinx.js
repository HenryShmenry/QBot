export default {
    name: 'jinx',
    description: "An ASMR command",
    async execute(message, args){
        await message.channel.send('> https://www.youtube.com/c/JinxASMR\n> Just For You Dan');
    }
}