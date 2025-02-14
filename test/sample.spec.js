const supertest = require('supertest');
const chai = require('chai');
const path = require('path');
const chaiResponseValidator = require('chai-openapi-response-validator');
const expect = chai.expect;
chai.use(chaiResponseValidator(path.join(__dirname, '../openapi.yaml')));

const { baseURL } = require('../config');
const { getAccessToken } = require('../lib/authorization');

describe('JSON-Placeholder API Tests', () => {
    let api;
    let bearerToken;

    before(async () => {
        api = supertest(baseURL)
        // bearerToken = await getAccessToken();
        bearerToken = 'test';
    })

    describe('/posts endpoint', () => {
        it('should return 201 when post with no body', async () => {
            const response = await api
                .post('/posts')
                .set('Authorization', `Bearer ${bearerToken}`)

            expect(response.statusCode).to.equal(201);
            expect(response).to.satisfyApiSpec;
        })

        it('should return a 404 when you GET and no posts are available', async () => {
            const idOfNonExistentItem = 105;
            const response = await api
                .get(`/posts/${idOfNonExistentItem}`)
                .set('Authorization', `Bearer ${bearerToken}`)
            
            expect(response.statusCode).to.equal(404);
            expect(response).to.satisfyApiSpec;
        })
    })
})