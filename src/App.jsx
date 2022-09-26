// Libraries
import { useEffect, useState } from 'react';

// API
import { bookApi } from './api';

// Components
import { BookForm } from './components/BookForm';
import { BookList } from './components/BookList';

export const App = () => {
  const [books, setBooks] = useState([]);
  const [selectedBook, setSelectedBook] = useState(null);

  const createBook = async (book) => {
    await bookApi.createBook(book);
    await getBooks();
  };

  const deleteBook = async (bookId) => {
    await bookApi.deleteBook(bookId);
    await getBooks();
  };

  const getBooks = async () => {
    const res = await bookApi.getBooks();
    setBooks(res.data);
  };

  const saveBook = async (book) => {
    if (book.id) {
      await updateBook(book.id, book);
    } else {
      await createBook(book);
    }

    setSelectedBook(null);
  };

  const updateBook = async (bookId, bookData) => {
    await bookApi.updateBook(bookId, bookData);
    await getBooks();
  };

  useEffect(() => getBooks, []);

  return (
    <>
      <BookForm saveBook={saveBook} selectedBook={selectedBook} />
      <BookList books={books} deleteBook={deleteBook} setSelectedBook={setSelectedBook} />
    </>
  );
};
