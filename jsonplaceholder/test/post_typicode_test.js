const assert = require('chai').expect;
const chai = require('chai');
chai.use(require('chai-json-schema'));

const page = require('../page/typicode_page.js');
const data = require('../data/typicode_data.json');
const schema = require('../data/post_typicode_schema.json');

const testCase = {
 "positive" : {
    "postData" : "As a User, I want to be able to post data and make sure have correct response",
 }
}

describe(`Post Data`, () => {
 it(`@post ${testCase.positive.postData}`, async() => {
  const response = await page.postData(data);
  assert(response.status).to.equal(201);
  assert(response.body.title).to.equal(data.title);
  assert(response.body.body).to.equal(data.body);
  assert(response.body.userId).to.equal(data.userId);
  assert(response.body).to.be.jsonSchema(schema);
 })
}) 