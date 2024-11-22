import React from 'react';
import UserManagement from './components/UserManagement';
import RoleManagement from './components/RoleManagement';
import PermissionEditor from './components/PermissionEditor';
function App() {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-4">RBAC Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <UserManagement />
        <RoleManagement />
        <PermissionEditor />
      </div>
    </div>
  );
}

export default App;
