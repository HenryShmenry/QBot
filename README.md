# QuestionableBot / QBot 1.5 (Modular)
A bot that I used for an official YouTube channel. The aims for this bot will be to be an all-in-one bot that does all the things I will need it to do in the discord server. 

[YouTube Channel Link](https://www.youtube.com/@questionable420)

[Discord Invite Link](https://discord.gg/uVezaE3Tyx)

## Discord:
1. Using a set blacklist.txt file, containing words that are "not allowed", as a reference. The bot can take any message sent that contains these words and delete them from the channel they are sent in, warning the user not to use that specific word and finally logging the action in a separate channel on the server and in the command line. 
2. Using the YouTube RSS Feed, the bot is able to check for any new videos every 5 minutes. If a new video is found, it will make an announcement about the video in the relevant channel, then adding the Id of that specific video to an AnnouncedUploads.json file, which is used as a reference to prevent duplicate announcements. Finally logging this action in a separate channel on the server and in the command line.
3. Using a prefix "?" the bot has a set list of commands that send messages into the same channel that a command is executed. These commands are all text based and largly consist of links to other YouTube channels or other basic call and request functions. After any function is used, the action and response are logged in a separate channel on the server and in the command line.
4. Once the bot is activated or runs into an error, errors are logged in the command line whereas actions and activation messages are logged both in the command line and in a separate channel on the server.
5.  [EXTRA] as an extra function, the bot is equipped with a while(TRUE) loop that pings Tom in a specific channel indefinitely. This goes on until the bot is turned off, or the code removed. 

### Current Commands:
- help -> Provides a list of commands
- dr-rc -> Provides a link to DR-RC's YouTube and Discord Server
- chuchis -> Provides a link to ChuChis on Twitch
- febloop -> Provides a link to Febloop5 on Twitch and YouTube
- kenzie -> Provides a link to Kenzie's YouTube and Discord Server
- lit -> Responds with message "Yeah we lit"
- mars -> Provides a link to Mars's YouTube and SoundCloud Page
- natty -> Provides a link to Natty's YouTube and Discord Server
- ping -> Responds with "Pong"
- prefix -> Responds with the current active prefix "?"
- saga -> Provides a link to the SAGA YouTube Channel
- skull -> Provides a link to TheDeadSkull's YouTube Channel
- tomtv -> Provides a link to TomTV's YouTube and Discord Server
- tw -> Links to the PredominantPancake Twitch Channel
- yt -> Links to the Questionable YouTube Channel

> [!TIP]
> Start with the ?help command, as each other command is listed within.  

## YouTube
1. The bot reads the RSS Feed to keep track of any new uploads that are videos (including live streams that have been saved as a video) and uploads them to the discord server. It checks this feed every 5 minutes while active.
2. The bot will keep track of Youtube Milestones (e.g. 100 subscribers) and celebrate each year.

## Twitch
1. The bot accesses the Twitch API to keep track of the PredominantPancake Twitch account, then notifying the discord server whenever that channel goes live.
2.  [EXTRA] as an extra feature, I might add some functionality to allowing the bot to do things using twitch donations / bits. For example, special messages in a channel, using bits.

## Plan / Roadmap for Bot:
These are the changes that have / will have been implemented by the time it's finished.

I am considering setting up multiple bots for different tasks perhaps? 
- [x] Update the bot to work on new dependencies.
- [x] Add Blacklist and very basic "bad word" moderation.
- [x] Add YouTube upload announcement function and keep track of announcements made to prevent duplicates.
- [x] Updated the Bot format to be modular to make future updates simpler.
- [ ] Add Twitch Stream Start Announcement function.
- [x] Add a role to allow members to choose to recieve a ping from each announcement (separate for uploads / streams).
- [ ] Update all the commands: adding / removing relevant channels.
- [ ] Update all commands from message to embedded format.
- [ ] Email announcement functionality? (May not be neccessary)
- [ ] Tom Underwear Updater (likely miss).
- [ ] Allowed the Bot to direct message Tom.
- [ ] Other people's upload announcements?
- [ ] Interactions with twitch bits?
- [ ] Gambling Game in a specific channel.
- [ ] Give the bot the ability to celebrate specific days of the year
- [ ] Allow the bot to DM members with video announcements if they have a specific role on the discord server.
- [ ] Optimise the bot to be able to handle many requests at once, or many tasks at once. (Split?)
- [ ] Find a way to get the bot to run more consistently, without user input.

> [!WARNING]
> Never ever share the Login Keys or Channel IDs online, or even commit them to a repository. This is an extremely dangerous safety concern and must not be allowed to occur, otherwise malicious bodies may be able to log in as the bot. 
