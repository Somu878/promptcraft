import Feed from "@components/Feed";
import Nav from "@components/Nav";
const Home = () => (
  <section className="flex-col w-full flex-center">
    <h1 className="text-center head_text">
      Discover & Share
      <br className="max-mg:hidden" />
      <span className="orange_gradient">AI-Powered Prompts</span>
    </h1>
    <p className="text-center desc">
      PromptCraft is an open-source collaborative hub for creative AI prompts.
      Join us in shaping the future of collaborative expression.
    </p>
    <Feed />
  </section>
);

export default Home;
