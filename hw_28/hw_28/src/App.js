import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import EditUser from "./pages/EditUser";
import CreateUser from "./pages/CreateUser";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<Dashboard />} />
        <Route path={"/:userId"} element={<EditUser />} />
        <Route path={"/create"} element={<CreateUser />} />
      </Routes>
    </BrowserRouter>
  );
}
