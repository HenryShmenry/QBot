import { Client, GatewayIntentBits, Collection } from "discord.js";
import fetch from "node-fetch";
import { readdirSync, readFileSync, promises as fs } from "fs";
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

const Logs = await client.channels.fetch("LOGS_CHANNEL_KEY");

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
    if (content.includes(word)) {
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
  console.log("Command seen:", message.content);

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

/* This is the section of code that handles announcing new uploads */

const FILE_PATH = "./AnnouncedUploads.json";

async function loadSeenVideos() {
  try {
    const data = await fs.readFile(FILE_PATH, "utf-8");
    console.log("AnnouncedUploads.json loaded");
    return new Set(JSON.parse(data));
  } catch {
    console.log("No AnnouncedUploads.json found, starting fresh");
    return new Set();
  }
}

async function saveSeenVideos(seen) {
  await fs.writeFile(FILE_PATH, JSON.stringify([...seen], null, 2));
  console.log("AnnouncedUploads.json updated.");
}

let seenVideos = await loadSeenVideos();

async function checkYouTube() {
  console.log("[YouTube] Checking feed...");

  try {
    const res = await fetch(
      `https://www.youtube.com/feeds/videos.xml?channel_id=UCS23wq8siBHnBnOepVP9gig`
    );
    const xml = await res.text();

    // Extract all video IDs and titles
    const ids = [...xml.matchAll(/<yt:videoId>(.*?)<\/yt:videoId>/g)].map(m => m[1]);
    const titles = [...xml.matchAll(/<title>(.*?)<\/title>/g)].map(m => m[1]);

    console.log(`[YouTube] Found ${ids.length} videos in feed.`);

    const channel = await client.channels.fetch("ANNOUNCEMENTS_KEY");
    
    let newVideos = 0;

    for (let i = ids.length - 1; i >= 0; i--) {
      const videoId = ids[i];
      const title = titles[i + 1]; // titles[0] = channel name

      if (!seenVideos.has(videoId)) {
        // Add it to seen
        seenVideos.add(videoId);

        // Announce it
        const videoUrl = `https://www.youtube.com/watch?v=${videoId}`;
        if (channel?.isTextBased()) {
          await channel.send(`Check out this upload: ${videoUrl}`);
          console.log(`[YouTube] Announced video: ${title}`);
        }

        newVideos++;
      }
    }

    if (newVideos > 0) {
      await saveSeenVideos(seenVideos);
      console.log(`[YouTube] Updated AnnouncedUploads.json with ${newVideos} new video(s).`);
    } else {
      console.log("[YouTube] No new videos to announce.");
    }
  } catch (err) {
    console.error("[YouTube] Failed to check feed:", err);
  }
}

client.once("ready", () => {
    // Loop start
    setInterval(checkYouTube, 5 * 60 * 1000); // every 5 minutes
    checkYouTube();
  });