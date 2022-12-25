import React, { useEffect, useState } from "react";
import { getUser, updateUser, addUser } from "../Services/userService";

export default function useUser(userId) {
  const EMPTY_USER = {
    name: "",
    username: "",
    email: "",
    city: "",
    street: "",
  };
  const [user, setUser] = useState(EMPTY_USER);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    (async () => {
      if (userId) {
        setLoading(true);
        setUser(await getUser(userId));
        setLoading(false);
      }
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

  return { user, changeInput, createUser, changeUser, isLoading };
}
