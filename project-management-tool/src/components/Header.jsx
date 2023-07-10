const Header = ({ handleAdd }) => {
  return (
    <div
      className="bg-[#12343b] w-[90%] mx-auto h-[100px] shadow mb-[10px]  rounded-md "
      data-aos="fade-down"
      data-aos-duration="1100"
    >
      <p className="text-[#fff] text-[35px] font-semibold flex justify-center items-center pt-[20px] font-montserrat">
        TaskMaster
      </p>
    </div>
  );
};

export default Header;
