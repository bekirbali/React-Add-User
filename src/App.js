import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import "./App.scss";
import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";

function App() {
  const [users, setUsers] = useState([]);
  return (
    <div className="App">
      <h1 className="text-center text-warning pt-2">Adding User</h1>
      <AddUser users={users} setUsers={setUsers} />
      {users.length && <UsersList users={users} />}
    </div>
  );
}

export default App;
