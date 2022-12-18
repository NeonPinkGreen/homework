import React, {Fragment} from 'react'
import UsersTable from "../components/Users/UsersTable";

export default function Dashboard () {
    return (
        <Fragment>
            <h1>Users</h1>
            <UsersTable />
        </Fragment>
    )
}