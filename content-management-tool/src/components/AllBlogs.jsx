import Card from "./Card";

const AllBlogs = ({ blogs }) => {
  return (
    <div className="w-[88%] mx-auto">
      <div>
        <p className="text-4xl font-montserrat font-semibold text-[#fff] text-center">
          All Blogs
        </p>
      </div>
      {blogs.length === 0 ? (
        <p className="text-2xl font-montserrat font-semibold text-[#fff] text-center mt-5 h-[50vh] flex flex-col justify-center">
          No blogs available
        </p>
      ) : (
        <div className="flex flex-wrap gap-[20px]  overflow-scroll scroll h-[65vh] py-[30px] justify-center">
          {blogs.map((blog, index) => (
            <Card key={index} blog={blog} />
          ))}
        </div>
      )}
    </div>
  );
};

export default AllBlogs;
