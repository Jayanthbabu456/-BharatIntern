import { toast } from "react-toastify";

const Buttons = ({
  handleSave,
  setTitle,
  setDescription,
  title,
  description,
}) => {
  const handleCancle = () => {
    if (title === "" && description === "") {
      alert("Fields are Emppty");
      return;
    }
    setTitle("");
    setDescription("");
    toast.warn("Task cancelled successfully!");
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
