import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Blog = ({ blog, onDelete }) => {
  const navigate = useNavigate();
  if (!blog) {
    return null;
  }

  const { id, wallpaper, title, description, username } = blog;

  const handleDelete = () => {
    onDelete(id);

    navigate("/Allblogs");
  };

  function getTodaysDate() {
    const options = { day: "numeric", month: "long", year: "numeric" };
    return new Date().toLocaleDateString("en-US", options);
  }

  return (
    <>
      <div className="w-[88%] mx-auto h-[70vh] pt-[20px] overflow-scroll scroll design1">
        <div className="flex flex-col">
          <div>
            <p className="font-bold text-3xl mb-2 text-[#fff] text-center py-[20px] font-montserrat ">
              {title}
            </p>
          </div>
          <div className="border border-[#fff]/30 w-[88%]  mx-auto mt-[15px]"></div>
          <div className="flex flex-row justify-between w-[70vw] mx-auto py-1">
            <div className="flex flex-row gap-[10px] items-center cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="20px"
                width="20px"
                viewBox="0 0 448 512"
              >
                <path
                  fill="#fff"
                  d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"
                />
              </svg>
              <p className="text-[#fff] font-semibold text-[20px]">
                {username}
              </p>
            </div>
            <div className="flex flex-row gap-[10px] items-center cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20px"
                height="20px"
                viewBox="0 0 448 512"
              >
                <path
                  fill="#fff"
                  d="M128 0c17.7 0 32 14.3 32 32V64H288V32c0-17.7 14.3-32 32-32s32 14.3 32 32V64h48c26.5 0 48 21.5 48 48v48H0V112C0 85.5 21.5 64 48 64H96V32c0-17.7 14.3-32 32-32zM0 192H448V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V192zm64 80v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H80c-8.8 0-16 7.2-16 16zm128 0v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H208c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H336zM64 400v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H80c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H208zm112 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H336c-8.8 0-16 7.2-16 16z"
                />
              </svg>
              <p className="text-[#fff] text-[20px]">{getTodaysDate()}</p>
            </div>
          </div>
          <div className="border border-[#fff]/30 w-[88%]  mx-auto mb-10"></div>
          <div className="w-[40vw] h-[35vh] mx-auto group overflow-hidden rounded-[10px]">
            <img
              className="w-[100%] h-[100%] rounded-[10px] border border-[#fff]/80 shadow-xl transition-all duration-300 transform group-hover:scale-105 "
              src={wallpaper}
              alt="Wallpaper"
            />
          </div>
          <div className="w-[70vw] mx-auto">
            <p className="text-[#fff] text-[20px] pt-[25px]">{description}</p>
          </div>
          <div className="flex justify-end items-center gap-[15px] pr-[30px] pb-[20px]">
            <Link to={`/edit/${blog.id}`}>
              <button className="outline-none text-white text-[16px] font-semibold rounded-lg px-4 py-2 cursor-pointer  bg-gradient-to-r from-[#ff9a9e] to-[#f6416c] font-montserrat border border-[#fff] flex items-center gap-[10px]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="20px"
                  width="20px"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="#00A300"
                    d="M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z"
                  />
                </svg>
                <p>Edit</p>
              </button>
            </Link>
            <button
              onClick={handleDelete}
              className="outline-none text-white text-[16px] font-semibold rounded-lg px-4 py-2 cursor-pointer  bg-gradient-to-r from-[#ff9a9e] to-[#f6416c] font-montserrat border border-[#fff] flex items-center gap-[10px]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="20px"
                width="20px"
                viewBox="0 0 448 512"
              >
                <path
                  fill="#FF0000"
                  d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"
                />
              </svg>
              <p>Delete</p>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
