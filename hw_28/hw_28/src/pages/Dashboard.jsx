import React, { Fragment } from "react";
import UsersTable from "../components/Users/UsersTable";
import {Link} from "react-router-dom";

export default function Dashboard() {
  return (
    <Fragment>
      <h1>Users</h1>
        <Link to="/create">Create user</Link>
      <UsersTable />
    </Fragment>
  );
}
