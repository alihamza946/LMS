import React, { useState } from "react";

const TrackDownloads = () => {
  const [downloads, setDownloads] = useState([
    { id: 1, user: "John Doe", book: "Book 1", count: 5 },
    { id: 2, user: "Jane Doe", book: "Book 2", count: 3 },
  ]);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-center">Track Downloads</h1>

      {/* Downloads Table */}
      <table className="w-full table-auto bg-white shadow-md rounded-lg overflow-hidden">
        <thead>
          <tr className="bg-purple-600 text-white">
            <th className="p-4 text-left">User</th>
            <th className="p-4 text-left">Book</th>
            <th className="p-4 text-left">Download Count</th>
          </tr>
        </thead>
        <tbody>
          {downloads.map((item) => (
            <tr key={item.id} className="border-b hover:bg-gray-50">
              <td className="p-4">{item.user}</td>
              <td className="p-4">{item.book}</td>
              <td className="p-4">{item.count}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TrackDownloads;
