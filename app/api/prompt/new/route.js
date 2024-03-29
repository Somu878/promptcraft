import { connectDB } from "@utils/database";
import Prompt from "@models/prompt";
export const POST = async (req) => {
  const { userID, prompt, tag } = await req.json();
  try {
    await connectDB();
    const newPrompt = await new Prompt({
      creator: userID,
      prompt,
      tag,
    });
    await newPrompt.save();
    return new Response(JSON.stringify(newPrompt), {
      status: 201,
    });
  } catch (error) {
    return new Response("Failed to create a prompt", {
      status: 500,
    });
  }
};
