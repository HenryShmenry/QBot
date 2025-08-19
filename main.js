import { Client, GatewayIntentBits, Collection } from "discord.js";
import { readdirSync } from "fs";

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
    ],
});

const prefix = "?";

client.commands = new Collection();

// Load command files
const commandFiles = readdirSync("./commands/").filter(file => file.endsWith(".js"));

for (const file of commandFiles) {
    const { default: command } = await import(`./commands/${file}`);
    client.commands.set(command.name, command);
}

// Ready event
client.once("ready", () => {
    console.log('La Bot is online Big Man | Prefix "?"');
});

// Message handler
client.on("messageCreate", message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    console.log("Message seen:", message.content);

    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const commandName = args.shift().toLowerCase();

    const command = client.commands.get(commandName);
    if (!command) return;

    try {
        command.execute(message, args);
    } catch (error) {
        console.log("Uhh that was weird? Hey Henry, we got another error:");
        console.error(error);
        message.reply("Woah there, come back when you have a little more coin!");
    }
});

client.login("ODYwNjAwMzA1MDUzMDczNDU5.YN9mfQ.6ua7bgn2UiDd5uhv61TK1g8EZkQ");
