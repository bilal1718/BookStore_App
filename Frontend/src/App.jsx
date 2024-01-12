import './App.css'
import {BrowserRouter,Routes,Route} from "react-router-dom";
import About from './components/about'
import Home from './components/Home';
import AddBook from './components/addBook';
import Books from './components/Book/books';
import BookDetail from './components/Book/bookDetail';

export default function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route index element={<Home />} />
     <Route path="/books" element={<Books />} />
     <Route path="/addBook" element={<AddBook />} />
     <Route path="/about" element={<About />} />
     <Route path="/books/:id" element={<BookDetail />} exact/>
   </Routes>
   </BrowserRouter>
  )
}