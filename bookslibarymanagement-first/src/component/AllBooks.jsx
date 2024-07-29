import React, { useState, useEffect } from 'react';
import NavbarC from './NavbarC';
import BookCard from './allbookcard/showbook';
import axios from 'axios';

const AllBooks = () => {
  const [books, setBooks] = useState([]);

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

  return (
    <div>
      <NavbarC />
      <div className="text-3xl font-bold mb-4 flex justify-center text-[#036CDB]">
        <p>All Books</p>
      </div>
      <div className="container mx-auto">
        <div className="flex justify-center flex-wrap">
          {books.map((book) => (
            <div key={book._id} className="p-2 inline-block">
              <BookCard book={book} />
            </div>
          ))}
        </div>
      </div>

      {/* <div className="container mx-auto p-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          
        </div>
      </div> */}
    </div>
  );
};

export default AllBooks;
