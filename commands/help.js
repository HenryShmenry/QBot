module.exports = {
    name: 'help',
    description: "The Help Command",
    execute(message, args){
        message.channel.send('> The Current Usable Commands are:\n> [**yt**] - Link to the YouTube Channel\n> [**tw**] - Link to the Twitch Channel\n> [**chuchis**] - The chu._.chis Links\n> [**mars**] - A list of Matgeos Links\n> [**kenzie**] - A list of Kenzie Links\n> [**natty**] - A list of Natty Links\n> [**dr-rc**] - A list of DR-RC Links\n> [**tomtv**] - A list of TomTV Links\n> [**febloop**] - A list of FeBloop Links\n> [**skull**] - Nostalgia in a command\n> [**ping**] - Does exactly what you think\n> [**prefix**] - Not sure why this is a command\n> [**help**] - A List of all the current usable links');
    }
}