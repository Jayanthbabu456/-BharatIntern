import Button from "./Button";

const Navbar = () => {
  return (
    <div className="flex flex-row  justify-between items-center">
      <div>
        <p className="text-[40px] font-montserrat text-[#fff]">
          <span className="font-monoton">C</span>ontent
          <span className="font-monoton">V</span>erse
        </p>
      </div>
      <div className="flex flex-row gap-[30px]">
        <Button text="Home" />
        <Button text="All Blogs" />
        {/* <Button text="Add Blog" /> */}
      </div>
    </div>
  );
};

export default Navbar;
