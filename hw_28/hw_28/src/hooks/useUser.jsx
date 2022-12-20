import React, { useEffect, useState } from "react";
import { getUser, updateUser } from "../Services/userService";

export default function useUser(userId) {
  const [user, setUser] = useState({});

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
  }

  return { user, changeInput, changeUser };
}
