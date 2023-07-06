const AddUser = ({ selectedUser, setSelectedUser, handleAddUser }) => {
  return (
    <div className="flex flex-col  justify-center items-center h-full gap-[10px]">
      <div>
        <p className="text-[#fff] text-[30px] font-semibold flex justify-center items-center font-montserrat">
          New User
        </p>
      </div>
      <div className="flex pl-[20px]">
        <input
          type="text"
          placeholder="Enter a User..."
          value={selectedUser}
          onChange={(e) => setSelectedUser(e.target.value)}
          className=" w-[300px] p-[13px]   text-[20px] bg-[#000] border-2 border-[#c89666]  outline-none rounded-full text-[#ccc] shadow1 whitespace-normal mx-auto md:mr-[25px]"
        />
        <button
          className="w-[60px] py-[15px] px-[10px] text-[20px] font-bold bg-[#f1af71] hover:scale-100 flex justify-center items-center rounded-full "
          onClick={handleAddUser}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="1em"
            viewBox="0 0 448 512"
          >
            <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default AddUser;
