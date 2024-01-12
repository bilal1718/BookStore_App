import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from './header';
import axios from 'axios';
import Footer from './footer';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const history = useNavigate();
  const [books, setBooks] = useState([]);

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

  const handleDelete = async (id) => {
    await axios
      .delete(`http://localhost:5000/books/${id}`)
      .then((res) => res.data)
      .then(() => history('/'))
  };

  const handleUpdate = async (id) => {
    // Add logic to update book with the given id
    try {
      // Make PUT request to update the book
      // Update state accordingly
    } catch (error) {
      console.error('Error updating book:', error);
    }
  };

  return (
    <>
      <Header />
      <div className="container mx-auto p-4">
        <h1 className="text-4xl font-semibold mb-12 justify-center flex">Featured Books</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
          {books && books.slice(0, 6).map((book, i) => (
            <div key={i} className="rounded-lg bg-white shadow-md flex flex-col h-full">
              <div className="relative overflow-hidden bg-cover bg-no-repeat flex-grow">
                <img className="rounded-t-lg" src={book.image} alt="" />
              </div>
              <div className="p-4 flex flex-col justify-between">
                <div>
                  <div className="flex justify-between mb-2">
                    <h1 className="text-2xl uppercase font-semibold ml-0">{book.name}</h1>
                  </div>
                  <p className="text-xl capitalize text-neutral-600 mb-4">Author: {book.author}</p>
                </div>
                <div className="flex justify-between mt-4">
                <Link to={`/books/${book._id}`}>
                  <button
                    className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
                  >
                    Update
                  </button>
                  </Link>
                  <button
                    onClick={() => handleDelete(book._id)}
                    className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
