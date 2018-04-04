const { Command } = require('klasa');

module.exports = class extends Command {

    constructor(...args) {
        super(...args, {
            name: 'twitter',
            enabled: true,
            runIn: ['text', 'dm', 'group'],
            cooldown: 0,
            bucket: 1,
            permLevel: 0,
            botPerms: ['EMBED_LINKS'],
            description: 'Posts the official Sea of Thieves Twitter account!',
            quotedStringSupport: false,
            usage: '',
            usageDelim: undefined,
            extendedHelp: 'No extended help available.'
        });
    }

    async run(msg, [...params]) {
        
    }

    async init() {
        /*
         * You can optionally define this method which will be run when the bot starts
         * (after login, so discord data is available via this.client)
         */
    }

};