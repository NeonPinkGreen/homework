import React, { Fragment } from "react";
import UsersTable from "../components/Users/UsersTable";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";

export default function Users() {
  return (
    <Fragment>
      <h1>Users</h1>
      <Button component={Link} sx={{ mb: 2 }} to="/createuser" variant="contained">
        Create user
      </Button>
      <UsersTable />
    </Fragment>
  );
}
