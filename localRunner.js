const { runBot } = require('./src/handler');

const TEST_EVENT = {
  message: {
    chat: {
      id: 1,
    },
  },
};
(async () => {
  console.log('Local running...');
  runBot({ Records: [{ body: JSON.stringify(TEST_EVENT) }] });
})();


