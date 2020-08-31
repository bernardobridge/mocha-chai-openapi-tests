const supertest = require('supertest');
const { Base64 } = require('js-base64');
const { baseURL, clientId, clientSecret } = require('../config');

const getAccessToken = async () => {
    const tokenApi = supertest(baseURL)
    const basicAuth = Base64.encode(`${clientId}:${clientSecret}`)

    const response = await tokenApi
        .post('/oauth/token')
        .query({ grant_type: 'client_credentials'})
        .set('Authorization', `Basic ${basicAuth}`)

    return response.body.access_token
}

module.exports = { getAccessToken };
