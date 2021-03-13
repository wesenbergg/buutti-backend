const supertest = require('supertest')
const app = require('../app')

const api = supertest(app)

test('ping are returned as json', async () => {
  await api
    .get('/api/ping')
    .expect(200)
    .expect('Content-Type', /application\/json/)
})

test('unknown endpoint', async () => {
  await api
    .get('/api/invalid-endpoint-123')
    .expect(404)
    .expect('Content-Type', /application\/json/)
})