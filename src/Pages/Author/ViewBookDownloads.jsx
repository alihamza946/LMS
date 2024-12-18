import React, { useState } from "react";

const BookDownloads = () => {
  const [books] = useState([
    { id: 1, title: "Book One", downloads: 10 },
    { id: 2, title: "Book Two", downloads: 5 },
  ]);

  return (
    <div className="p-6 min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-6 text-center">Book Downloads</h1>
      <table className="w-full bg-white shadow-md rounded-lg">
        <thead>
          <tr className="bg-blue-600 text-white">
            <th className="p-4">Title</th>
            <th className="p-4">Downloads</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book) => (
            <tr key={book.id} className="border-b hover:bg-gray-50">
              <td className="p-4">{book.title}</td>
              <td className="p-4">{book.downloads}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BookDownloads;
