import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router";
import { AppRoutes } from "../../constants";

function Home() {
  return (
    <div className="h-full flex items-center justify-evenly px-16">
      <div className="hero-section flex flex-col items-start text-6xl">
        <div className="font-thin">CHAT APP</div>
        <div>SERVICE</div>
        <div className="text-lg max-w-md my-8 text-gray-500">
          Stay connected with your friends, family, or colleagues in real time.
          ChatVerse makes messaging easy, secure, and fun — all in one place.
        </div>
        <Link
          to={AppRoutes.CHAT_APP_ROUTE}
          className="text-lg flex gap-4 items-center bg-teal-500 text-white rounded-full px-8 py-2"
        >
          Get Started
          <BsArrowRight className="text-2xl" />
        </Link>
      </div>
      <div className="image-container">
        <img className="w-full max-w-2xl" src="/chat.svg" alt="chat image" />
      </div>
    </div>
  );
}

export default Home;
