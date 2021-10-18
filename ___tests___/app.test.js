'use strict';

const app = require('../app.js');
const supertest = require('supertest');
const { expect } = require('@jest/globals');
// this object can make mocked http requests to an express exported at /app.js
const request = supertest(app);

describe('testing express server', () => {
  it('should respond with string on post /talk', async () => {
    let param = 'Iamsomewords';
    let response = await request.post(`/talk?words=${param}`);
    expect(response.status).toBe(200);
    expect(typeof response.text).toBe('string');
    expect(response.text).toBe(param);
  });
  it('should respond with a string on get /repeat', async () => {
    let response = await request.get('/repeat');
    expect(response.status).toBe(200);
    expect(typeof response.text).toBe('string');
  });
  
});