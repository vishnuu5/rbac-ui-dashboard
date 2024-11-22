let users = [
    { id: 1, name: 'Alice', role: 'Admin', status: 'Active' },
    { id: 2, name: 'Bob', role: 'Viewer', status: 'Inactive' },
  ];
  
  let roles = [
    { id: 1, name: 'Admin', permissions: ['Read', 'Write', 'Delete'] },
    { id: 2, name: 'Viewer', permissions: ['Read'] },
  ];
  
  export const getUsers = () => users;
  
  export const createUser = (user) => {
    const newUser = { id: Date.now(), ...user };
    users.push(newUser);
    return newUser;
  };
  
  export const deleteUser = (id) => {
    users = users.filter(user => user.id !== id);
  };
  
  export const getRoles = () => roles;
  
  export const createRole = (role) => {
    const newRole = { id: Date.now(), ...role };
    roles.push(newRole);
    return newRole;
  };
  
  export const updateRolePermissions = (roleId, updatedPermissions) => {
    const roleIndex = roles.findIndex((role) => role.id === roleId);
    if (roleIndex !== -1) {
      roles[roleIndex].permissions = updatedPermissions;
    }
  };
  