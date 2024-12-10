import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AdminDashboard from './Pages/Admin/Dashboard';
import ManageBooks from './Pages/Admin/ManageBooks';
import ManageUsers from './Pages/Admin/ManageUser';

const App = () => {
  // Authentication States
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);

  // Books States
  const [books, setBooks] = useState([]);
  const [categories, setCategories] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  // Admin States
  const [users, setUsers] = useState([]);
  const [selectedBook, setSelectedBook] = useState(null);
  const [selectedUser, setSelectedUser] = useState(null);

  return (
    <Router>
    <Routes>
      {/* Admin Routes */}
      <Route path="/admin" element={<AdminDashboard />} />
      <Route path="/admin/manage-books" element={<ManageBooks />} />
      <Route path="/admin/manage-users" element={<ManageUsers />} />
      <Route path="/admin/book/:id" element={<BookDetails />} />
    </Routes>
  </Router>
  );
};

export default App
