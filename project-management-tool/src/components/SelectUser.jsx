const SelectUser = ({ selectedUser, setSelectedUser, users, handleAdd }) => {
  return (
    <div className="flex justify-between items-center">
      <div className="bg-[#f1af71] text-[#000] rounded-md font-poppins">
        <select
          value={selectedUser}
          onChange={(e) => setSelectedUser(e.target.value)}
          className="py-[15px] px-[20px] outline-none rounded-md text-[16px] font-bold bg-[#f1af71]"
        >
          <option value="" className="bg-[#f1af71]">
            SELECT USER
          </option>
          {users.map((user, index) => (
            <option key={index} value={user}>
              {user}
            </option>
          ))}
        </select>
      </div>

      <button
        className="py-[15px] px-[20px] text-[16px] font-bold rounded-md bg-[#f1af71]"
        onClick={handleAdd}
      >
        ADD TASK
      </button>
    </div>
  );
};

export default SelectUser;
