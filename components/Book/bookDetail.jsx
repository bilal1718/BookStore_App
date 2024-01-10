import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios';

const BookDetail = () => {
    const [formData,setFormData]=useState({});
    const id=useParams().id;
    const history=useNavigate();
    console.log(id);
    useEffect(()=>{
        const fetchHandler=async()=>{
            await axios.get(`http://localhost:5000/books/${id}`)
            .then(res=>(res.data))
            .then((data)=>setFormData(data.book));
        };
        fetchHandler();
    },[id])
    const sendRequest=async()=>{
        await axios.put(`http://localhost:5000/books/${id}`,{
            name:String(formData.name),
      author:String(formData.author),
      description:String(formData.description),
      price:Number(formData.price),
      image:String(formData.image),
      available:Boolean(formData.available)
    }).then(res => res.data);
    }
    const handleSubmit=(e)=>{
       e.preventDefault();
       sendRequest().then(()=>history('/books'));
    }
    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
          ...formData,
          [name]: type === 'checkbox' ? checked : value,
        });
      };
  return (
    <div className="max-w-lg mx-auto mt-8 p-6 bg-white rounded-md shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Add a New Book</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border rounded-md py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter book name"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="author" className="block text-gray-700 text-sm font-bold mb-2">
            Author
          </label>
          <input
            type="text"
            id="author"
            name="author"
            value={formData.author}
            onChange={handleChange}
            className="w-full border rounded-md py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter author name"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="description" className="block text-gray-700 text-sm font-bold mb-2">
            Description
          </label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="w-full border rounded-md py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter book description"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="price" className="block text-gray-700 text-sm font-bold mb-2">
            Price
          </label>
          <input
            type="text"
            id="price"
            name="price"
            value={formData.price}
            onChange={handleChange}
            className="w-full border rounded-md py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter book price"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="image" className="block text-gray-700 text-sm font-bold mb-2">
            Image URL
          </label>
          <input
            type="text"
            id="image"
            name="image"
            value={formData.image}
            onChange={handleChange}
            className="w-full border rounded-md py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter image URL"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Availability
          </label>
          <input
            type="checkbox"
            id="available"
            name="available"
            checked={formData.available}
            onChange={handleChange}
            className="mr-2 leading-tight"
          />
          <label htmlFor="available" className="text-gray-700 text-sm">
            Available
          </label>
        </div>

        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Update Book
        </button>
      </form>
    </div>
  )
}

export default BookDetail