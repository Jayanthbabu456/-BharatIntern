import Button from "./Button";
import { Link } from "react-router-dom";
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
        <Link to="/">
          <Button text="Home" />
        </Link>
        <Link to="/Allblogs">
          <Button text="All Blogs" />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
