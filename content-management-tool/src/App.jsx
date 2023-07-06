import { useState, useEffect } from "react";
import { Route, Routes, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Main from "./components/Main";
import Header from "./components/Header";
import AllBlogs from "./components/AllBlogs";
import BlogForm from "./components/BlogForm";
import Blog from "./components/Blog";
import { v4 as uuid } from "uuid";
import EditBlogForm from "./components/EditBlogForm";

const MAX_BLOGS_LIMIT = 1000;

function App() {
  const [blogData, setBlogData] = useState(() => {
    const storedBlogs = localStorage.getItem("blogs");
    if (storedBlogs) {
      return JSON.parse(storedBlogs);
    } else {
      return [];
    }
  });
  const navigate = useNavigate();

  const handleFormSubmit = (formData) => {
    const isEmpty = Object.values(formData).some((value) => value === "");
    if (isEmpty) {
      alert("All fields are required");
      return;
    }
    const blogWithId = { ...formData, id: uuid() };
    setBlogData((prevData) => {
      const updatedData = [...prevData, blogWithId];
      if (updatedData.length > MAX_BLOGS_LIMIT) {
        updatedData.splice(0, updatedData.length - MAX_BLOGS_LIMIT);
      }
      return updatedData;
    });
  };

  useEffect(() => {
    try {
      localStorage.setItem("blogs", JSON.stringify(blogData));
    } catch (error) {
      console.error("Storage quota exceeded:", error);
    }
  }, [blogData]);

  const handleEditFormSubmit = (updatedBlog) => {
    const updatedBlogData = blogData.map((blog) => {
      if (blog.id === updatedBlog.id) {
        return updatedBlog;
      }
      return blog;
    });

    setBlogData(updatedBlogData);
    navigate(`/blog/${updatedBlog.id}`);
  };
  const deleteBlog = (blogId) => {
    const updatedBlogData = blogData.filter((blog) => blog.id !== blogId);
    setBlogData(updatedBlogData);
  };

  return (
    <div className="relative h-screen w-full gradient overflow-hidden flex justify-center items-center">
      <div className="absolute left-[-220px] top-[-100px] w-[550px] h-[550px] rounded-full opacity-40 bg-gradient-to-r from-[#ff9a9e] to-[#f6416c]"></div>

      <div className="absolute bottom-[-100px] right-[-220px] w-[550px] h-[550px] rounded-full opacity-40  bg-gradient-to-r from-[#ff9a9e] to-[#f6416c]"></div>
      <div className="design">
        <Header />

        <Routes>
          <Route path="/" element={<Main />} />
          <Route
            path="/Allblogs"
            element={<AllBlogs blogs={blogData} setBlogData={setBlogData} />}
          />
          <Route
            path="/Writeblog"
            element={<BlogForm onFormSubmit={handleFormSubmit} />}
          />
          <Route
            path="/blog/:id"
            element={<BlogPage blogs={blogData} deleteBlog={deleteBlog} />}
          />
          <Route
            path="/edit/:id"
            element={
              <EditBlogPage blogs={blogData} onUpdate={handleEditFormSubmit} />
            }
          />
        </Routes>
      </div>
    </div>
  );
}

function BlogPage({ blogs, deleteBlog }) {
  const { id } = useParams();

  const blog = blogs.find((blog) => blog.id === id);

  return <Blog blog={blog} onDelete={deleteBlog} />;
}

function EditBlogPage({ blogs, onUpdate }) {
  const { id } = useParams();

  const blog = blogs.find((blog) => blog.id === id);

  if (!blog) {
    return <div>Blog not found</div>;
  }

  return <EditBlogForm blog={blog} onFormSubmit={onUpdate} />;
}

export default App;
