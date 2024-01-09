"use client";
import { useEffect, useState } from "react";
import Promptcard from "./Promptcard";
const PromptcardList = ({ data, handletagClick }) => {
  return (
    <div className="mt-16 prompt_layout">
      {data.map((post) => (
        <Promptcard
          key={post._id}
          post={post}
          handletagClick={handletagClick}
        />
      ))}
    </div>
  );
};
const Feed = () => {
  const [searctText, setsearctText] = useState("");
  const [posts, setPosts] = useState([]);
  const handleSearch = (e) => {};
  useEffect(() => {
    const getPosts = async () => {
      const res = await fetch("/api/prompt");
      const data = await res.json();
      setPosts(data);
    };
    getPosts();
  }, []);
  return (
    <section className="feed">
      <form className="relative w-full flex-center">
        <input
          className="search_input peer"
          value={searctText}
          onChange={handleSearch}
          required
          placeholder="search for prompts here..."
        />
      </form>
      <PromptcardList data={posts} handletagClick={() => {}} />
    </section>
  );
};

export default Feed;
