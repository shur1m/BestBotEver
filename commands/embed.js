module.exports = {
    commands: ['embed', 'emb'],
    minArgs: 0,
    maxArgs: 0,
    callback: (message, arguments, text) => {
        const Discord = require('discord.js');
        const embed = new Discord.MessageEmbed()
            .setTitle("Shurim's 3am Translations")
            .setAuthor(message.author.username)
            .setDescription("Shurim is the best :)")
            .setURL('https://shurimtranslation.com/')
            .setImage('https://i.imgur.com/9hutOkD.jpg')
            .setThumbnail('https://i.imgur.com/h52J8Mx.png')
            .setColor('#91C0FF')
            .addFields(
                {
                    name: "Introduction",
                    value: "Conqueror of the Seven Seas",
                    inline: false,
                },

                {
                    name: "About",
                    value: "best brother ever",
                    inline: false,
                },
            )
        message.channel.send(embed);
        console.log(embed);
    },
    permissions: [],
    requiredRoles: [],
}