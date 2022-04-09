import React from "react";

import styles from "./PostInfo.module.css";

export const PostInfo = ({ post }) => {
  const { id, title, body } = post;

  return (
    <div className={styles.postBlock}>
      <h1>
        Post #{id} {title}
      </h1>

      <p>Body: {body}</p>
    </div>
  );
};
