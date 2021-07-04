module.exports = {
    commands: ['schedule', 'sched'],
    expectedArgs: '<seconds> <message>',
    minArgs: 2,
    maxArgs: null,
    callback: (message, arguments, text) => {
        let [delay, ...input] = arguments;
        joinText = input.join(' ');

        setTimeout(() => {
            message.reply(`${joinText}`);            
        }, delay * 1000);
    },
    permissions: [],
    requiredRoles: [],
}