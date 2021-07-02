const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('./auth.json');

client.on('ready', () => {
    console.log('the client is ready');
});

client.login(config.token);