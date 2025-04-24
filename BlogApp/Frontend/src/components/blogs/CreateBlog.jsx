import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

function CreateBlog({ fetchBlogData, setIsCreateBlog }) {
  const [categories, setCategories] = useState([]);
  const [blogContents, setBlogContents] = useState({
    title: "",
    description: "",
    image: "",
    category: "",
  });

  function onChangeHandler(event) {
    setBlogContents({
      ...blogContents,
      [event.target.id]: event.target.value,
    });
  }

  useEffect(() => {
    (async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await fetch("http://localhost:1337/api/category", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });
        const { data } = await response.json();
        setCategories(data);
      } catch (error) {
        console.log(error);
        toast.error("Failed to fetch categories");
      }
    })();
  }, []);

  const createBlogHandler = async (event) => {
    event.preventDefault();
    if (blogContents.title === "") {
      toast.error("Title is required");
      return;
    }
    if (blogContents.description === "") {
      toast.error("Description is required");
      return;
    }
    if (blogContents.image === "") {
      toast.error("Image url is required");
      return;
    }
    if (blogContents.category === "") {
      toast.error("Category is required");
      return;
    }

    const token = localStorage.getItem("token");
    try {
      if (token) {
        await fetch(`http://localhost:1337/api/blog/`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(blogContents),
        });
        setBlogContents({
          title: "",
          description: "",
          image: "",
          category: "",
        });
        toast.success("Blog created successfully");
        setIsCreateBlog(false);
        await fetchBlogData();
      } else {
        toast.error("Login to create a blog");
        navigate(AppRoutes.LOGIN_ROUTE);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  const closePopupHandler = (event) => {
    if (event.target === event.currentTarget) {
      setIsCreateBlog(false);
    }
  };

  return (
    <div
      onClick={closePopupHandler}
      className="create-blog-form-popup absolute inset-0 flex justify-center items-center backdrop-blur-xs"
    >
      <div className="create-form bg-amber-50 p-8 rounded-2xl w-full max-w-xl border border-neutral-500">
        <form>
          <h1 className="text-4xl text-amber-700 mb-8">Create Blog</h1>
          <div className="input-field my-2 w-full">
            <label htmlFor="title">Enter Title</label>
            <br />
            <input
              onChange={onChangeHandler}
              value={blogContents.title}
              className="border border-neutral-400 bg-white w-full outline-none rounded-lg py-1 px-2"
              id="title"
              type="text"
            />
          </div>
          <div className="input-field my-2 w-full">
            <label htmlFor="description">Enter Description</label>
            <br />
            <textarea
              onChange={onChangeHandler}
              value={blogContents.description}
              className="border border-neutral-400 bg-white w-full resize-none outline-none rounded-lg min-h-32 py-1 px-2"
              id="description"
              type="text"
            ></textarea>
          </div>
          <div className="input-field my-2 w-full">
            <label htmlFor="image">Enter image url</label>
            <br />
            <input
              onChange={onChangeHandler}
              value={blogContents.image}
              className="border border-neutral-400 bg-white w-full outline-none rounded-lg py-1 px-2"
              id="image"
              type="text"
            />
          </div>
          <div className="input-field my-2 w-full">
            <select
              name=""
              onChange={onChangeHandler}
              id="category"
              className="bg-white p-2 rounded-lg border border-neutral-400 max-h-52 overflow-y-auto outline-none"
            >
              <option value="">Select Category</option>
              {categories?.map((category) => (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              ))}
            </select>
          </div>
          <div className="flex justify-center my-2 ">
            <button
              onClick={createBlogHandler}
              className="bg-amber-600 cursor-pointer hover:ring-2 ring-neutral-300  text-white py-2 px-4 rounded-lg"
            >
              Create
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CreateBlog;
