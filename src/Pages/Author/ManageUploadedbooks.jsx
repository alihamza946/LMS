import React, { useState } from "react";

const ManageUploadedBooks = () => {
  const [books, setBooks] = useState([
    { id: 1, title: "Book One", description: "First book description" },
    { id: 2, title: "Book Two", description: "Second book description" },
  ]);

  const handleDelete = (id) => {
    setBooks(books.filter((book) => book.id !== id));
  };

  return (
    <div className="p-6 min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-6 text-center">
        Manage Uploaded Books
      </h1>
      <table className="w-full bg-white shadow-md rounded-lg">
        <thead>
          <tr className="bg-blue-600 text-white">
            <th className="p-4">Title</th>
            <th className="p-4">Description</th>
            <th className="p-4">Actions</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book) => (
            <tr key={book.id} className="border-b hover:bg-gray-50">
              <td className="p-4">{book.title}</td>
              <td className="p-4">{book.description}</td>
              <td className="p-4">
                <button className="text-blue-600 hover:underline mr-4">
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(book.id)}
                  className="text-red-500 hover:underline"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageUploadedBooks;
