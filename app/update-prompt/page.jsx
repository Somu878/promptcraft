"use client";
import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Form from "@components/Form";

const Updateprompt = () => {
  const router = useRouter();
  const searchparams = useSearchParams();
  const promptId = searchparams.get("id");
  const [submit, setSubmit] = useState(false);
  const [post, setPost] = useState({
    prompt: "",
    tag: "",
  });
  useEffect(() => {
    const getPrompt = async () => {
      const response = await fetch(`/api/prompt/${promptId}`);
      const data = await response.json();
      setPost({
        prompt: data.prompt,
        tag: data.tag,
      });
    };
    if (promptId) {
      getPrompt();
    }
  }, [promptId]);
  const editPrompt = async (e) => {
    e.preventDefault();
    setSubmit(true);
    if (!promptId) return alert("Missing PromptId!");
    try {
      const response = await fetch(`/api/prompt/${promptId}`, {
        method: "PATCH",
        body: JSON.stringify({
          prompt: post.prompt,
          tag: post.tag,
        }),
      });

      if (response.ok) {
        router.push("/");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setSubmit(false);
    }
  };
  return (
    <Form
      type="Edit"
      post={post}
      setPost={setPost}
      submit={submit}
      handleSubmit={editPrompt}
    />
  );
};

export default Updateprompt;
