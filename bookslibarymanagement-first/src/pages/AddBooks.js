import React, { useState } from 'react';
import NavbarC from '../component/NavbarC';
import FooterC from '../component/FooterC';

export default function AddBooks() {
  const [title, setTitle] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [description, setDescription] = useState('');

  const clickHandler = (event) => {
    event.preventDefault();
    console.log('Title:', title);
    console.log('Image URL:', imageUrl);
    console.log('Description:', description);
  };

  const handleDrop = (event) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    handleFileSelect({ target: { files: [file] } });
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleFileSelect = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setImageUrl(reader.result);
    };
    reader.readAsDataURL(file);
  };

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
            <form action="#" method="POST">
              <div className="mb-4">
                <label htmlFor="title" className="block text-gray-700 font-semibold mb-2">Title</label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter the title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>
             
              <div className="mb-6">
                <label htmlFor="description" className="block text-gray-700 font-semibold mb-2">Description</label>
                <textarea
                  id="description"
                  name="description"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter the description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                ></textarea>
              </div>
              <div className="mb-4">
                <label htmlFor="image" className="block text-gray-700 font-semibold mb-2">Image</label>
                <div
                  id="drop-area"
                  className="border-dashed border-2 border-gray-300 rounded-md p-4 text-center cursor-pointer"
                  onDrop={handleDrop}
                  onDragOver={handleDragOver}
                >
                  {imageUrl ? (
                    <img src={imageUrl} alt="Book" className="mx-auto max-h-40 object-contain" />
                  ) : (
                    <p>Drag & Drop an image here or click to select one</p>
                  )}
                  <input
                    type="file"
                    id="fileElem"
                    accept="image/*"
                    className="hidden"
                    onChange={handleFileSelect}
                  />
                  <label htmlFor="fileElem" className="mt-2 inline-block bg-blue-500 text-white py-2 px-4 rounded-md cursor-pointer hover:bg-blue-600">
                    Choose Image
                  </label>
                </div>
              </div>
              <button
                type="submit"
                onClick={clickHandler}
                className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
      <FooterC />
    </div>
  );
}
