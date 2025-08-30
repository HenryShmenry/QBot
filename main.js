import { Client, GatewayIntentBits } from "discord.js";
import config from "./config.js";

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});

client.once("ready", () => {
  console.log(`QuestionableBot: ${config.edition}`)
  console.log(`Bot is online | Prefix: ${config.prefix}`);
});

// Attempt to load features based on config toggles
if (config.features.blacklist) {
    try {
        import("./features/blacklist.js").then(mod => mod.default(client, config));
        console.log("Blacklist Active")
    } catch (err) {
        console.error("Failed to load Blacklist Script:", err);
    }
}

if (config.features.youtubeChecker) {
    try {
        import("./features/YouTube.js").then(mod => mod.default(client, config));
        console.log("YouTube Checker Active")
    } catch (err) {
        console.error("Failed to load YouTube Announcements Script:", err);
    }
}

if (config.features.commands) {
    try {
        import("./features/commands.js").then(mod => mod.default(client, config));
        console.log("Commands Active")
    } catch (err) {
        console.error("Failed to load Command Handler script:", err);
    }
}

client.login(config.token);