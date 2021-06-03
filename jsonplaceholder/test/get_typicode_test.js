const assert = require('chai').expect;
const chai = require('chai');
chai.use(require('chai-json-schema'));

const page = require('../page/typicode_page.js');
const schema = require('../data/get_typicode_schema.json');

const testCase = {
 "positive" : {
    "getData" : "As a User, I want to be able to get data and make sure type data is correct",
 }
}

describe(`Get Data`, () => {
 it(`@get ${testCase.positive.getData}`, async() => {
  const response = await page.getData();
  assert(response.status).to.equal(200);
  assert(response.body).to.be.jsonSchema(schema);
 })
}) 