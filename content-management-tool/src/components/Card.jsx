import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Card = ({ blog, id }) => {
  const [description, setDescription] = useState(blog.description);
  const maxLength = 150;

  function getTodaysDate() {
    const options = { day: "numeric", month: "long", year: "numeric" };
    return new Date().toLocaleDateString("en-US", options);
  }

  useEffect(() => {
    if (description.length > maxLength) {
      const croppedText = description.substring(0, maxLength) + "...";
      setDescription(croppedText);
    }
  }, []);

  return (
    <div className="flex flex-col gap-[20px] cursor-pointer">
      <Link to={`/blog/${blog.id}`}>
        <div className="w-[350px] h-[full] rounded overflow-hidden shadow-lg bg-white">
          <img className="w-full h-[20vh]" src={blog.wallpaper} alt="Card" />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{blog.title}</div>
            <p className="text-gray-700 text-base">{description}</p>
          </div>
          <div className="px-6 py-4 flex items-center">
            <img
              className="w-10 h-10 rounded-full mr-4"
              src={blog.userImage}
              alt="User"
            />
            <div>
              <p className="text-gray-900 font-semibold">{blog.username}</p>
              <p className="text-gray-700 text-sm">{getTodaysDate()}</p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Card;