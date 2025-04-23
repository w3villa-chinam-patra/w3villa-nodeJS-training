import React, { useEffect, useState } from "react";
import BlogCard from "./BlogCard";
import toast from "react-hot-toast";

function BlogContainer() {
  const [blogsData, setBlogsData] = useState();
  useEffect(() => {
    (async () => {
      try {
        const response = await fetch("http://localhost:1337/api/blog");
        if (response.ok) {
          const { data } = await response.json();
          setBlogsData(data);
        } else {
          toast.error("Failed to fetch blogsData");
        }
      } catch (error) {
        console.error(error.message);
        toast.error("Failed to fetch blogsData");
      }
    })();
  }, []);
  return (
    <div className="h-full flex flex-col items-center ">
      {blogsData?.map((blogData, i) => (
        <BlogCard key={i} blogData={blogData} />
      ))}
    </div>
  );
}

export default BlogContainer;
