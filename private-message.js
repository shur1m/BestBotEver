module.exports = (client, triggerText, replyText) => {
    client.on('message', message => {
        if (message.channel.type === 'dm' &&
            message.content.toLowerCase() === triggerText.toLowerCase()
        ) {
            message.author.send(replyText);
        }
    });
};

/*
Sending by user ID 

client.users.fetch(SOMEUSERID).then((user) => {
    user.send('Hello World');
});


*/