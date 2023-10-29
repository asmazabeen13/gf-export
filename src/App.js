import React, { useState, useEffect } from "react";
import Table from "./Table";
import SearchBox from "./SearchBox";
import Pagination from "./Pagination";
import Delete from "./Delete";

function App() {
  const [users, setUsers] = useState([]); // User data fetched from API
  const [selectedRows, setSelectedRows] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 10;

  useEffect(() => {
    // Fetch user data from the API
    fetch(
      "https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json"
    )
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  // Pagination function
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Handle "First Page" button click
  const handleFirstPage = () => {
    setCurrentPage(1); // Set the current page to the first page
  };

  // Handle "Last Page" button click
  const handleLastPage = () => {
    const lastPage = Math.ceil(users.length / usersPerPage);
    setCurrentPage(lastPage); // Set the current page to the last page
  };

  return (
    <div>
      <SearchBox users={users} setUsers={setUsers} />
      <Table
        users={users}
        currentPage={currentPage}
        usersPerPage={usersPerPage}
        selectedRows={selectedRows}
        setSelectedRows={setSelectedRows}
      />
      <Pagination
        usersPerPage={usersPerPage}
        totalUsers={users.length}
        currentPage={currentPage}
        paginate={paginate}
        onFirstPage={handleFirstPage}
        onLastPage={handleLastPage}
      />
      <Delete
        selectedRows={selectedRows}
        setUsers={setUsers}
        users={users}
        setSelectedRows={setSelectedRows}
        currentPage={currentPage}
        usersPerPage={usersPerPage}
      />
    </div>
  );
}

export default App;
