import React,{useState,useEffect} from 'react';
import axios from 'axios';
import Book from './book';


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
      <h1>Book List</h1>
       <ul>
        {books && books.map((book,i) => (
          <div key={i}>
            <Book book={book}/>
          </div>
        ))}
      </ul>
    </div>
  )
}

export default Books