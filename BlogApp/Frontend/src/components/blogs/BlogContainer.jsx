import React, { useEffect, useState } from "react";
import BlogCard from "./BlogCard";
import toast from "react-hot-toast";
import { IoMdCreate } from "react-icons/io";
import CreateBlog from "./CreateBlog";
import { useNavigate } from "react-router";
import { AppRoutes } from "../../constants";

function BlogContainer() {
  const navigate = useNavigate();
  const [blogsData, setBlogsData] = useState();
  const [isCreateBlog, setIsCreateBlog] = useState(false);

  const fetchBlogData = async () => {
    try {
      const response = await fetch("http://localhost:1337/api/blog");
      if (response.ok) {
        const { data } = await response.json();
        console.log(data);
        setBlogsData(data);
      } else {
        toast.error("Failed to fetch blogs data");
      }
    } catch (error) {
      console.error(error.message);
      toast.error("Failed to fetch blogsData");
    }
  };

  useEffect(() => {
    (async () => await fetchBlogData())();
  }, []);

  const createBlogClickHandler = () => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsCreateBlog((prev) => !prev);
    } else {
      toast.error("Login to create a blog");
      navigate(AppRoutes.LOGIN_ROUTE);
    }
  };

  return (
    <div className="h-full flex flex-col items-center ">
      {blogsData?.map((blogData, i) => (
        <BlogCard key={i} blogData={blogData} />
      ))}
      <div
        onClick={createBlogClickHandler}
        className="create-blog bg-amber-500 p-4 fixed right-8 bottom-8 rounded-full hover:ring-4 ring-neutral-300 cursor-pointer"
      >
        <IoMdCreate className="text-white text-3xl" />
      </div>
      {isCreateBlog ? (
        <CreateBlog
          fetchBlogData={fetchBlogData}
          setIsCreateBlog={setIsCreateBlog}
        />
      ) : (
        <></>
      )}
    </div>
  );
}

export default BlogContainer;
