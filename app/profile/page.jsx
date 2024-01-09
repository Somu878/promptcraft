"use client";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

import { useState, useEffect } from "react";
import Profile from "@components/Profile";
const Profilepage = () => {
  const router = useRouter();
  const { data: session } = useSession();
  const [posts, setposts] = useState([]);
  useEffect(() => {
    const getPosts = async () => {
      const res = await fetch(`/api/users/${session?.user.id}/posts`);
      const data = await res.json();
      setposts(data);
    };
    if (session?.user.id) {
      getPosts();
    }
  }, []);
  const handleEdit = (post) => {
    router.push(`/update-prompt?id=${post._id}`);
  };
  const handleDelete = async (post) => {
    const hasConfirmed = confirm(
      "Are you sure you want to delete this prompt?"
    );

    if (hasConfirmed) {
      try {
        await fetch(`/api/prompt/${post._id.toString()}`, {
          method: "DELETE",
        });
        const filteredPosts = posts.filter((item) => item._id !== post._id);
        setposts(filteredPosts);
      } catch (error) {
        console.log(error);
      }
    }
  };
  return (
    <Profile
      name="My"
      desc="Welcome to your personalized profile page. Share your exceptional prompts and inspire others with the power of your imagination"
      data={posts}
      handleEdit={handleEdit}
      handleDelete={handleDelete}
    />
  );
};

export default Profilepage;
