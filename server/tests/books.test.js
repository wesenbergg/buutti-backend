const { data } = require('../data')
const supertest = require('supertest')
const app = require('../app')

const api = supertest(app)

const newBook = {
  title: "testBook",
  author: "testAuthor",
  description: "description"
}

let initialData

beforeAll(() => {
  initialData = data;
})

test('books are returned as json', async () => {
  await api
    .get('/api/books')
    .expect(200)
    .expect('Content-Type', /application\/json/)
})

test('book 1 is returned as json', async () => {
  await api
    .get('/api/books/1')
    .expect(200)
    .expect('Content-Type', /application\/json/)

  const response = await api.get('/api/books/1')
  expect(response.body.title).toContain(
    'Lolita'
  )
})

test('unknown id', async () => {
  await api
    .get('/api/books/oaisjd')
    .expect(400)
    .expect('Content-Type', /text\/html/)
})

test('new book posting is working', async () => {
  await api
    .post('/api/books/')
    .send(newBook)
    .expect(200)
    .expect('Content-Type', /application\/json/)

    const response = await api.get('/api/books')

    const titles = response.body.map(r => r.title)

    expect(response.body).toHaveLength(initialData.length + 1)
    expect(titles).toContain(
      'testBook'
    )
})

test('modifying book is working', async () => {
  await api
    .put('/api/books/1')
    .send(newBook)
    .expect(200)
    .expect('Content-Type', /application\/json/)
})

test('deleting is working', async () => {
  await api
    .delete('/api/books/1')
    .expect(200)
    .expect('Content-Type', /text\/html/)
})