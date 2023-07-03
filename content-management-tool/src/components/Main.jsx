import Button from "./Button";
import AOS from "aos";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const Main = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="h-[70vh] flex flex-row justify-center items-center w-[88%] mx-auto">
      <div className="flex flex-wrap">
        <div
          className="w-[55%] p-4 "
          data-aos="fade-right"
          data-aos-delay="800"
        >
          <h2 className="text-5xl font-semibold mb-5 text-white font-montserrat">
            Start Writing Your Blog
          </h2>
          <p className="text-white font-poppins italic mb-6 text-xl font-semibold leading-8">
            "The world needs to hear your voice. Share your stories,
            experiences, and insights with others through the power of
            blogging."
          </p>
          <p className="text-white font-poppins mb-6 text-xl leading-8">
            Writing a blog allows you to express yourself, share your expertise,
            connect with others, and leave your mark on the digital landscape.
            It's a platform to inspire, educate, and empower. So why wait? Start
            your blogging journey today!
          </p>
          <Link to="/Writeblog">
            <Button text="Write Blog" />
          </Link>
        </div>
        <div
          className="w-[45%] p-4 relative"
          data-aos="fade-left"
          data-aos-delay="1000"
        >
          <div className="group overflow-hidden rounded-lg">
            <img
              src="./src/assets/Blogbanner.jpeg"
              alt="Blog"
              className="w-full h-full transition-all duration-300 transform group-hover:scale-105"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
