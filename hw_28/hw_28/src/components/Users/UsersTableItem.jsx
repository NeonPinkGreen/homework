import React from "react";
import {Link} from "react-router-dom";

export default function UsersTableItem({user, deleteUser}) {
    return(
        <tr>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.address}</td>
            <td>{user.phone}</td>
            <td>
                <Link to={"/" + user.id}>Edit</Link>
                <button onClick={() => deleteUser(user.id)}>Delete</button>
            </td>
        </tr>
    )
}