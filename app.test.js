const { app, server } = require('./app');
const request = require('supertest');

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
  });

  afterAll(() => server.close());
});
