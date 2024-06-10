const dotenv = require('dotenv');
dotenv.config();

const config = {
  TG_TOKEN: process.env.TG_TOKEN,
};

module.exports = config;
