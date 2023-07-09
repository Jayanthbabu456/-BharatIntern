import { useState, useEffect } from "react";
import { toast } from "react-toastify";

const Card = ({
  username,
  title,
  description,
  date,
  handleDelete,
  handleComplete,
  handleEdit,
  complete,
  taskId,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(title);
  const [editedDescription, setEditedDescription] = useState(description);
  const [status, setStatus] = useState(complete ? "Completed" : "Pending");

  useEffect(() => {
    const storedStatus = localStorage.getItem(`taskStatus_${taskId}`);
    if (storedStatus) {
      setStatus(storedStatus);
    }
  }, [taskId]);

  const handleEditSave = () => {
    if (!editedTitle || !editedDescription) {
      toast.error("Please enter a task and description.");
      return;
    }
    handleEdit(editedTitle, editedDescription);
    setIsEditing(false);
    toast.success("Task updated successfully!");
  };

  const toggleComplete = () => {
    if (status === "Pending") {
      setStatus("Completed");
      handleComplete();
      toast.success("Task completed successfully!");
    } else {
      setStatus("Pending");
      handleComplete();
      toast.warn("Task marked as pending!");
    }
  };

  useEffect(() => {
    localStorage.setItem(`taskStatus_${taskId}`, status);
  }, [taskId, status]);

  return (
    <div className="w-full px-[30px] py-[20px] overflow-y-auto flex flex-col justify-center bg-[#12343b]/90 rounded-[20px] shadow-xl border border-[#000]/50 gap-[10px]">
      <div className="flex flex-col gap-2">
        <div className="flex justify-between items-center">
          <p className="text-[20px] font-bold text-[#fff] font-montserrat">
            {username}
          </p>
          <p className="text-[20px] font-medium text-[#fff] font-poppins">
            {date}
          </p>
        </div>
        {isEditing ? (
          <input
            type="text"
            value={editedTitle}
            onChange={(e) => setEditedTitle(e.target.value)}
            className="text-[20px] font-medium text-[#fff] font-poppins bg-[#000] border-2 border-[#c89666] outline-none rounded-md p-2"
          />
        ) : (
          <div className="flex flex-col">
            <p className="text-[20px] font-semibold text-[#fff] font-montserrat">
              Title :
            </p>
            <p className="text-[20px] font-medium text-[#fff]/80 font-poppins pl-[30px]">
              {title}
            </p>
          </div>
        )}
        {isEditing ? (
          <input
            type="text"
            value={editedDescription}
            onChange={(e) => setEditedDescription(e.target.value)}
            className="text-[20px] font-medium text-[#fff] font-poppins bg-[#000] border-2 border-[#c89666] outline-none rounded-md p-2"
          />
        ) : (
          <div>
            <p className="text-[20px] font-semibold text-[#fff] font-montserrat">
              Description :
            </p>
            <p className="text-[20px] font-medium text-[#fff]/80 font-poppins pl-[30px]">
              {description}
            </p>
          </div>
        )}
      </div>

      <div className="flex items-center gap-[10px] justify-center mt-[20px]">
        {isEditing ? (
          <button
            className="py-[10px] px-[20px] text-[16px] font-medium rounded-md bg-[#f1af71] shadow-current font-montserrat"
            onClick={handleEditSave}
          >
            Save
          </button>
        ) : (
          <>
            <button
              className={`py-[10px] px-[20px] text-[16px] font-medium rounded-md shadow-current font-montserrat ${
                status === "Completed" ? "bg-[#3ea99a]" : "bg-[#f1af71]"
              }`}
              onClick={toggleComplete}
            >
              {status}
            </button>
            <button
              className="py-[10px] px-[20px] text-[16px] font-medium rounded-md bg-[#f1af71] shadow-current font-montserrat"
              onClick={handleDelete}
            >
              Delete
            </button>
            <button
              className="py-[10px] px-[20px] text-[16px] font-medium rounded-md bg-[#f1af71] shadow-current font-montserrat"
              onClick={() => setIsEditing(true)}
            >
              Edit
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Card;
