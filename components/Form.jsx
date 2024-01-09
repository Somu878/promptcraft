"use client";
import Link from "next/link";

const Form = ({ type, post, setPost, submit, handleSubmit }) => {
  return (
    <section className="flex-col w-full max-w-full flex-start">
      <h1 className="text-left head_text">
        <span className="blue_gradient">{type} Post</span>
      </h1>
      <p className="max-w-md text-left desc">
        {type} and share captivating prompts worldwide, unleashing your
        creativity on any AI-powered platform
      </p>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col w-full max-w-2xl mt-10 gap-7 glassmorphism"
      >
        <label>
          <span className="text-base font-semibold text-gray-700 font-satoshi">
            Your AI Prompt
          </span>
          <textarea
            value={post.prompt}
            onChange={(e) =>
              setPost({
                ...post,
                prompt: e.target.value,
              })
            }
            className="form_textarea"
            required
            placeholder="Write your prompt here.."
          />
        </label>
        <label>
          <span className="text-base font-semibold text-gray-700 font-satoshi">
            Tags{" "}
            <span className="font-normal">
              (#webdevelopment #dsa #javascript)
            </span>
          </span>
          <input
            value={post.tag}
            onChange={(e) =>
              setPost({
                ...post,
                tag: e.target.value,
              })
            }
            required
            className="form_input"
            placeholder="Add tags here.."
          />
        </label>
        <div className="gap-4 mx-3 mb-5 flex-end">
          <Link href="/" className="text-sm text-gray-500">
            Cancel
          </Link>
          <button
            className="px-5 py-1.5 text-sm bg-primary-orange rounded-full text-white"
            type="submit"
            disabled={submit}
          >
            {submit ? `${type}..` : type}
          </button>
        </div>
      </form>
    </section>
  );
};

export default Form;
