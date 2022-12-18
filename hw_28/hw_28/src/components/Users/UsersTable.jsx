import React, { Fragment } from "react";
import useUsers from "../../hooks/useUsers";

export default function UsersTable() {
  const { users, deleteUser } = useUsers();

  return (
    <Fragment>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Address</th>
            <th>Phone</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.address.street}</td>
              <td>{user.phone}</td>
              <td>
                <button>Edit</button>
                <button onClick={() => deleteUser(user.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Fragment>
  );
}
