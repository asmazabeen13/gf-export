import React from "react";
import Row from "./Row";

const Table = ({
  users,
  currentPage,
  usersPerPage,
  selectedRows,
  setSelectedRows
}) => {
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);

  return (
    <table>
      <thead>
        <tr>
          <th>Select</th>
          <th>ID</th>
          <th>Name</th>
          <th>Email</th>
          <th>Role</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {currentUsers.map((user) => (
          <Row
            key={user.id}
            user={user}
            selectedRows={selectedRows}
            setSelectedRows={setSelectedRows}
          />
        ))}
      </tbody>
    </table>
  );
};

export default Table;
