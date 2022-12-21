import React, { Fragment } from "react";
import useUsers from "../../hooks/useUsers";
import UsersTableItem from "./UsersTableItem";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

export default function UsersTable() {
  const { users, deleteUser } = useUsers();

  return (
    <Fragment>
      <TableContainer component={Paper} sx={{ mb: 5 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Address</TableCell>
              <TableCell>Phone</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((user) => (
              <UsersTableItem
                key={user.id}
                user={user}
                deleteUser={deleteUser}
              />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Fragment>
  );
}
