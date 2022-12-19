import React, { Fragment } from "react";
import UserForm from "../components/Users/UserForm";

export default function CreateUser() {
  return (
    <Fragment>
      <h1>Create User</h1>
      <UserForm createUser/>
    </Fragment>
  );
}
