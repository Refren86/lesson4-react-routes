import React from "react";
import { Link } from "react-router-dom";

import styles from "./Post.module.css";

export const Post = ({ post }) => {
  const { id, title } = post;

  return (
    <div className={styles.postBlock}>
      <h3>
        <em>
          {id}) {title}
        </em>
      </h3>

      <Link className={styles.postLink} to={id.toString()} state={post}>
        Show details
      </Link>
    </div>
  );
};
