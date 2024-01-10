import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
const Book = ({book}) => {
    const {_id,name,author,description,price,available,image}=book;
    const history=useNavigate();
    const handleDelete=async()=>{
        await axios.delete(`http://localhost:5000/books/${_id}`)
        .then((res)=>res.data)
        .then(()=>history("/"))
        .then(()=>history("/books"));
    }
  return (
    <div key={_id} className="max-w-sm rounded overflow-hidden shadow-lg m-4">
    <img className="w-full h-48 object-cover" src={image} alt={name} />
    <div className="px-6 py-4">
      <div className="font-bold text-xl mb-2">{name}</div>
      <p className="text-gray-700 text-base">{description}</p>
      <p className="text-gray-700 text-base">{available}</p>
    </div>
    <div className="px-6 py-4">
      <p className="text-gray-700 text-base">Author: {author}</p>
      <p className="text-gray-700 text-base">Price: ${price}</p>
    </div>
    <div className='px-6 flex justify-between'>
        <Link to={`/allBooks/${_id}`}>
        <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">Update
        </button>
        </Link>
        <button onClick={handleDelete} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">Delete</button>
    </div>
  </div>
);
};

export default Book