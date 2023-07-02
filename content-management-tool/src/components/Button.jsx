const Button = ({ text }) => {
  return (
    <button className="outline-none text-white text-[18px] font-semibold rounded-lg px-4 py-2 cursor-pointer  bg-gradient-to-r from-[#ff9a9e] to-[#f6416c] font-montserrat border border-[#fff]">
      {text}
    </button>
  );
};

export default Button;
