module.exports = {
    name: 'help',
    description: "The Help Command",
    execute(message, args){
        message.channel.send('> The Current Usable Commands are:\n> [**questionable**] - A list of Questionable links\n> [**kenzie**] - A list of Kenzie links\n> [**vana**] - A list of Vanalirious links\n> [**natty**] - A list of Natty links\n> [**natemg**] - A list of NateMG links\n> [**dr-rc**] - A list of DR-RC links\n> [**tomtv**] - A list of TomTV links\n> [**febloop**] - A list of FeBloop links\n> [**skull**] - Nostalgia in a command\n> [**truth**] - If you want the truth\n> [**jinx**] - Welcome to Jinx A-S-M-R\n> [**ping**] - Does exactly what you think\n> [**prefix**] - Not sure why this is a command\n> [**help**] - A List of all the current usable links');
    }
}