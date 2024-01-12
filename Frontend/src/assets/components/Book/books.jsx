import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Book from './book';
import Footer from '../footer';
import Nav from '../nav';

const Books = () => {
  const [books, setBooks] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get('http://localhost:5000/books');
        setBooks(response.data.books);
        console.log("Data", response.data.books);
      } catch (error) {
        console.error('Error fetching books:', error);
      }
    };
    fetchBooks();
  }, []);

  // Filter books based on the search term
  const filteredBooks = books.filter((book) =>
    book.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    book.author.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <div>
      <Nav />
      <h1 className="text-4xl font-semibold mt-6 mb-8 flex justify-center">All Books</h1>

      <div className="mx-auto container p-4">
        {/* Search Bar */}
        <input
          type="text"
          placeholder="Search by title or author"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="p-4 mb-4 border rounded-md"
        />
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4">
          {filteredBooks.map((book) => (
            <Book key={book._id} book={book} />
          ))}
      </div>
      </div>
      <Footer />
    </div>
  );
};

export default Books;
