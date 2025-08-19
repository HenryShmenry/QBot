const { Client, GatewayIntentBits } = require("discord.js");

console.log("GatewayIntentBits:", GatewayIntentBits);

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
    ],
});

console.log("Intents bitfield:", client.options.intents.bitfield);

client.once("ready", () => {
    console.log(`✅ Logged in as ${client.user.tag}`);
});

client.login("ODYwNjAwMzA1MDUzMDczNDU5.YN9mfQ.6ua7bgn2UiDd5uhv61TK1g8EZkQ");