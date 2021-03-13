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

  const isDisabled = () => (typeof id === "number")

  return ( 
    <div className="container p-5 mt-5">
      <h1 className="text-center">Book list</h1>
      {currentBook &&
      <div className="card p-4 mb-5">
        <div className="card-header">
          <h2 className="card-title">{currentBook.title}</h2>
          <small className="card-subtitle">{currentBook.author}</small>
        </div>
        <div className="card-body">
          <p className="card-text">{currentBook.description}</p>
          <button className="btn btn-light" onClick={handleEdit}>edit</button>
        </div>
        
      </div>}
      <form className="p-4 mb-5 card">
        <div className="card-body"><label className="form-label" >Add title:</label>
        <input className="form-control mb-2" value={title} onChange={({ target }) => setTitle(target.value)}/>
        <label className="form-label">Add title:</label>
        <input className="form-control mb-2" value={author} onChange={({ target }) => setAuthor(target.value)}/>
        <label className="form-label">Add description:</label>
        <textarea className="form-control mb-2" rows={4}
          value={description} onChange={({ target }) => setDescription(target.value)}/>
        
          <button disabled={!isDisabled()} className="btn btn-success" type="button" onClick={handleSubmit}>Save New</button>
        <button disabled={isDisabled()} className="btn btn-success" type="button" onClick={handleUpdate}>Save</button>
        <button disabled={isDisabled()} className="btn btn-outline-danger" type="button" onClick={handleDelete}>Delete</button>

        </div>
        
      </form>
      {books.map((b) => 
        <div className="card mb-3" key={b.id}>
          <h3 className="card-header">{b.title}</h3>
          <div className="card-body">
            <p>{b.author}</p>
            <button className="btn btn-outline-light" onClick={() => handleExpand(b)}>Show full article</button>
          </div>
        </div>
      )}
    </div>
   );
}
 
export default App;
