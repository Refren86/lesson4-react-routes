import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";

import { PostInfo } from "../../components";
import { postService } from "../../services/postService";
import styles from "./PostPage.module.css";

export const PostPage = () => {
  const [post, setPost] = useState(null);
  const { postId } = useParams();
  const { state } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (state) {
      setPost(state);
      return;
    }

    postService.getById(postId).then((postObj) => setPost(postObj));
  }, [postId]);

  return (
    <div className={styles.postWrapper}>
      <button className={styles.returnBtn} onClick={() => navigate(-1)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
        >
          <path d="M17.026 22.957c10.957-11.421-2.326-20.865-10.384-13.309l2.464 2.352h-9.106v-8.947l2.232 2.229c14.794-13.203 31.51 7.051 14.794 17.675z" />
        </svg>
        Return
      </button>

      {post && <PostInfo post={post} />}
    </div>
  );
};
