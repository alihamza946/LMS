import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const ManageBooks = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch books data from backend API
    axios
      .get('http://localhost:5000/api/books') // Replace with your API endpoint
      .then((response) => {
        setBooks(response.data);
        setLoading(false);
      })
      .catch((err) => {
        setError('Failed to fetch books');
        setLoading(false);
      });
  }, []);

  const deleteBook = (id) => {
    axios
      .delete(`http://localhost:5000/api/books/${id}`)
      .then(() => {
        setBooks(books.filter((book) => book.id !== id));
      })
      .catch((err) => {
        setError('Failed to delete the book');
      });
  };

  if (loading) return <div>Loading books...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div>
      <h1>Manage Books</h1>
      <Link to="/admin/add-book">Add New Book</Link>
      <ul>
        {books.map((book) => (
          <li key={book.id}>
            <h3>{book.title}</h3>
            <p>{book.author}</p>
            <Link to={`/admin/book/${book.id}`}>View Details</Link>
            <button onClick={() => deleteBook(book.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ManageBooks;
