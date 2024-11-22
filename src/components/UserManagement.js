import React, { useState } from 'react';
import { getUsers, createUser, updateUser, deleteUser } from '../api/mockApi';

const UserManagement = () => {
  const [users, setUsers] = useState(getUsers());
  const [form, setForm] = useState({ name: '', role: '', status: 'Active' });

  const handleAddUser = () => {
    const newUser = createUser(form);
    setUsers([...users, newUser]);
    setForm({ name: '', role: '', status: 'Active' });
  };

  const handleDeleteUser = (id) => {
    deleteUser(id);
    setUsers(users.filter(user => user.id !== id));
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <h2 className="text-xl font-semibold mb-4">User Management</h2>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Name"
          className="border p-2 rounded mr-2"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />
        <input
          type="text"
          placeholder="Role"
          className="border p-2 rounded mr-2"
          value={form.role}
          onChange={(e) => setForm({ ...form, role: e.target.value })}
        />
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded"
          onClick={handleAddUser}
        >
          Add User
        </button>
      </div>
      <table className="w-full border-collapse">
        <thead>
          <tr className="border-b">
            <th className="text-left p-2">Name</th>
            <th className="text-left p-2">Role</th>
            <th className="text-left p-2">Status</th>
            <th className="p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id} className="border-b">
              <td className="p-2">{user.name}</td>
              <td className="p-2">{user.role}</td>
              <td className="p-2">{user.status}</td>
              <td className="p-2">
                <button
                  className="bg-red-500 text-white px-2 py-1 rounded"
                  onClick={() => handleDeleteUser(user.id)}
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

export default UserManagement;
