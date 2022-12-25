import React, {useEffect, useState} from 'react'
import { getUsers, deleteUser as deleteItem } from "../Services/userService";

export default function useUsers () {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        (async () => {
            setUsers(await getUsers());
        })();
    }, []);

    const deleteUser = async id => {
        await deleteItem(id);
        setUsers(prevState => prevState.filter(user => user.id !== id))
    }

    return {users, deleteUser};
}