import { useState } from "react";
import Button from "./Button";

const BlogForm = () => {
  const [formData, setFormData] = useState({
    wallpaper: "",
    title: "",
    description: "",
    userImage: "",
    username: "",
  });

  const handleInputChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform form submission or data processing here
    // Access the form values using formData object

    // Reset the form fields
    setFormData({
      wallpaper: "",
      title: "",
      description: "",
      userImage: "",
      date: "",
      username: "",
    });
  };

  return (
    <div className="flex flex-col gap-[20px] w-[88%] mx-auto h-[80vh] items-center">
      <p className="text-[30px] text-[#fff] font-montserrat">WRITE BLOG</p>
      <form
        className="h-[full] w-[50vw] bg-transparent flex justify-center text-center flex-col shadow-xl rounded-xl p-[30px] border border-[#fff]/20"
        onSubmit={handleSubmit}
      >
        <div className="mb-3">
          <input
            type="file"
            id="wallpaper"
            name="wallpaper"
            onChange={handleInputChange}
            className="mt-1 px-5  py-2 border border-gray-300 rounded-[30px] w-full text-[#fff] text-[18px]"
          />
        </div>
        <div className="mb-3">
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleInputChange}
            placeholder="Title"
            className="mt-1 px-5  py-2 border border-gray-300 rounded-[30px] w-full bg-transparent outline-none text-[#fff] placeholder-[#fff] text-[18px]"
          />
        </div>
        <div className="mb-3">
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            placeholder="Description"
            className="mt-1 px-5  py-2 border border-gray-300 rounded-[30px] w-full bg-transparent outline-none text-[#fff] placeholder-[#fff] text-[18px]"
          ></textarea>
        </div>
        <div className="mb-3">
          <input
            type="file"
            id="userImage"
            name="userImage"
            onChange={handleInputChange}
            className="mt-1 px-5 py-2 border border-gray-300 rounded-[30px] w-full bg-transparent outline-none text-[#fff] text-[18px]"
          />
        </div>
        <div className="mb-3">
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleInputChange}
            placeholder="Username"
            className="mt-1 px-5  py-2 border border-gray-300 rounded-[30px] w-full bg-transparent outline-none text-[#fff] placeholder-[#fff] text-[18px]"
          />
        </div>
      </form>
      <Button text="Save Blog" />
    </div>
  );
};

export default BlogForm;
