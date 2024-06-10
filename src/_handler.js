const TelegramApi = require('node-telegram-bot-api');
const config = require('./config/envs-dev');
const bot = new TelegramApi(config.TG_TOKEN, { polling: false });

let isFirstStart = true;

module.exports.runBot = async (event) => {
  const startTime = Date.now();
  try {
    const body = JSON.parse(event.body);

    if (body.message) {
      const chatId = body.message.chat.id;
      const text = body.message.text;

      if (text === '/start') {
       
        console.log(' TEST START');
        // await bot.sendSticker(
        //   chatId,
        //   'https://tlgrm.ru/_/stickers/4dd/300/4dd300fd-0a89-3f3d-ac53-8ec93976495e/2.webp',
        // );

        return bot.sendMessage(chatId, 'Hello Скамина! Чё делаешь? Писю к носу подтягиваешь ?');
      } else {
        await bot.sendMessage(
          chatId,
          'Пшел вон! Я еще ничего не умею... Я пока что в разработке *.!.*',
        );
      }
    }
    const endTime = Date.now();
    const elapsedTime = endTime - startTime;
    console.log(`---------> Time duration ${elapsedTime} ms`);
    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Function executed successfully' }),
    };
  } catch (e) {
    console.error('Error:', e);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'Internal Server Error' }),
    };
  }
};

//
