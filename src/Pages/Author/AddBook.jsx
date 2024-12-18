import React, { useState } from "react";

const AddBook = () => {
  const [book, setBook] = useState({
    title: "",
    description: "",
    file: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBook({ ...book, [name]: value });
  };

  const handleFileChange = (e) => {
    setBook({ ...book, file: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Book Data:", book);
    // Here we will use Axios to send data to backend later
  };

  return (
    <div className="p-6 min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-6 text-center">Add New Book</h1>
      <form
        onSubmit={handleSubmit}
        className="max-w-lg mx-auto bg-white p-6 shadow-lg rounded-lg"
      >
        <label className="block mb-4">
          <span className="text-gray-700">Title</span>
          <input
            type="text"
            name="title"
            value={book.title}
            onChange={handleChange}
            placeholder="Enter book title"
            className="mt-1 block w-full p-2 border rounded"
          />
        </label>

        <label className="block mb-4">
          <span className="text-gray-700">Description</span>
          <textarea
            name="description"
            value={book.description}
            onChange={handleChange}
            placeholder="Enter book description"
            rows="4"
            className="mt-1 block w-full p-2 border rounded"
          ></textarea>
        </label>

        <label className="block mb-4">
          <span className="text-gray-700">Upload Book File</span>
          <input
            type="file"
            onChange={handleFileChange}
            className="mt-1 block w-full p-2 border rounded"
          />
        </label>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
        >
          Add Book
        </button>
      </form>
    </div>
  );
};

export default AddBook;
