export const updateBook = (book) => {
  fetch(`http://localhost:3001/api/books/${book.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify( book ) // body data type must match "Content-Type" header
  });
}

export const deleteBook = (id) => {
  fetch(`http://localhost:3001/api/books/${id}`, {
    method: 'DELETE'
  });
}

export const addBook = (book) => {
  fetch(`http://localhost:3001/api/books`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify( book )
  });
}

export const fetchBookById = async (id) => {
  const res = await fetch(`http://localhost:3001/api/books/${id}`);
  const { data } = await res.json();
  return data;
}

export const fetchBooks = async () => {
  const res = await fetch("http://localhost:3001/api/books");
  const { data } = await res.json();
  return data;
}