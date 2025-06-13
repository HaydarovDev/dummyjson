import { createRoot } from "react-dom/client";
import "./index.css";
import { Suspense } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Login from "./components/Login/Login.jsx";
import Dashboard from "./components/Dashboard/Dashboard.jsx";
import Layout from "./components/HomeLayout/Layout.jsx";
import AuthProvider from "./components/AuthProvider/AuthProvider.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <AuthProvider>
      <Suspense>
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/" element={<Layout />}></Route>
        </Routes>
      </Suspense>
    </AuthProvider>
  </BrowserRouter>
);
