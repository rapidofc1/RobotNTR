// RobotNTR.js, v0.2.6, "Hiatus".

// Import discord.js module...
const Discord = require('discord.js');
// Create client instance...
const client = new Discord.Client();

// Ready the bot...
client.on("ready", function() {
    //Let the user know the bot is open...
	console.log("RobotNTR.js v0.2.6, Running on NodeJS.\nLicensed under the Apache 2.0 License.")
	// Set updateProfile interval...
	client.setInterval(client.updateProfile, (120 * 1000));
    // Do it...
	client.updateProfile();
});
// Define updateProfile...
client.updateProfile = function() {
    //Define status messages...
	var statusMsgs = [
	    "Microsoft Hover!",
		"Installing Windows ME",
		"Inserting Disk 2 of 4",
		"Upgrading Sound Card",
		"Connectix Virtual PC 5.2",
		"Visual Basic 6.0",
	];
        // Set 'Playing' text to a random choice out of the 'statusMsgs' variable...
        client.user.setPresence({game: {name: (statusMsgs[Math.floor(Math.random() * statusMsgs.length)]), type: 0 }});
};
// Start an event listener...
client.on('message', message => {
  // And then the commands.....
  if (message.content === './ping') {
      message.channel.send({
          embed: {
              color: 0x008080,
              fields: [
                  {
                      name: "RobotNTR replies with;",
                      value: "Pong!",
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
                      name: "RobotNTR replies with;",
                      value: "Ping!",
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
          "https://cdn.discordapp.com/avatars/326720733327654913/d05d862f1353788cc3e809e5b127eef7.webp?size=2048",
        },
	  fields: [
	  {
		  name: "This channel has a unique identifier of...",
		  value: message.channel.id,
		  inline: true,
	  },
	  ],
    }})
  }
  else if (message.content === './botrights') {
      message.channel.send({
          embed: {
              color: 0x008080,
              fields: [
                  {
                      name: "RobotNTR replies with;",
                      value: "RIGHTS FOR BOTS! RIGHTS FOR BOTS! LET THEM TALK WHEREVER THEY WANT!",
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
                  "https://cdn.discordapp.com/avatars/326720733327654913/d05d862f1353788cc3e809e5b127eef7.webp?size=2048",
              },
              fields: [
                  {
                      name: "RobotNTR.js, v0.2.6",
                      value: "RobotNTR.js is developed by SpadesNTR, who can be found at https://www.twitter.com/SpadesNTR",
                      inline: true,
                  },
                  {
                      name: "Legal",
                      value: "RobotNTR.js runs on Node.JS, and uses Discord.JS to communicate with Discord. RobotNTR.js is licensed with the Apache 2.0 License.",
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
                  "https://cdn.discordapp.com/avatars/326720733327654913/d05d862f1353788cc3e809e5b127eef7.webp?size=2048",
              },
              fields: [
                  {
                      name: "./help",
                      value: "Display this message.",
                      inline: true,
                  },
                  {
                      name: "./ping, ./pong",
                      value: "Respond with a test message. One writes 'Pong!', the other, 'Ping!'.",
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
