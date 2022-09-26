// Libraries
import { useEffect, useState } from 'react';

export const BookForm = ({ saveBook, selectedBook }) => {
  const [author, setAuthor] = useState('');
  const [editorial, setEditorial] = useState('');
  const [title, setTitle] = useState('');
  const [year, setYear] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    saveBook({ author, editorial, title, year, id: selectedBook?.id });
    setAuthor('');
    setEditorial('');
    setTitle('');
    setYear('');
  };

  useEffect(() => {
    if (!selectedBook) return;

    setAuthor(selectedBook.author);
    setEditorial(selectedBook.editorial);
    setTitle(selectedBook.title);
    setYear(selectedBook.year);
  }, [selectedBook]);

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="title">Título</label>
        <input
          id="title"
          placeholder="Escribe un título"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="author">Autor</label>
        <input
          id="author"
          placeholder="Escribe un autor"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="year">Año</label>
        <input
          id="year"
          placeholder="Escribe un año"
          type="number"
          value={year}
          onChange={(e) => setYear(e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="editorial">Editorial</label>
        <input
          id="editorial"
          placeholder="Escribe una editorial"
          value={editorial}
          onChange={(e) => setEditorial(e.target.value)}
        />
      </div>

      <button type="submit">Guardar libro</button>
    </form>
  );
};
