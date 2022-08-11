import React from "react";
import Login from "../pages/Login";
import { Route, Routes } from "react-router-dom";

const Rota: React.FC = () => (
  <Routes>
    <Route path="/Login" element={<Login />} />
    <Route path="*" element={<NotFound />} />
  </Routes>
);

function NotFound() {
  return <>You have landed on a page that doesn't exist</>;
}

export default Rota;
