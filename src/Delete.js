import React from "react";

function Delete({
  selectedRows,
  setUsers,
  users,
  currentPage,
  usersPerPage,
  setSelectedRows
}) {
  const handleDeleteSelected = () => {
    const remainingUsers = users.filter(
      (user) => !selectedRows.includes(user.id)
    );
    setUsers(remainingUsers);
    setSelectedRows([]);
  };

  return (
    <div>
      <button onClick={handleDeleteSelected}>Delete Selected</button>
    </div>
  );
}

export default Delete;
