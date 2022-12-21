import React, { useEffect, useState } from "react";
import { getUser, updateUser, addUser } from "../Services/userService";

export default function useUser(userId) {
  const EMPTY_USER = {
    name: "",
    email: "",
    address: "",
    phone: "",
  };
  const [user, setUser] = useState( EMPTY_USER );

  useEffect(() => {
    (async () => {
      userId && setUser(await getUser(userId));
    })();
  }, []);

  const changeInput = (option, value) => {
    setUser((prevState) => ({ ...prevState, [option]: value }));
  };

  const changeUser = async () => {
    await updateUser(user.id, user);
  };

  const createUser = async () => {
    await addUser(user);
  };

  return { user, changeInput, createUser, changeUser };
}
