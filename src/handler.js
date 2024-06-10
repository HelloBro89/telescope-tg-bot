const TelegramApi = require('node-telegram-bot-api');
const config = require('./config/envs-dev');
const bot = new TelegramApi(config.TG_TOKEN, { polling: false });

let isFirstStart = true;

module.exports.runBot = async (event) => {
  console.log('Event:', event);

  try {
    const body = JSON.parse(event.body);

    if (body.message) {
      const chatId = body.message.chat.id;
      const text = body.message.text;
      console.log({ text });
      if (isFirstStart) {
        await bot.sendMessage(chatId, 'Доступна только одна команда: /start');
        isFirstStart = false;
      }
      if (text === '/start') {
        await bot.sendMessage(chatId, 'Hello Скамина! Чё делаешь? Писю к носу подтягиваешь ?');
      } else {
        await bot.sendMessage(
          chatId,
          'Пшел вон! Я еще ничего не умею... Я пока что в разработке .!.',
        );
      }
    }
    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Message processed successfully' }),
    };
  } catch (e) {
    console.error('Error:', e);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'Internal Server Error' }),
    };
  }
};
