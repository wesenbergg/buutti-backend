import React, { useEffect, useState } from 'react';

const App = () => {
  const [books, setBooks] = useState([])
  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const [description, setDescription] = useState('')

  const handleSubmit = () => {
    console.log({ title, author, description });
  }

  useEffect(() => {
    fetch("http://localhost:3001/api/books")
      .then(res => res.json())
      .then(({ data }) => setBooks(data))
  }, [])

  return ( 
    <>
      <p>Book store</p>
      <p>Next step add fetch</p>
      <form onSubmit={handleSubmit}>
        <label>Add title:</label>
        <input value={title} onChange={({ target }) => setTitle(target.value)}/>
        <label>Add title:</label>
        <input value={author} onChange={({ target }) => setAuthor(target.value)}/>
        <label>Add description:</label>
        <input value={description} onChange={({ target }) => setDescription(target.value)}/>
        <button type="submit">Submit</button>
      </form>
      {books.map((b) => 
      <div key={b.id}>
        <h3>{b.title}</h3>
        <p>{b.author}</p>
      </div>)}
    </>
   );
}
 
export default App;
