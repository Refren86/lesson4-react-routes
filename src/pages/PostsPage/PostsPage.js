import React, { useEffect, useState } from "react";

import { Post } from "../../components";
import { postService } from "../../services/postService";
import styles from "./PostsPage.module.css";

export const PostsPage = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    postService.getAll().then((postsArr) => setPosts(postsArr));
  }, []);

  return (
    <div className={styles.postsContainer}>
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
};
