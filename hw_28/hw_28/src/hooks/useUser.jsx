import React, { useEffect, useState } from "react";
import { getUser } from "../Services/userService";

export default function useUser(userId) {
  const [user, setUser] = useState({});

  useEffect(() => {
    (async () => {
      userId && setUser(await getUser(userId));
    })();
  }, []);

  const changeName = (e) => {
    setUser((prevState) => ({ ...prevState, [e.target.name]: e.target.value }));
  };

  return { user, changeName };
}
