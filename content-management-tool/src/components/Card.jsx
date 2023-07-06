import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Card = ({ blog }) => {
  const maxLength = 150;
  const userMaxLength = 10;

  const [description, setDescription] = useState("");
  const [username, setUsername] = useState("");

  useEffect(() => {
    if (blog && blog.description) {
      const croppedDescription = blog.description.substring(0, maxLength);
      setDescription(
        croppedDescription.length < blog.description.length
          ? croppedDescription + "..."
          : croppedDescription
      );
    }
  }, [blog]);

  useEffect(() => {
    if (blog && blog.username) {
      const croppedUsername = blog.username.substring(0, userMaxLength);
      setUsername(
        croppedUsername.length < blog.username.length
          ? croppedUsername + "..."
          : croppedUsername
      );
    }
  }, [blog]);

  function getTodaysDate() {
    const options = { day: "numeric", month: "long", year: "numeric" };
    return new Date().toLocaleDateString("en-US", options);
  }

  if (!blog) {
    return null; // Return null or handle the case when blog prop is not provided
  }

  return (
    <div className="flex flex-col gap-[20px] cursor-pointer ">
      <div className="w-[350px] h-[full] rounded overflow-hidden shadow-lg bg-white ">
        <Link to={`/blog/${blog.id}`}>
          <div className="w-[350px] h-[full] rounded overflow-hidden shadow-lg bg-white">
            <img className="w-full h-[20vh]" src={blog.wallpaper} alt="Card" />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">{blog.title}</div>
              <p className="text-gray-700 text-base">{description}</p>
            </div>
            <div className="px-6 py-4 flex items-center justify-between">
              <div className="flex items-center ">
                <img
                  className="w-12 h-12 rounded-full mr-4"
                  src={blog.userImage}
                  alt="User"
                />
                <div>
                  <p className="text-gray-900 font-semibold text-[16px] font-poppins">
                    {username}
                  </p>
                  <p className="text-gray-700 text-[14px] font-poppins font-semibold">
                    {getTodaysDate()}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Card;
