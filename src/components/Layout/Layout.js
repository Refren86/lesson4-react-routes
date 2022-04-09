import React from "react";
import { NavLink, Outlet } from "react-router-dom";

import styles from "./Layout.module.css";

export const Layout = () => {
  return (
    <>
      <header className={styles.navbar}>
        <NavLink to={"/"}>HOME</NavLink>
        <NavLink to={"/posts"}>POSTS</NavLink>
        <NavLink to={"/about"}>ABOUT</NavLink>
      </header>

      <main className={styles.mainContent}>
        <Outlet />
      </main>

      <footer className={styles.footer}>@ Copyright by F*ck russia</footer>
    </>
  );
};
