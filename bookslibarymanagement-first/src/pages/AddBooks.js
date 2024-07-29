import React, { useState, useEffect } from 'react';
import NavbarC from '../component/NavbarC';
import FooterC from '../component/FooterC';
import axios from 'axios';
import { useDropzone } from 'react-dropzone';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function AddBooks() {
  const [book, setBook] = useState({ name: '', description: '' });
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState('');
  const [books, setBooks] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [currentBookId, setCurrentBookId] = useState(null);

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/books');
      setBooks(response.data);
    } catch (error) {
      console.error('Error fetching books:', error);
    }
  };

  const handleChange = (e) => {
    setBook({ ...book, [e.target.name]: e.target.value });
  };

  const handleDrop = (acceptedFiles) => {
    const file = acceptedFiles[0];
    setImage(file);
    setImagePreview(URL.createObjectURL(file));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('name', book.name);
    formData.append('description', book.description);
    if (image) {
      formData.append('image', image);
    }

    try {
      if (isEditing) {
        await axios.put(`http://localhost:5000/api/books/${currentBookId}`, formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });
        toast.success('Book updated successfully!');
      } else {
        const response = await axios.post('http://localhost:5000/api/books', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });
        setBooks([...books, response.data]);
        toast.success('Book added successfully!');
      }
      fetchBooks();
      resetForm();
    } catch (error) {
      console.error('There was an error submitting the form!', error);
      toast.error('Error adding book. Please try again.');
    }
  };

  const resetForm = () => {
    setBook({ name: '', description: '' });
    setImage(null);
    setImagePreview('');
    setIsEditing(false);
    setCurrentBookId(null);
  };

  const handleEdit = (book) => {
    setBook({ name: book.name, description: book.description });
    setImagePreview(book.image);
    setIsEditing(true);
    setCurrentBookId(book._id);
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/books/${id}`);
      toast.success('Book deleted successfully!');
      fetchBooks();
    } catch (error) {
      console.error('Error deleting book:', error);
      toast.error('Error deleting book. Please try again.');
    }
  };

  const { getRootProps, getInputProps } = useDropzone({ onDrop: handleDrop });

  return (
    <div>
      <NavbarC />
      <div className='flex flex-row grid lg:grid-cols-2 justify-center bg-slate-200'>
        <div className='flex flex-col items-center justify-center'>
          <h1 className='text-2xl font-mono font-bold mx-6 my-5'>Add your books details here.</h1>
        </div>
        <div className='flex flex-col p-5'>
          <div className="bg-white w-auto p-8 rounded-lg shadow-lg w-full max-w-md">
            <h1 className="text-2xl font-bold mb-6">Input Form</h1>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">Name</label>
                <input type="text" id="name" name="name" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Enter the name" value={book.name} onChange={handleChange} />
              </div>
              <div className="mb-4">
                <label htmlFor="image" className="block text-gray-700 font-semibold mb-2">Image</label>
                <div {...getRootProps({ className: 'border-dashed border-2 border-gray-300 p-4 rounded-md cursor-pointer' })}>
                  <input {...getInputProps()} />
                  {imagePreview ? (
                    <img src={imagePreview} alt="Preview" className="w-full h-32 object-cover" />
                  ) : (
                    <p className="text-gray-500">Drag & drop and click image uploader</p>
                  )}
                </div>
              </div>
              <div className="mb-6">
                <label htmlFor="description" className="block text-gray-700 font-semibold mb-2">Description</label>
                <textarea id="description" name="description" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Enter the description" value={book.description} onChange={handleChange}></textarea>
              </div>
              <button type="submit" className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">Submit</button>
            </form>
          </div>
        </div>
      </div>

      <div className='flex flex-col items-center justify-center mt-10'>
        <h2 className='text-2xl font-mono font-bold mx-6 my-5'>Book List</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white">
            <thead>
              <tr>
                <th className="py-2">Name</th>
                <th className="py-2">Image</th>
                <th className="py-2">Description</th>
                <th className="py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {books.map((book, index) => (
                <tr key={index}>
                  <td className="border px-4 py-2">{book.name}</td>
                  <td className="border px-4 py-2"><img src={book.image} alt={book.name} className="w-16 h-16 object-cover" /></td>
                  <td className="border px-4 py-2">{book.description}</td>
                  <td className="border px-4 py-2">
                    <button onClick={() => handleEdit(book)} className="bg-yellow-500 text-white px-2 py-1 rounded mr-2">Edit</button>
                    <button onClick={() => handleDelete(book._id)} className="bg-red-500 text-white px-2 py-1 rounded">Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <FooterC />
      <ToastContainer />
    </div>
  );
}
