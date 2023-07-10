const AddUser = ({
  selectedUser,
  setSelectedUser,
  handleAddUser,
  users,
  handleDeleteUser,
}) => {
  return (
    <div className="flex flex-col  justify-center items-center h-[400px] gap-[10px]">
      <div>
        <p className="text-[#fff] text-[30px] font-semibold flex justify-center items-center font-montserrat">
          Add User
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
      <div className="overflow-auto scroll">
        <ul className="flex flex-col gap-[10px] w-[350px] mt-[10px] ">
          {users.map((user, index) => (
            <li
              key={index}
              className="text-[20px] font-montserrat text-[#fff] flex justify-between items-center border-2 border-[#c89666] w-full p-[15px] rounded-lg"
            >
              {user}
              <button onClick={() => handleDeleteUser(index)}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="20px"
                  width="20px"
                  viewBox="0 0 448 512"
                >
                  <path
                    fill="#FF0000"
                    d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"
                  />
                </svg>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AddUser;
