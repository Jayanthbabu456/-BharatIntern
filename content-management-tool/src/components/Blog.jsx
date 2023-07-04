const Blog = ({ blog }) => {
  if (!blog) {
    return null; // Return null or handle the case when 'blog' is not available
  }

  const { wallpaper, title, description, username } = blog;
  function getTodaysDate() {
    const options = { day: "numeric", month: "long", year: "numeric" };
    return new Date().toLocaleDateString("en-US", options);
  }
  return (
    <div className="w-[88%] mx-auto h-[70vh] pt-[20px]">
      <div className="flex flex-col gap-[20px]">
        <div className="w-[70vw] h-[35vh] mx-auto">
          <img
            className="w-[100%] h-[100%] rounded-[20px] border border-[#fff]/30 shadow-lg"
            src={wallpaper}
            alt="Wallpaper"
          />
        </div>

        <div className="w-[70vw] mx-auto">
          <div className="font-bold text-xl mb-2 text-[#fff]">{title}</div>
          <p className="text-[#fff] text-[18px]">{description}</p>
        </div>
        <div className="flex flex-row justify-between w-[70vw] mx-auto">
          <p className="text-[#fff] font-semibold text-[16px]">{username}</p>
          <p className="text-[#fff] text-[16px]">{getTodaysDate()}</p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
