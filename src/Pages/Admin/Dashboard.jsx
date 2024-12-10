import React from 'react';
import { Link } from 'react-router-dom';

const AdminDashboard = () => {
  return (
    <div>
      <h1>Admin Dashboard</h1>
      <nav>
        <ul>
          <li>
            <Link to="/admin/manage-books">Manage Books</Link>
          </li>
          <li>
            <Link to="/admin/manage-users">Manage Users</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default AdminDashboard;