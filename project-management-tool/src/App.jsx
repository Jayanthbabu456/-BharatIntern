import { useState, useEffect } from "react";
import AddInputs from "./components/AddInputs";
import Header from "./components/Header";
import AddUser from "./components/AddUser";
import SelectUser from "./components/SelectUser";

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState("");
  const [add, setAdd] = useState(false);

  useEffect(() => {
    try {
      const storedTasks = localStorage.getItem("tasks");
      if (storedTasks) {
        const parsedTasks = JSON.parse(storedTasks);
        setTasks(parsedTasks);
      }
    } catch (error) {
      console.error("Error retrieving tasks from local storage:", error);
    }
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem("tasks", JSON.stringify(tasks));
    } catch (error) {
      console.error("Error saving tasks to local storage:", error);
    }
  }, [tasks]);

  const handleAdd = () => {
    setAdd(!add);
  };
  const handleAddUser = () => {
    if (selectedUser.trim() !== "") {
      setUsers([...users, selectedUser]);
      setSelectedUser("");
    }
  };
  const handleDeleteUser = (user) => {
    const updatedUsers = users.filter((u) => u !== user);
    setUsers(updatedUsers);
  };
  return (
    <div className="bg-gradient-to-b from-[#e1b382] to-[#c89666] w-[100vw] h-[100vh] py-8 overflow-hidden">
      <Header handleAdd={handleAdd} />
      <div className="flex w-[90%] mx-auto gap-[30px] pt-[15px]">
        <div className="bg-[#12343b] w-[40%] h-[550px] p-[30px] shadow mb-[10px]  rounded-md">
          <AddUser
            selectedUser={selectedUser}
            setSelectedUser={setSelectedUser}
            handleAddUser={handleAddUser}
          />
        </div>
        <div className="bg-[#12343b] w-[60%] h-[550px] p-[30px] shadow mb-[10px]  rounded-md overflow-auto scroll">
          <SelectUser
            selectedUser={selectedUser}
            setSelectedUser={setSelectedUser}
            users={users}
            handleAdd={handleAdd}
            handleDeleteUser={handleDeleteUser}
          />
          <AddInputs add={add} tasks={tasks} setTasks={setTasks} />
        </div>
      </div>
    </div>
  );
};

export default App;
