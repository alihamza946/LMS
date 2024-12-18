import React, { useState } from "react";

const ManageAuthors = () => {
  const [authors, setAuthors] = useState([
    { id: 1, name: "Author 1" },
    { id: 2, name: "Author 2" },
  ]);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-center">Manage Authors</h1>

      {/* Authors Table */}
      <table className="w-full table-auto bg-white shadow-md rounded-lg overflow-hidden">
        <thead>
          <tr className="bg-red-600 text-white">
            <th className="p-4 text-left">Name</th>
            <th className="p-4 text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {authors.map((author) => (
            <tr key={author.id} className="border-b hover:bg-gray-50">
              <td className="p-4">{author.name}</td>
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

export default ManageAuthors;
