const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('./auth.json');
const command = require('./ping.js');

client.on('ready', () => {
    console.log('the client is ready');

    command(client, ['ping', 'test'], (message) => {
        message.channel.send('Pong!');
    });
});

client.login(config.token);