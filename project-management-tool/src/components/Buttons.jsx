const Buttons = ({ handleSave, setTitle, setDescription }) => {
  const handleCancle = () => {
    setTitle("");
    setDescription("");
  };
  return (
    <div className="flex flex-row gap-4 pt-5">
      <button
        className="py-[15px] px-[20px] text-[16px] font-bold rounded-md bg-[#f1af71] shadow-current font-montserrat"
        onClick={handleSave}
      >
        SAVE
      </button>
      <button
        className="py-[15px] px-[20px] text-[16px] font-bold rounded-md bg-[#f1af71] shadow-current font-montserrat"
        onClick={handleCancle}
      >
        CANCLE
      </button>
    </div>
  );
};

export default Buttons;
