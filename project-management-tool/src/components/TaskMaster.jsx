import React, { useState } from "react";

const TaskMaster = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState("");
  const [taskName, setTaskName] = useState("");
  const [tasks, setTasks] = useState([]);

  const handleAddUser = () => {
    if (selectedUser.trim() !== "") {
      setUsers([...users, selectedUser]);
      setSelectedUser("");
    }
  };

  const handleAddTask = () => {
    if (taskName.trim() !== "") {
      const newTask = {
        username: selectedUser,
        taskName: taskName,
        date: new Date().toLocaleDateString(),
        status: "Pending",
      };
      setTasks([...tasks, newTask]);
      setTaskName("");
    }
  };

  const handleStatusChange = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].status = "Completed";
    setTasks(updatedTasks);
  };

  return (
    <div className="container mx-auto p-4">
      <header>
        <h1 className="text-3xl font-bold mb-4">TaskMaster</h1>
      </header>
      <aside className="mb-4">
        <input
          type="text"
          placeholder="New User"
          value={selectedUser}
          onChange={(e) => setSelectedUser(e.target.value)}
          className="p-2 border border-gray-300 rounded mr-2"
        />
        <button
          onClick={handleAddUser}
          className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
        >
          Add User
        </button>
        <select
          value={selectedUser}
          onChange={(e) => setSelectedUser(e.target.value)}
          className="p-2 border border-gray-300 rounded mt-2"
        >
          <option value="">Select User</option>
          {users.map((user, index) => (
            <option key={index} value={user}>
              {user}
            </option>
          ))}
        </select>
        <input
          type="text"
          placeholder="Task Name"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
          className="p-2 border border-gray-300 rounded mt-2"
        />
        <button
          onClick={handleAddTask}
          className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded mt-2"
        >
          Assign Task
        </button>
      </aside>
      <main>
        {tasks.map((task, index) => (
          <div
            className="task p-4 border border-gray-300 rounded mb-2 flex justify-between items-center"
            key={index}
          >
            <div>
              <div className="font-semibold mb-1">
                Username: {task.username}
              </div>
              <div className="mb-1">Task Name: {task.taskName}</div>
              <div className="mb-1">Date: {task.date}</div>
              <div>Status: {task.status}</div>
            </div>
            {task.status === "Pending" && (
              <button
                onClick={() => handleStatusChange(index)}
                className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
              >
                Complete
              </button>
            )}
          </div>
        ))}
      </main>
    </div>
  );
};

export default TaskMaster;
