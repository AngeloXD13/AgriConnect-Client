const { WebAdapter } = require('botbuilder-adapter-web');

const adapter = new WebAdapter();
const controller = new Botkit({
    adapter,
    // ...other options
});

// TODO: expose chat client

controller.on('message', async(bot, message) => {
    await bot.reply(message, 'I heard a message!');

    console.log('Chat with me: http://localhost:' + (process.env.PORT || 3000));
});