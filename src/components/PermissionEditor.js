import React, { useState } from "react";
import { getRoles, updateRolePermissions } from "../api/mockApi";

const PermissionEditor = () => {
  const [roles, setRoles] = useState(getRoles());
  const [selectedRole, setSelectedRole] = useState(null);
  const [permissions, setPermissions] = useState([]);

  const handleRoleSelect = (roleId) => {
    const role = roles.find((r) => r.id === roleId);
    setSelectedRole(role);
    setPermissions(role.permissions);
  };

  const togglePermission = (permission) => {
    const updatedPermissions = permissions.includes(permission)
      ? permissions.filter((p) => p !== permission)
      : [...permissions, permission];
    setPermissions(updatedPermissions);
  };

  const handleSavePermissions = () => {
    if (selectedRole) {
      updateRolePermissions(selectedRole.id, permissions);
      setRoles((prev) =>
        prev.map((role) =>
          role.id === selectedRole.id ? { ...role, permissions } : role
        )
      );
      alert("Permissions updated successfully!");
    }
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-4">
      <h2 className="text-xl font-semibold mb-4 text-gray-800">
        Permission Editor
      </h2>
      <div className="mb-4">
        <select
          className="border border-gray-300 p-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
          onChange={(e) => handleRoleSelect(Number(e.target.value))}
        >
          <option value="">Select Role</option>
          {roles.map((role) => (
            <option key={role.id} value={role.id}>
              {role.name}
            </option>
          ))}
        </select>
      </div>
      {selectedRole && (
        <div>
          <h3 className="text-lg font-semibold mb-2 text-gray-700">
            Permissions for {selectedRole.name}
          </h3>
          <div className="space-y-2">
            {["Read", "Write", "Delete"].map((permission) => (
              <div key={permission} className="flex items-center">
                <input
                  type="checkbox"
                  id={permission}
                  checked={permissions.includes(permission)}
                  onChange={() => togglePermission(permission)}
                  className="mr-2"
                />
                <label htmlFor={permission} className="text-gray-600">
                  {permission}
                </label>
              </div>
            ))}
          </div>
          <button
            className="mt-4 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded transition"
            onClick={handleSavePermissions}
          >
            Save Permissions
          </button>
        </div>
      )}
    </div>
  );
};

export default PermissionEditor;
