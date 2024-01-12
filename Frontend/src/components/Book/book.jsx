import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Book = ({ book }) => {
  const { _id, name, author, description, price, image } = book;
  const history = useNavigate();

  const handleDelete = async () => {
    await axios
      .delete(`http://localhost:5000/books/${_id}`)
      .then((res) => res.data)
      .then(() => history('/'))
      .then(() => history('/books'));
  };

  return (
    <div key={_id} className="rounded-lg bg-white shadow-md flex flex-col h-full">
              <div className="relative overflow-hidden bg-cover bg-no-repeat flex-grow">
                <img className="rounded-t-lg" src={image} alt="" />
              </div>
              <div className="p-4 flex flex-col justify-between">
                <div>
                  <div className="flex justify-between mb-2">
                    <h1 className="text-2xl uppercase font-semibold ml-0">{name}</h1>
                  </div>
                  <p className="text-xl capitalize text-neutral-600 mb-2">Author: {author}</p>
                  <p className="text-xl capitalize text-neutral-600 mb-4">Description: {description}</p>
                  <p className="text-xl capitalize text-neutral-600 mb-4">Price: {price}$</p>
                </div>
                <div className="flex justify-between mt-4">
                <Link to={`/books/${_id}`}>
                  <button
                    className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
                  >
                    Update
                  </button>
                  </Link>
                  <button
                    onClick={() => handleDelete(_id)}
                    className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
  );
};

export default Book;
