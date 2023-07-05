const Blog = ({ blog }) => {
  if (!blog) {
    return null;
  }

  const { wallpaper, title, description, username } = blog;
  function getTodaysDate() {
    const options = { day: "numeric", month: "long", year: "numeric" };
    return new Date().toLocaleDateString("en-US", options);
  }
  return (
    <div className="w-[88%] mx-auto h-[70vh] pt-[20px] overflow-scroll scroll">
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
            <p className="text-[#fff] font-semibold text-[20px]">{username}</p>
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
      </div>
    </div>
  );
};

export default Blog;
