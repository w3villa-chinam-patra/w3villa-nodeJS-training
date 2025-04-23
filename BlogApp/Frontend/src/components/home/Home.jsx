import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router";
import { AppRoutes } from "../../constants";

function Home() {
  return (
    <div className="h-full flex items-center justify-evenly px-16">
      <div className="hero-section flex flex-col items-start text-6xl">
        <div className="font-thin">BLOG APP</div>
        <div>SERVICE</div>
        <div className="text-lg max-w-md my-8 text-gray-500">
          Welcome to BlogVerse - your daily dose of insightful stories,
          practical tips, and inspiring content. Whether you're here to explore
          the latest in technology, get inspired by travel diaries, level up
          your personal finance game, or simply enjoy well-written thoughts on
          life — we've got something for everyone.
        </div>
        <Link
          to={AppRoutes.BLOGS_ROUTE}
          className="text-lg flex gap-4 items-center bg-amber-500 text-white rounded-full px-8 py-2"
        >
          Get Started
          <BsArrowRight className="text-2xl" />
        </Link>
      </div>
      <div className="image-container">
        <img className="w-full max-w-2xl" src="/blog.svg" alt="chat image" />
      </div>
    </div>
  );
}

export default Home;
