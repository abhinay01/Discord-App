require("dotenv").config();

const { Client,GatewayIntentBits, messageLink } = require('discord.js');

const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages,GatewayIntentBits.MessageContent] });

client.on('ready',()=>{
    console.log(`${client.user.tag} has logged in`);
});

client.on('messageCreate', (message) => {
    console.log("hello");
    console.log(`messageCreate: ${message}`);
});

client.on('messageDelete', (message) => {
    console.log(`messageDelete: ${message}`);
});

client.login(process.env.DISCORD_BOT_TOKEN);