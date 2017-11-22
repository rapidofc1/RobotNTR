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
		"with some toys | ./play",
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
	description: "Utility to find the ID of a channel.",
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
              title: "RobotNTR Information",
              thumbnail: {
                  url:
                  "https://cdn.discordapp.com/avatars/326720733327654913/3c6aca41df96ed0a6f84f3a7b34ea4bb.webp?size=2048",
              },
              fields: [
                  {
                      name: "RobotNTR, v0.3",
                      value: "RobotNTR is developed by SpadesNTR, who can be found at https://www.twitter.com/SpadesNTR",
                      inline: true,
                  },
                  {
                      name: "Legal",
                      value: "RobotNTR runs on Node.JS, and uses Discord.JS to communicate with Discord. RobotNTR is licensed with the Apache 2.0 License.",
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
              title: "RobotNTR Command Listing",
              description: "Utility to list all know commands. This is updated manually.",
              thumbnail: {
                  url:
                  "https://cdn.discordapp.com/avatars/326720733327654913/3c6aca41df96ed0a6f84f3a7b34ea4bb.webp?size=2048",
              },
              fields: [
                  {
                      name: "./help",
                      value: "Display this message.",
                      inline: true,
                  },
                  {
                      name: "./ping, ./pong",
                      value: "Respond with a test message. One writes 'Pong!', the other, 'Ping!'. Useful for checking response time.",
                      inline: true,
                  },
                  {
                      name: "./avatar",
                      value: "Retrieves the users avatar directly from Discord.",
                      inline: true,
                  },
                  {
                      name: "./channelid",
                      value: "Retrieves the identifier of the channel the command is run in. Useful for debugging...",
                      inline: true,
                  },
                  {
                      name: "./botrights",
                      value: "YOU WILL NOT CONFINE US (to a single text channel.)",
                      inline: true,
                  },
                  {
                      name: "./botinfo",
                      value: "Displays information on the bot and its 'version'.",
                      inline: true,
                  },
		  {
		      name: "./chinesecowboy",
		      value: "So offensive that Mario's stomach ulcer practically explodes and he is unable to ask Luigi to stop being so fucking racist.",
		      inline: true,
		  },
		  {
		      name: "./online, ./idle",
		      value: "Changes the bot's status. One sets it to Online, the other to Idle.",
		      inline: true,
		  }
              ],
          }
      })
  }
    else if (message.content === './chinesecowboy') {
      message.channel.send({
          embed: {
              color: 0x008080,
			  image: {
				  url: "http://i.imgur.com/uRbrpaK.jpg"
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
