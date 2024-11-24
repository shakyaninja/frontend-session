import React, { useState } from "react";
import UserList from "./components/UserList";
import  {fetchUsers} from "./Api.js";
import "./App.css";

const App = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleFetchUsers = async () => {
    setLoading(true);
    const fetchedUsers = await fetchUsers();
    setUsers(fetchedUsers);
    setLoading(false);
  };

  return (
    <div className="container">
      <h1>Random Users</h1>
      <button onClick={handleFetchUsers} disabled={loading}>
        {loading ? "Loading..." : "Fetch Users"}
      </button>
      <UserList users={users} />
    </div>
  );
};

export default App;
