import React, { useState } from 'react';
import { getRoles, createRole } from '../api/mockApi';

const RoleManagement = () => {
  const [roles, setRoles] = useState(getRoles());
  const [roleName, setRoleName] = useState('');

  const handleAddRole = () => {
    const newRole = createRole({ name: roleName, permissions: [] });
    setRoles([...roles, newRole]);
    setRoleName('');
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <h2 className="text-xl font-semibold mb-4">Role Management</h2>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Role Name"
          className="border p-2 rounded mr-2"
          value={roleName}
          onChange={(e) => setRoleName(e.target.value)}
        />
        <button
          className="bg-green-500 text-white px-4 py-2 rounded"
          onClick={handleAddRole}
        >
          Add Role
        </button>
      </div>
      <ul>
        {roles.map((role) => (
          <li key={role.id} className="border-b p-2">{role.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default RoleManagement;
