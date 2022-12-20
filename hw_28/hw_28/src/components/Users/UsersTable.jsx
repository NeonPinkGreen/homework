import React, { Fragment } from "react";
import useUsers from "../../hooks/useUsers";
import UsersTableItem from "./UsersTableItem";

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
              <UsersTableItem key={user.id} user={user} deleteUser={deleteUser} />
          ))}
        </tbody>
      </table>
    </Fragment>
  );
}
