import Card from "./Card";
import { Link } from "react-router-dom";
import Button from "./Button";

const AllBlogs = ({ blogs }) => {
  return (
    <div className="w-[88%] mx-auto ">
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
        <div className="overflow-auto scroll h-[65vh]">
          <div className="flex flex-wrap gap-[20px]   py-[30px] justify-center ">
            {blogs.map((blog) => (
              <Card key={blog.id} blog={blog} />
            ))}
          </div>
          <div className="flex justify-center py-[10px]">
            <Link to="/writeblog">
              <Button text="Write Blog" />
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default AllBlogs;
