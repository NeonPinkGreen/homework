import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Users from "./pages/Users";
import User from "./pages/User";
import CreateUser from "./pages/CreateUser";
import Container from "@mui/material/Container";

export default function App() {
  return (
    <Container maxWidth="sm">
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<Users />} />
          <Route path={"/:userId"} element={<User />} />
          <Route path={"/createuser"} element={<CreateUser />} />
        </Routes>
      </BrowserRouter>
    </Container>
  );
}
