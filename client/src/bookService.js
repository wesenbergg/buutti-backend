export const updateBook = async (book) => {
  const res = await fetch(`http://localhost:3001/api/books/${book.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify( book ) // body data type must match "Content-Type" header
  });
  if(res.status !== 200) return;
  return await res.json();
}

export const deleteBook = async (id) => {
  const res = await fetch(`http://localhost:3001/api/books/${id}`, {
    method: 'DELETE'
  });
  const { status } = res;
  return ( status === 200 );
}

export const addBook = async (book) => {
  const res = await fetch(`http://localhost:3001/api/books`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify( book )
  });
  if(res.status !== 200) return;
  return await res.json();
}

export const fetchBookById = async (id) => {
  const res = await fetch(`http://localhost:3001/api/books/${id}`);
  const data = await res.json();
  if(res.status !== 200) return;
  return data;
}

export const fetchBooks = async () => {
  const res = await fetch("http://localhost:3001/api/books");
  const data = await res.json();
  if(res.status !== 200) return;
  return data;
}