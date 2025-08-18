import { Client as _Client, Collection } from 'discord.js';

const Client = new _Client();

const prefix = '?';
-
Client.once('ready', () => {
    console.log('La Bot is online Big Man | Prefix " ? "');
});

import { readdirSync } from 'fs';

Client.commands = new Collection();

const commandFiles = readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);

    Client.commands.set(command.name, command)
}

Client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;
    
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === 'ping'){
        Client.commands.get('ping').execute(message, args);
    } else if (command == 'yt'){
        Client.commands.get('yt').execute(message, args);
    } else if (command == 'tw'){
        Client.commands.get('tw').execute(message, args);
    } else if (command == 'help'){
        Client.commands.get('help').execute(message, args);
    } else if (command == 'kenzie'){
        Client.commands.get('kenzie').execute(message, args);
    } else if (command == 'prefix'){
        Client.commands.get('prefix').execute(message, args);
    } else if (command == 'dr-rc'){
        Client.commands.get('dr-rc').execute(message, args);
    } else if (command == 'natty'){
        Client.commands.get('natty').execute(message, args);
    } else if (command == 'tomtv'){
        Client.commands.get('tomtv').execute(message, args);
    } else if (command == 'saga'){
        Client.commands.get('saga').execute(message, args);
    } else if (command == 'febloop'){
        Client.commands.get('febloop').execute(message, args);
    } else if (command == 'skull'){
        Client.commands.get('skull').execute(message, args);
    } else if (command == 'lit'){
        Client.commands.get('lit').execute(message, args);
    } else if (command == 'mars'){
        Client.commands.get('mars').execute(message, args);
    } else if (command == 'chuchis'){
        Client.commands.get('chuchis').execute(message, args);
    }
})

Client.login('ODYwNjAwMzA1MDUzMDczNDU5.YN9mfQ.6ua7bgn2UiDd5uhv61TK1g8EZkQ');
