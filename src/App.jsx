import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AdminDashboard from './Pages/Admin/Dashboard';
import ManageBooks from './Pages/Admin/ManageBooks';
import ManageUsers from './Pages/Admin/ManageUser';
import ManageAuthors from './Pages/Admin/ManageAuthor';
import TrackDownloads from './Pages/Admin/TrackDownload';
import AddBook from './Pages/Author/AddBook';
import ManageUploadedBooks from './Pages/Author/ManageUploadedbooks';
import BookDownloads from './Pages/Author/ViewBookDownloads';


const App = () => {

  return (
    <Router>
    <Routes>
      {/* Admin Routes */}
      <Route path="/Admin/Dashboard" element={<AdminDashboard />} />
      <Route path="/Admin/ManageBooks" element={<ManageBooks />} />
      <Route path="/Admin/ManageUser" element={<ManageUsers />} />
      <Route path="/Admin/ManageAuthor" element={<ManageAuthors />} />
    
      {/* Author Routes */}
      <Route path="/Author/AddBook" element={<AddBook />} />
        <Route path="/Author/ManageUploadedbooks" element={<ManageUploadedBooks />} />
        <Route path="/Author/ViewBookDownloads" element={<BookDownloads />} />
        
    </Routes>
  </Router>
  );
};

export default App
