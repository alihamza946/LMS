import React, { useState } from "react";

const ManageBooks = () => {
  const [books, setBooks] = useState([
    { id: 1, title: "Book 1", author: "Author 1", downloads: 10 },
    { id: 2, title: "Book 2", author: "Author 2", downloads: 5 },
  ]);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-center">Manage Books</h1>

      {/* Books Table */}
      <table className="w-full table-auto bg-white shadow-md rounded-lg overflow-hidden">
        <thead>
          <tr className="bg-blue-600 text-white">
            <th className="p-4 text-left">Title</th>
            <th className="p-4 text-left">Author</th>
            <th className="p-4 text-left">Downloads</th>
            <th className="p-4 text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book) => (
            <tr key={book.id} className="border-b hover:bg-gray-50">
              <td className="p-4">{book.title}</td>
              <td className="p-4">{book.author}</td>
              <td className="p-4">{book.downloads}</td>
              <td className="p-4">
                <button className="text-blue-500 hover:underline mr-4">Edit</button>
                <button className="text-red-500 hover:underline">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageBooks;
