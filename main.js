import { Client, GatewayIntentBits, Collection } from "discord.js";
import { readdirSync, readFileSync } from "fs";
import path from "path";

console.log("GatewayIntentBits:", GatewayIntentBits);

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
    ],
});

/* DO NOT ADD THE ACTUAL KEY TO THE ONLINE REPO!! */
client.login("LOGIN_KEY");

const prefix = "?";

client.commands = new Collection();

const commandFiles = readdirSync("./commands/").filter(file => file.endsWith(".js"));

/* Set each file in the commands folder to be a default command that the bot can use */
for (const file of commandFiles) {
    const { default: command } = await import(`./commands/${file}`);
    client.commands.set(command.name, command);
}

client.once("ready", () => {
    console.log('La Bot is online Big Man | Prefix "?"');
});

// Load blacklist.txt into a Set for fast lookups
const blacklistPath = path.join(process.cwd(), "blacklist.txt");
let blacklist = new Set();

try {
    const content = readFileSync(blacklistPath, "utf-8");
    blacklist = new Set(
        content
            .split(/\r?\n/)
            .map(w => w.trim().toLowerCase())
            .filter(Boolean)
    );
    console.log(`Loaded ${blacklist.size} blacklisted words.`);
} catch (err) {
    console.error("Could not load blacklist.txt:", err);
}

/* This is the section of code that handles the commands in the commands folder */
client.on("messageCreate", async message => {
    if (message.author.bot) return;

    const content = message.content.toLowerCase();

    for (let word of blacklist) {
        if (content.includes(word)){
            try {
                console.log(
                    `Deleting message from ${message.author.tag} (contained blacklisted word: "${word}")`
                );
                await message.delete();
                await message.channel.send(`${message.author}, you cant say that!`);
            } catch (err) {
                console.error("Failed to delete message:", err);
            }
            return;
        }
    }

    /* If the message doesn't start with the prefix, ignore */
    if (!content.startsWith(prefix)) return;
    /* Otherwise, log that a message has been recognised and which command it is */
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
