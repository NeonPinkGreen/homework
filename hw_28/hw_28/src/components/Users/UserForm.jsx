import React from "react";
import useUser from "../../hooks/useUser";
import { useParams, Link } from "react-router-dom";

export default function UserForm({ createUser }) {
  const { userId } = useParams();
  const {
    user,
    changeInput,
    createUser: create,
    changeUser: change,
  } = useUser(userId);

  const changeFormInput = (e) => changeInput(e.target.name, e.target.value);

  const submitForm = (e) => {
    e.preventDefault();
    createUser ? create() : change();
  };

  return (
    <form onSubmit={submitForm}>
      <label>
        Name{" "}
        <input
          type="text"
          name="name"
          defaultValue={user.name}
          onBlur={changeFormInput}
        />
      </label>
      <label>
        Email{" "}
        <input
          type="email"
          name="email"
          defaultValue={user.email}
          onBlur={changeFormInput}
        />
      </label>
      <label>
        Address{" "}
        <input
          type="text"
          name="address"
          defaultValue={user.address}
          onBlur={changeFormInput}
        />
      </label>
      <label>
        Phone{" "}
        <input
          type="phone"
          name="phone"
          defaultValue={user.phone}
          onBlur={changeFormInput}
        />
      </label>
      <div>
        <button>{createUser ? "Create user" : "Save changes"}</button>
        <Link to="/">Back to dashboard </Link>
      </div>
    </form>
  );
}
