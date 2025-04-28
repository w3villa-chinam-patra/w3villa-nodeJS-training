import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { AiFillLike } from "react-icons/ai";
import { useNavigate } from "react-router";
import { AppRoutes } from "../../constants";
import CommentBlock from "./CommentBlock";
import { useUser } from "../../contexts";

function BlogCard({ blogData }) {
  const navigate = useNavigate();
  const [totalLikes, setTotalLikes] = useState([]);
  const [newComment, setNewComment] = useState("");
  const [allComments, setAllComments] = useState([]);
  const { user } = useUser();

  const fetchTotalLikes = async () => {
    const response = await fetch(
      `http://localhost:1337/api/total-likes/${blogData.id}`
    );
    const { data } = await response.json();
    return data.totalLikes;
  };

  const fetchAllComments = async () => {
    try {
      const response = await fetch(
        `http://localhost:1337/api/comment/${blogData.id}`
      );
      if (response.ok) {
        const { data } = await response.json();
        setAllComments(data);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    (async () => {
      setTotalLikes(await fetchTotalLikes());
    })();
    fetchAllComments();
  }, []);

  const sendCommentHandler = async () => {
    const token = localStorage.getItem("token");
    try {
      if (token) {
        await fetch(`http://localhost:1337/api/comment`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            blogId: blogData.id,
            content: newComment,
          }),
        });
        setNewComment("");
        fetchAllComments();
      } else {
        toast.error("Login to comment on blog");
        navigate(AppRoutes.LOGIN_ROUTE);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  const likeHandler = async () => {
    const token = localStorage.getItem("token");
    try {
      if (token) {
        const response = await fetch(`http://localhost:1337/api/like`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            blogId: blogData.id,
          }),
        });
        if (response.ok) {
          setTotalLikes(await fetchTotalLikes());
        }
      } else {
        toast.error("Login to like the blog");
        navigate(AppRoutes.LOGIN_ROUTE);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className=" bg-amber-50 my-4 rounded-2xl  border border-amber-300 flex">
      <div className="flex-1 flex flex-col items-start">
        <div className="w-2xl m-4">
          <img
            className="w-full rounded-2xl border border-neutral-300 "
            src={blogData.image}
            alt="image"
          />
        </div>
        <div className="flex gap-4 rounded-r-full bg-neutral-100 border border-t-neutral-300 border-b-neutral-300 border-r-neutral-300 border-l-0 justify-between py-1 px-6 mb-4 items-center text-neutral-600">
          <div className="posted-by flex flex-col text-sm ">
            <div className="font-black text-xs">Posted By</div>
            <div className="bg-white border border-neutral-300  px-2 rounded-full">
              {blogData.user.name}
            </div>
          </div>
          <button
            onClick={likeHandler}
            className="like-button flex gap-1 items-end"
          >
            <div className="mb-0.5 text-neutral-500">{totalLikes.length}</div>
            <AiFillLike
              className={`text-3xl p-1 cursor-pointer ${
                totalLikes?.find((like) => like.user === user.id)
                  ? "bg-amber-100 rounded-full text-amber-500 border border-amber-300 next-amber-300"
                  : "text-neutral-500"
              }`}
            />
          </button>
        </div>
      </div>
      <div>
        <div className="m-4 max-w-xl">
          <h1 className="text-5xl my-6 font-bold">{blogData.title}</h1>
          <div className="description text-neutral-600">
            {blogData.description}
          </div>
        </div>

        <div className="comment p-4 flex gap-4">
          <div className="flex-1">
            <input
              onChange={(e) => setNewComment(e.target.value)}
              value={newComment}
              className="w-full text-neutral-600 bg-white outline-none border border-amber-300 rounded-2xl px-2 py-1"
              type="text"
              name=""
              id=""
            />
          </div>
          <button
            onClick={sendCommentHandler}
            className="bg-amber-500 px-4 text-white rounded-2xl cursor-pointer"
          >
            Comment
          </button>
        </div>
        <div className="comment-box m-4 flex flex-col gap-2 items-start px-8">
          {allComments?.toReversed()?.map((commentData, i) => (
            <CommentBlock key={i} commentData={commentData} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default BlogCard;
