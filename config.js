const dotenv = require('dotenv');
dotenv.config();

const orgName = process.env.ORG_NAME;
const environment = process.env.ENVIRONMENT;

module.exports = {
    baseURL: process.env.BASE_URL || `https://${orgName}-${environment}.apigee.net`,
    clientId: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
}