import React from "react";
import { Route, Routes } from "react-router-dom";

import { Layout } from "./components";
import { AuthProvider, RequireAuth } from "./hoc";
import {
  AboutPage,
  HomePage,
  PostsPage,
  PostPage,
  LoginPage,
  NotFoundPage,
} from "./pages";

const App = () => {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route
            path="posts"
            element={
              <RequireAuth>
                <PostsPage />
              </RequireAuth>
            }
          />
          <Route
            path="posts/:postId"
            element={
              <RequireAuth>
                <PostPage />
              </RequireAuth>
            }
          />
          <Route path="about" element={<AboutPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </AuthProvider>
  );
};

export default App;
