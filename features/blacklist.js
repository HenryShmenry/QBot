import { readFileSync } from "fs";
import path from "path";

export default function blacklistFeature(client, config) {
  const blacklistPath = path.join(process.cwd(), "blacklist.txt");
  let blacklist = new Set();

  try {
    const content = readFileSync(blacklistPath, "utf-8");
    blacklist = new Set(
      content.split(/\r?\n/).map(w => w.trim().toLowerCase()).filter(Boolean)
    );
    console.log(`Loaded ${blacklist.size} blacklisted words.`);
  } catch (err) {
    console.error("Could not load blacklist.txt:", err);
  }

  // When a message is sent to a channel
  client.on("messageCreate", async message => {

    // If the author of the message is a bot, ignore that message!
    if (message.author.bot) return;

    const content = message.content.toLowerCase();

    // If the message contains a blacklisted word:
    for (let word of blacklist) {
      if (content.includes(word)) {
        try {
          const Logs = await client.channels.fetch(config.channels.logs);
          if (Logs?.isTextBased()) {
            console.log(`Deleting message from ${message.author.tag} (contained blacklisted word: "${word}")`);
            await Logs.send(`Deleted message from ${message.author} for containing the word "${word}"`);
          }
          // Delete the message and warn the author!
          await message.delete();
          await message.channel.send(`${message.author}, you can't say that!`);
        } catch (err) {
          console.error("Blacklist error:", err);
        }
        return;
      }
    }
  });
}
