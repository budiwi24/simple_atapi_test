const supertest = require('supertest');
const env = require('dotenv').config();

const api = supertest('https://jsonplaceholder.typicode.com/posts');

const getData = () => api.get('')
 .set('Content-Type', 'application/json');

const postData = (payload) => api.post('')
 .set('Content-Type', 'application/json')
 .send(payload);

module.exports = {
    getData, postData
}