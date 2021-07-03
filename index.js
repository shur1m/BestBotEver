//initial setup
const path = require('path');
const fs = require('fs');
const Discord = require('discord.js');
const client = new Discord.Client();

//importing required files 
const config = require('./auth.json');
const command = require('./command.js');
const privateMessage = require('./private-message.js');

//initializing bot
client.on('ready', async () => {
    console.log('the client is ready');
    
    const baseFile = 'command-base.js';
    const commandBase = require(`./commands/${baseFile}`);

    //reading files from commands folder
    const readCommands = dir => {
        const files = fs.readdirSync(path.join(__dirname, dir));
        for (const file of files){
            const stat = fs.lstatSync(path.join(__dirname, dir, file))
            if (stat.isDirectory()) {
                readCommands(path.join(dir, file));
            } else if (file !== baseFile){
                const option = require(path.join(__dirname, dir, file))
                commandBase(client, option);
            }
        }
    };

    readCommands('commands');

    //ping
    command(client, ['ping', 'test'], (message) => {
        message.channel.send('Pong!');
    });

    //deleting all messages in channel
    command(client, ['cc', 'clearChannel'], (message) => {
        if (message.channel.type == 'dm') { return; } 
        
        if (message.member.hasPermission('MANAGE_MESSAGES')){
            message.channel.messages.fetch().then((results) => {
                message.channel.bulkDelete(results);
            });
        }
    });

    //setting current status
    command(client, 'status', (message) => {
        const content = message.content.replace('!status', '');

        client.user.setPresence({
            activity: {
                name: content,
                type: 0,
            }
        });
    });

    //pm ping
    privateMessage(client, 'ping', 'pong');
});

client.login(config.token);