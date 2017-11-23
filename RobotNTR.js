// RobotNTR.js, v0.3, "How I Learned to Stop Worrying and Love JavaScript".

// Import modules...
const Discord = require("discord.js");
// Create client instance...
const client = new Discord.Client();

// Ready the bot...
client.on("ready", function() {
    //Let the user know the bot is open...
	console.log("RobotNTR v0.3, Running on NodeJS.\nLicensed under the Apache 2.0 License.")
	// Set updateProfile interval...
	client.setInterval(client.updateProfile, (120 * 1000));
    // Do it...
	client.updateProfile();
});
// Define updateProfile...
client.updateProfile = function() {
    //Define status messages...
	var statusMsgs = [
	    "with ur mum | ./help",
		"Minecraft | ./help",
		"with daddy Rapid | ./help",
		"with some toys | ./help",
		"on a server | ./help",
	];
        // Set 'Playing' text to a random choice out of the 'statusMsgs' variable...
        client.user.setPresence({game: {name: (statusMsgs[Math.floor(Math.random() * statusMsgs.length)]), type: 0 }});
};
// Start an event listener...
client.on('message', message => {

  if (message.channel.type === "text" && message.isMentioned(client.user)) {
      message.channel.send({
          embed: {
              color: 0x008080,
              fields: [
                  {
                      name: "Please do not mention me,\nI do not have capabilites beyond displaying this text...",
                      inline: true,

                  }
              ]
          }
      })
  }

// And then the commands.....
  else if (message.content === './ping') {
      message.channel.send({
          embed: {
              color: 0x008080,
              fields: [
                  {
                      name: "Pong! :ping_pong:",
                      value: "Ping Time: " + new Date().getTime() - message.createdTimestamp + " ms",
                      inline: true,
                  },
              ],
          }
      })
  }
  else if (message.content === './pong') {
      message.channel.send({
          embed: {
              color: 0x008080,
              fields: [
                  {
                      name: "Ping! :ping_pong:",
                      value: "Ping Time: " + new Date().getTime() - message.createdTimestamp + " ms",
                      inline: true,
                  },
              ],
          }
      })
  }
  else if (message.content === './avatar') {
      message.channel.send({
          embed: {
              color: 0x008080,
              title: "Avatar Retriever",
              description: "Utility to retrieve a users avatar from Discord.",
			  image: {
				  url: message.author.displayAvatarURL
			  }
          }
      })
  }
  else if (message.content === './channelid') {
    message.channel.send({embed:{
    color: 0x008080,
	title: "Channel Identifier",
	description: "Here it is...",
	thumbnail: {
		url:
          "https://cdn.discordapp.com/attachments/382331380656242702/382652629190311936/20171118_170053.jpg",
        },
	  fields: [
	  {
		  name: "This channels sorta cool ID is...",
		  value: message.channel.id,
		  inline: true,
	  },
	  ],
    }})
  }
  else if (message.content === './invite') {
      message.channel.send({
          embed: {
              color: 0x008080,
              fields: [
                  {
                      name: "Here you go :link:",
                      value: "https://discordapp.com/oauth2/authorize?client_id=378251561316384777&scope=bot&permissions=8",
                      inline: true,
                  },
              ],
          }
      })
  }
  else if (message.content === './botinfo') {
      message.channel.send({
          embed: {
              color: 0x008080,
              title: "Supremacy Bot Information",
              thumbnail: {
                  url:
                  "https://cdn.discordapp.com/attachments/382331380656242702/382652629190311936/20171118_170053.jpg",
              },
              fields: [
                  {
                      name: "Supremacy Bot",
                      value: "Bot made by Rapid, on a mobile device... so it's pretty basic.",
                      inline: true,
                  },
                  {
                      name: "More?",
                      value: "The bot was named after the server owned by Rapid. Wanna join here ya go https://discord.gg/pDvJZEN :)",
                      inline: true,
                  }
              ],
          }
      })
  }
  else if (message.content === './help') {
      message.channel.send({
          embed: {
              color: 0x008080,
              title: "Command list",
              description: "All commands are listen here! :page_facing_up:",
              thumbnail: {
                  url:
                  "https://cdn.discordapp.com/attachments/382331380656242702/382652629190311937/20171121_150421.png",
              },
              fields: [
                  {
                      name: "help",
                      value: "Shows this frickin' message you goon.",
                      inline: true,
                  },
                  {
                      name: "ping, pong",
                      value: "Respond with a test message. One writes 'Pong!', the other, 'Ping!'. Useful for checking response time.",
                      inline: true,
                  },
                  {
                      name: "avatar",
                      value: "Retrieves the users avatar directly from Discord.",
                      inline: true,
                  },
                  {
                      name: "channelid",
                      value: "Find the identifier for the channel the command was sent in.",
                      inline: true,
                  },
                  {
                      name: "invite",
                      value: "Posts a link to invite Supremacy Bot to your server.",
                      inline: true,
                  },
                  {
                      name: "botinfo",
                      value: "Displays some cool 'infotation' on the bot.",
                      inline: true,
                  },
		  {
		      name: "drake",
		      value: "Hotline bling!",
		      inline: true,
		  },
		  {
		      name: "online, idle",
		      value: "Changes the bot's status. One sets it to Online, the other to Idle.",
		      inline: true,
		  }
              ],
          }
      })
  }
    else if (message.content === './drake') {
      message.channel.send({
          embed: {
              color: 0x008080,
			  image: {
				  url: "https://cdn.discordapp.com/attachments/382331380656242702/382550019711959040/drake.gif"
			  }
          }
      })
  }
    else if (message.content === './idle') {
		client.user.setStatus("idle");
  }
    else if (message.content === './online') {
		client.user.setStatus("online");
  }
});

// Log in using a given token...
client.login(process.env.BOT_TOKEN);
