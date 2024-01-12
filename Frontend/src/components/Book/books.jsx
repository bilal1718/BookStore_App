import React,{useState,useEffect} from 'react';
import axios from 'axios';
import Book from './book';
import Footer from '../footer';
import Nav from '../nav';


const Books = () => {
    const [books,setBooks]=useState([]);
    useEffect(() => {
        const fetchBooks = async () => {
          try {
            const response = await axios.get('http://localhost:5000/books');
            setBooks(response.data.books);
            console.log("Data",response.data.books);
          } catch (error) {
            console.error('Error fetching books:', error);
          }
        };
        fetchBooks();
      }, []);
  return (
    <div>
      <Nav />
    <h1 className="text-4xl font-semibold mt-6 mb-8 flex justify-center">All Books</h1>

      <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4">
        {books && books.map((book) => (
        <Book book={book}/>
        ))}
    </div>
    </div>
    <Footer />
    </div>
  )
}

export default Books