const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("600367681551728687")
setInterval(function() {
channel.send(`Khaled xd`);
}, 30)
})

client.login(process.env.BOT_TOKEN);