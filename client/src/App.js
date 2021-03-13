import React, { useEffect, useState } from 'react';
import { fetchBooks, fetchBookById, updateBook, deleteBook, addBook } from './bookService'

const App = () => {
  const [books, setBooks] = useState([])
  const [id, setId] = useState()
  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const [description, setDescription] = useState('')
  const [currentBook, setCurrentBook] = useState()

  const reset = () => {
    setId('')
    setTitle('')
    setAuthor('')
    setDescription('')
  }

  console.log(books);
  const handleSubmit = async (e) => {
    e.preventDefault()
    const newBook = await addBook({ title, author, description })
    if(!newBook)return;
    setBooks([...books, newBook ])
    reset()
  }

  const handleEdit = () => {
    setId(currentBook.id)
    setTitle(currentBook.title)
    setAuthor(currentBook.author)
    setDescription(currentBook.description)
  }

  const handleDelete = async () => {
    const res = deleteBook(id)
    if(!res) return;
    setBooks(books.filter(b => b.id !== parseInt(id)))
    setCurrentBook(false)
    reset()
  }

  const handleUpdate = async () => {
    const data = await updateBook({ id, title, author, description })
    if(!data) return;
    setBooks(books.map(b => parseInt(id) === b.id ? data: b))
    setCurrentBook(data)
    reset()
  }

  const handleExpand = async (book) => {
    const { id, description } = book
    if(description) return setCurrentBook(book)
    const res = await fetchBookById(id)
    setCurrentBook(res)
  }

  useEffect(() => {
    const f = async () => {
      const res = await fetchBooks()
      setBooks(res)
    }
    f()
  }, [])

  return ( 
    <>
      {currentBook &&
      <>
        <h2>{currentBook.title}</h2>
        <small>{currentBook.author}</small>
        <p>{currentBook.description}</p>
        <button onClick={handleEdit}>edit</button>
      </>}
      <form onSubmit={handleSubmit}>
        <label>Add title:</label>
        <input value={title} onChange={({ target }) => setTitle(target.value)}/>
        <label>Add title:</label>
        <input value={author} onChange={({ target }) => setAuthor(target.value)}/>
        <label>Add description:</label>
        <textarea rows={4}
          value={description} onChange={({ target }) => setDescription(target.value)}/>
        {typeof id === "number" ?
          <>
            <span onClick={handleUpdate}>Save</span>
            <span onClick={handleDelete}>Delete</span>
          </>:
          <button type="submit">Save New</button>
        }
      </form>
      {books.map((b) => 
      <div key={b.id}>
        <h3>{b.title}</h3>
        <p>{b.author}</p>
        <button onClick={() => handleExpand(b)}>Show full article</button>
      </div>)}
    </>
   );
}
 
export default App;
