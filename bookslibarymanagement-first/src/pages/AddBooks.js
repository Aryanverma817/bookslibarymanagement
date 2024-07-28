import React from 'react'
import NavbarC from '../component/NavbarC'
import FooterC from '../component/FooterC'

export default function AddBooks() {
  return (
    <div>
        <NavbarC></NavbarC>
  <div className='flex flex-row grid lg:grid-cols-2   justify-center  bg-slate-200'>
    <div className='flex flex-col items-center justify-center'>
        <h1 className='text-2xl font-mono font-bold mx-6 my-5'>Add your books details here.</h1>
    </div>
    {/* form */}
    <div className='flex flex-col p-5   '>
        
    <div className="bg-white w-auto p-8 w-80rounded-lg shadow-lg w-full max-w-md">
    <h1 className="text-2xl font-bold mb-6">Input Form</h1>
    <form action="#" method="POST">
      <div className="mb-4">
        <label for="title" className="block text-gray-700 font-semibold mb-2">Title</label>
        <input type="text" id="title" name="title" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Enter the title"/>
      </div>
      <div className="mb-4">
        <label for="title" className="block text-gray-700 font-semibold mb-2">Image url</label>
        <input type="text" id="title" name="title" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Enter the title"/>
      </div>
      <div className="mb-6">
        <label for="description" className="block text-gray-700 font-semibold mb-2">Description</label>
        <textarea id="description" name="description" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Enter the description"></textarea>
      </div>
      <button type="submit" className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">Submit</button>
    </form>
  </div>


    </div>
    
  </div>
  <FooterC></FooterC>
    </div>
  )
}
