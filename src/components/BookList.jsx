export const BookList = ({ books, deleteBook, setSelectedBook }) => {
  if (!books.length) {
    return (
      <p>
        <b>No book found.</b>
      </p>
    );
  }

  return (
    <ul>
      {books.map((book) => (
        <li key={book.id}>
          {book.title}

          <button type="button" onClick={() => setSelectedBook(book)}>
            Edit
          </button>

          <button type="button" onClick={() => deleteBook(book.id)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};
