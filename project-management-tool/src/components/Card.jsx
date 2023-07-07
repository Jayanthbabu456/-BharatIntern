import { useState } from "react";
import { toast } from "react-toastify";

const Card = ({
  username,
  title,
  description,
  date,
  handleDelete,
  handleComplete,
  complete,
}) => {
  const [isComplete, setIsComplete] = useState(complete);

  const toggleComplete = () => {
    const updatedComplete = !isComplete;
    handleComplete(updatedComplete);
    setIsComplete(!isComplete);
    toast[updatedComplete ? "success" : "warn"](
      updatedComplete
        ? "Task completed successfully!"
        : "Task marked as incomplete!"
    );
  };
  return (
    <div
      className={`border-2 border-[#c89666] w-full h-[180px] px-[10px] overflow-y-auto rounded-md flex flex-col justify-center ${
        isComplete ? "" : ""
      }`}
    >
      <p className="text-[20px] font-medium text-[#fff] font-poppins">
        UserName: {username}
      </p>
      <p className="text-[20px] font-medium text-[#fff] font-poppins">
        Title:{title}
      </p>
      <p className="text-[20px] font-medium text-[#fff] font-poppins">
        Description:{description}
      </p>
      <div className="flex flex-row justify-between items-center mt-5">
        <div>
          <p className="text-[20px] font-medium text-[#fff] font-poppins">
            Date:{date}
          </p>
        </div>
        <div className="flex items-center gap-[10px]">
          <button
            className={`py-[10px] px-[20px] text-[16px] font-medium rounded-md shadow-current font-montserrat ${
              isComplete ? "bg-[#3ea99a]" : "bg-[#f1af71]"
            }`}
            onClick={toggleComplete}
          >
            {isComplete ? "Completed" : "Complete"}
          </button>
          <button
            className="py-[10px] px-[20px] text-[16px] font-medium rounded-md bg-[#f1af71] shadow-current font-montserrat"
            onClick={handleDelete}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
