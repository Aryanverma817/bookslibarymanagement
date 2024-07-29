import React from 'react';

const BookCard = ({ book }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md flex flex-col justify-between overflow-hidden">
      <div className="h-48 w-full mb-4">
        <img src={book.image} alt={book.name} className="w-full h-full object-cover rounded-t-lg" />
      </div>
      <div className="p-4 flex flex-col justify-between flex-grow">
        <h2 className="text-xl font-bold mb-2">{book.name}</h2>
        <p className="text-gray-700">{book.description}</p>
      </div>
    </div>
  );
};

export default BookCard;
