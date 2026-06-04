const request = require('supertest');
const app = require('./app');

describe('Todo API Tests', () => {

  test('GET /todos - empty list வரணும்', async () => {
    const res = await request(app).get('/todos');
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual([]);
  });

  test('POST /todos - todo create ஆகணும்', async () => {
    const res = await request(app)
      .post('/todos')
      .send({ text: 'DevOps படிக்கணும்' });
    expect(res.statusCode).toBe(201);
    expect(res.body.text).toBe('DevOps படிக்கணும்');
  });

});
