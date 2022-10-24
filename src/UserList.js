import React, {useState, useEffect} from "react";
import UserItem from "./UserItem";

function Userlist() {
    const [users, setUsers] = useState([]);
  
    useEffect(() => {
      fetch("http://localhost:9292/users")
        .then((r) => r.json())
        .then((users) => setUsers(users));
    }, []);
  
    return (
      <section>
        {users.map((user) => (
          <UserItem key={user.id} user={user} />
        ))}
      </section>
    );
  }

  export default Userlist;