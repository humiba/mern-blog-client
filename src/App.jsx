import React from "react";
import { Routes, Route } from "react-router-dom";

import "./App.css";
import {
  IndexPage,
  LoginPage,
  RegisterPage,
  CreatePost,
  PostPage,
  EditPost
} from "./pages";
import Layout from "./Layout";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<IndexPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/create" element={<CreatePost />} />
        <Route path="/post/:id" element={<PostPage />} />
        <Route path="/edit/:id" element={<EditPost />} />
      </Route>
    </Routes>
  );
};

export default App;
