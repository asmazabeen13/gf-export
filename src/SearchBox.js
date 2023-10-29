import React, { useState } from "react";
import styles from "./styles.css";

function SearchBox({ users, setUsers }) {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (query) => {
    const filteredUsers = users.filter((user) =>
      Object.values(user).some((value) =>
        value.toString().toLowerCase().includes(query.toLowerCase())
      )
    );
    setUsers(filteredUsers);
  };

  return (
    <div className="search-box">
      <input
        type="text"
        placeholder="Search by name,email or role...."
        value={searchQuery}
        onChange={(e) => {
          setSearchQuery(e.target.value);
          handleSearch(e.target.value);
        }}
        style={{ width: "70%" }}
      />
    </div>
  );
}

export default SearchBox;
