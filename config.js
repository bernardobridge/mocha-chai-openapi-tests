const dotenv = require('dotenv');
dotenv.config();

module.exports = {
    baseURL: process.env.BASE_URL,
    clientId: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
}