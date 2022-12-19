import React from "react";
import useUser from "../../hooks/useUser";
import { useParams } from "react-router-dom";

export default function UserForm({ createUser }) {
  const { userId } = useParams();
  const { user, changeName: changeInput } = useUser(userId);

  return (
    <form>
      <label>
        Name{" "}
        <input type="text" name="name" defaultValue={user.name} onBlur={changeInput} />
      </label>
      <label>
        Email <input type="email" name="email" defaultValue={user.email} onBlur={changeInput} />
      </label>
      <label>
        Address <input type="text" name="address" defaultValue={user.address} onBlur={changeInput} />
      </label>
      <label>
        Phone <input type="phone" name="phone" defaultValue={user.phone} onBlur={changeInput} />
      </label>
      <div>
        <button>{createUser ? "Create user" : "Save changes"}</button>
        <button>Back to dashboard </button>
      </div>
    </form>
  );
}
