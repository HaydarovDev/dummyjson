import React, { useEffect, useState } from "react";
import { api } from "../../api";

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      try {
        const usersData = await api.get("/users");
        setUsers(usersData.data.users);
      } catch (error) {
        console.log(error.message);
      }
    };
    getUsers();
  }, []);

  return (
    <div className="mt-2">
      <div>
        {users.map((user, i) => {
          return <h1 key={i}>{user.firstName}</h1>;
        })}
      </div>
    </div>
  );
};

export default Users;
