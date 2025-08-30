import { Collection } from "discord.js";
import { readdirSync } from "fs";

export default function commandsHandler(client, config) {
  client.commands = new Collection();

  const commandFiles = readdirSync("./commands/").filter(file => file.endsWith(".js"));
  for (const file of commandFiles) {
    import(`../commands/${file}`).then(({ default: command }) => {
      client.commands.set(command.name, command);
    });
  }

  client.on("messageCreate", async message => {
    if (message.author.bot) return;
    if (!message.content.startsWith(config.prefix)) return;

    const Logs = await client.channels.fetch(config.channels.logs);
    console.log(`Command: ${message.content} | User: ${message.author.tag}`);
    if (Logs?.isTextBased()) {
      await Logs.send(`Command: ${message.content} | User: ${message.author.tag}`);
    }

    const args = message.content.slice(config.prefix.length).trim().split(/ +/);
    const commandName = args.shift().toLowerCase();
    const command = client.commands.get(commandName);

    if (!command) return;
    try {
      command.execute(message, args);
    } catch (err) {
      console.error("Commands error:", err);
      message.reply("Something went wrong executing that command.");
    }
  });
}