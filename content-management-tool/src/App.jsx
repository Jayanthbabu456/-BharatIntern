// import { useState } from "react";
// import { Route, Routes } from "react-router-dom";
// import Main from "./components/Main";
// import Header from "./components/Header";
// import AllBlogs from "./components/AllBlogs";
// import BlogForm from "./components/BlogForm";
// import Blog from "./components/Blog";
// import { v4 as uuid } from "uuid";

// function App() {
//   const [blogData, setBlogData] = useState([]);

//   const handleFormSubmit = (formData) => {
//     const blogWithId = { ...formData, id: uuid() };
//     setBlogData((prevData) => [...prevData, blogWithId]);
//   };

//   return (
//     <div className="relative h-screen w-full gradient overflow-hidden flex justify-center items-center">
//       <div className="absolute left-[-220px] top-[-100px] w-[550px] h-[550px] rounded-full opacity-40 bg-gradient-to-r from-[#ff9a9e] to-[#f6416c]"></div>

//       <div className="absolute bottom-[-100px] right-[-220px] w-[550px] h-[550px] rounded-full opacity-40  bg-gradient-to-r from-[#ff9a9e] to-[#f6416c]"></div>
//       <div className="design">
//         <Header />
//         <Routes>
//           <Route path="/" element={<Main />} />
//           <Route path="/Allblogs" element={<AllBlogs blogs={blogData} />} />
//           <Route
//             path="/Writeblog"
//             element={<BlogForm onFormSubmit={handleFormSubmit} />}
//           />
//           <Route
//             path="/blog/:id"
//             element={<Blog blog={blogData.find((blog) => blog.id === id)} />}
//           />
//         </Routes>
//       </div>
//     </div>
//   );
// }

// export default App;

import { useState } from "react";
import { Route, Routes, useParams } from "react-router-dom";
import Main from "./components/Main";
import Header from "./components/Header";
import AllBlogs from "./components/AllBlogs";
import BlogForm from "./components/BlogForm";
import Blog from "./components/Blog";
import { v4 as uuid } from "uuid";

function App() {
  const [blogData, setBlogData] = useState([]);

  const handleFormSubmit = (formData) => {
    const blogWithId = { ...formData, id: uuid() };
    setBlogData((prevData) => [...prevData, blogWithId]);
  };

  return (
    <div className="relative h-screen w-full gradient overflow-hidden flex justify-center items-center">
      <div className="absolute left-[-220px] top-[-100px] w-[550px] h-[550px] rounded-full opacity-40 bg-gradient-to-r from-[#ff9a9e] to-[#f6416c]"></div>

      <div className="absolute bottom-[-100px] right-[-220px] w-[550px] h-[550px] rounded-full opacity-40  bg-gradient-to-r from-[#ff9a9e] to-[#f6416c]"></div>
      <div className="design">
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/Allblogs" element={<AllBlogs blogs={blogData} />} />
          <Route
            path="/Writeblog"
            element={<BlogForm onFormSubmit={handleFormSubmit} />}
          />
          <Route path="/blog/:id" element={<BlogPage blogs={blogData} />} />
        </Routes>
      </div>
    </div>
  );
}

function BlogPage({ blogs }) {
  const { id } = useParams();

  const blog = blogs.find((blog) => blog.id === id);

  return <Blog blog={blog} />;
}

export default App;
