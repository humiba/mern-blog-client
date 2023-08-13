import React, { useEffect, useState } from "react";

import { Post } from "../components";
import { BASE_URL } from "../utils/baseUrl";

const IndexPage = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch(`${BASE_URL}/post`).then((response) => {
      response.json().then((posts) => {
        // console.log(posts);
        setPosts(posts);
      });
    });
  }, []);

  return (
    <>
      {posts.length > 0 &&
        posts.map((post) => <Post key={post._id} {...post} />)}
    </>
  );
};

export default IndexPage;
