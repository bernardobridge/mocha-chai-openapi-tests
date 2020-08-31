const supertest = require('supertest');
const chai = require('chai');
const path = require('path');
const chaiResponseValidator = require('chai-openapi-response-validator');
const expect = chai.expect;
chai.use(chaiResponseValidator(path.join(__dirname, '../openapi.yaml')));


const { baseURL } = require('../config');

describe('JSON-Placeholder API Tests', () => {
    let api;

    before(async () => {
        api = supertest(baseURL)
    })

    describe('POST /posts endpoint', () => {
        it('should return 201 when post with no body', async () => {
            const response = await api
                .post('/posts')
                // .set('Authorization', `Bearer ${}`)
                // .expect(201)

            expect(response.statusCode).toBe(201);
            expect(response).to.satisfyApiSpec
        })
    })
})