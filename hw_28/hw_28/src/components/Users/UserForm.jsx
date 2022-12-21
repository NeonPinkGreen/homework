import React from "react";
import useUser from "../../hooks/useUser";
import { useParams, useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import Stack from "@mui/material/Stack";

import Box from "@mui/material/Box";

export default function UserForm({ createUser }) {
  const { userId } = useParams();
  const {
    user,
    changeInput,
    createUser: create,
    changeUser: change,
  } = useUser(userId);

  const navigation = useNavigate();

  const changeFormInput = (e) => changeInput(e.target.name, e.target.value);

  const submitForm = async (e) => {
    e.preventDefault();
    createUser ? await create() : await change();
    navigation("/");
  };

  const cancelBtn = () => navigation("/");

  return (
    <Box
      component="form"
      autoComplete="off"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "inherit" },
        my: "auto",
        width: "30ch",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
      onSubmit={submitForm}
    >
      <TextField
        required
        name="name"
        label="Name"
        defaultValue={user.name}
        onBlur={changeFormInput}
      />
      <TextField
        required
        type="email"
        name="email"
        label="Email"
        defaultValue={user.email}
        onBlur={changeFormInput}
      />
      <TextField
        required
        type="phone"
        name="address"
        label="Address"
        defaultValue={user.address}
        onBlur={changeFormInput}
      />
      <TextField
        required
        name="phone"
        label="Phone"
        defaultValue={user.phone}
        onBlur={changeFormInput}
      />
      <div>
        <Stack direction="row" spacing={2}>
          <Button type="submit" variant="contained" endIcon={<SendIcon />}>
            {createUser ? "Create user" : "Save changes"}
          </Button>
          <Button variant="outlined" onClick={cancelBtn}>
            Cancel
          </Button>
        </Stack>
      </div>
    </Box>
  );
}
