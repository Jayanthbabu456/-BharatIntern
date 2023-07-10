import { useState, useEffect } from "react";
import AddInputs from "./components/AddInputs";
import Header from "./components/Header";
import AddUser from "./components/AddUser";
import SelectUser from "./components/SelectUser";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
import AOS from "aos";

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState("");
  const [add, setAdd] = useState(false);

  useEffect(() => {
    try {
      const storedData = localStorage.getItem("taskData");
      if (storedData) {
        const parsedData = JSON.parse(storedData);
        setTasks(parsedData.tasks);
        setUsers(parsedData.users);
      }
    } catch (error) {
      console.error("Error retrieving data from local storage:", error);
    }
  }, []);

  useEffect(() => {
    try {
      const dataToStore = {
        tasks: tasks,
        users: users,
      };
      localStorage.setItem("taskData", JSON.stringify(dataToStore));
    } catch (error) {
      console.error("Error saving data to local storage:", error);
    }
  }, [tasks, users]);

  const handleAdd = () => {
    setAdd(!add);
  };

  const handleAddUser = () => {
    if (!selectedUser) {
      alert("Please enter a User.");
      return;
    }
    if (selectedUser.trim() !== "") {
      setUsers([...users, selectedUser]);
      setSelectedUser("");
    }
    toast.success("User Added successfully!");
  };

  const handleDeleteUser = (index) => {
    const updatedUsers = [...users];
    updatedUsers.splice(index, 1);
    setUsers(updatedUsers);
    localStorage.setItem("users", JSON.stringify(updatedUsers));
    toast.warn("User Deleted successfully!");

    if (selectedUser === users[index]) {
      setSelectedUser("");
    }
  };

  const handleEditTask = (taskId, updatedTask) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, ...updatedTask } : task
      )
    );
    toast.success("Task updated successfully!");
  };
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="bg-gradient-to-b from-[#e1b382] to-[#c89666] w-[100vw] h-[100vh] py-8 overflow-hidden">
      <Header handleAdd={handleAdd} />
      <div className="flex w-[90%] mx-auto gap-[30px] pt-[15px]">
        <div
          className="bg-[#12343b] w-[40%] h-[550px] p-[30px] shadow mb-[10px]  rounded-md sticky"
          data-aos="fade-right"
          data-aos-duration="1100"
        >
          <AddUser
            selectedUser={selectedUser}
            setSelectedUser={setSelectedUser}
            handleAddUser={handleAddUser}
            users={users}
            handleDeleteUser={handleDeleteUser}
          />
        </div>
        <div
          className="bg-[#12343b] w-[60%] h-[550px] p-[30px] shadow mb-[10px]  rounded-md overflow-auto scroll"
          data-aos="fade-left"
          data-aos-duration="1100"
        >
          <SelectUser
            selectedUser={selectedUser}
            setSelectedUser={setSelectedUser}
            users={users}
            handleAdd={handleAdd}
          />
          <AddInputs
            add={add}
            tasks={tasks}
            setTasks={setTasks}
            selectedUser={selectedUser}
            handleEditTask={handleEditTask}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
