import data from "../data";
import Posts from "./Posts";
import { useState, useEffect } from "react";

export default function Exersice2() {
  const [posts, setPosts] = useState([]);
  async function getPosts() {
    await Promise.resolve();
    return data.slice(0, 10);
  }

  useEffect(() => {
    const getData = async function () {
      let posts = await getPosts();
      setPosts(posts);
    };
    getData();
  }, []);
  return (
    <div>
      <h1>Top Posts</h1>
      <Posts posts={posts} />;
    </div>
  );
}
