import React from "react";

const Row = ({ user, selectedRows, setSelectedRows }) => {
  const handleSelectRow = (userId) => {
    if (selectedRows.includes(userId)) {
      setSelectedRows(selectedRows.filter((id) => id !== userId));
    } else {
      setSelectedRows([...selectedRows, userId]);
    }
  };

  return (
    <tr>
      <td>
        <input
          type="checkbox"
          checked={selectedRows.includes(user.id)}
          onChange={() => handleSelectRow(user.id)}
        />
      </td>
      <td>{user.id}</td>
      <td>{user.name}</td>
      <td>{user.email}</td>
      <td>{user.role}</td>
      <td>
        <button className="edit-button" onClick={() => handleEdit(user.id)}>
          Edit
        </button>
        <button className="delete-button" onClick={() => handleDelete(user.id)}>
          Delete
        </button>
      </td>
    </tr>
  );
};

export default Row;
