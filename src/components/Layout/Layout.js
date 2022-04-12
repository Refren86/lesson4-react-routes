import React from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";

import { useAuth } from "../../hooks/useAuth";
import { MyButton } from "../UI/MyButton";
import styles from "./Layout.module.css";

export const Layout = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate;

  const signOut = () => {
    logout(() => navigate("/", { replace: true }));
  };

  return (
    <>
      <header className={styles.navbar}>
        <NavLink to={"/"}>HOME</NavLink>
        <NavLink to={"/posts"}>POSTS</NavLink>
        <NavLink to={"/about"}>ABOUT</NavLink>

        {user && <MyButton onClick={signOut}>Logout</MyButton>}
      </header>

      <main className={styles.mainContent}>
        <Outlet />
      </main>

      <footer className={styles.footer}>@ Copyright by F*ck russia</footer>
    </>
  );
};
