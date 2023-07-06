// import { useState, useEffect } from "react";
// import AddInputs from "./components/AddInputs";
// import Header from "./components/Header";

// const App = () => {
//   const [tasks, setTasks] = useState([]);
//   const [add, setAdd] = useState(false);

//   useEffect(() => {
//     let storedTasks = localStorage.getItem("tasks");
//     if (storedTasks) {
//       storedTasks = JSON.parse(storedTasks);
//       setTasks(storedTasks);
//     }
//   }, []);

//   useEffect(() => {
//     localStorage.setItem("tasks", JSON.stringify(tasks));
//   }, [tasks]);

//   const handleAdd = () => {
//     setAdd(!add);
//   };

//   return (
//     <div className="bg-gradient-to-b from-[#e1b382] to-[#c89666] w-[100vw] h-[100vh] flex justify-center items-center overflow-y-auto ">
//       <div className="bg-[#12343b] w-[330px] h-[550px] p-[30px] shadow mb-[10px]  rounded-md overflow-y-auto md:w-[60vw] md:h-[650px]">
//         <Header handleAdd={handleAdd} />
//         <AddInputs add={add} tasks={tasks} setTasks={setTasks} />
//       </div>
//     </div>
//   );
// };

// export default App;

import { useState, useEffect } from "react";
import AddInputs from "./components/AddInputs";
import Header from "./components/Header";

const App = () => {
  const [tasks, setTasks] = useState([]);
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

  return (
    <div className="bg-gradient-to-b from-[#e1b382] to-[#c89666] w-[100vw] h-[100vh] flex justify-center items-center overflow-y-auto ">
      <div className="bg-[#12343b] w-[330px] h-[550px] p-[30px] shadow mb-[10px]  rounded-md overflow-y-auto md:w-[60vw] md:h-[650px]">
        <Header handleAdd={handleAdd} />
        <AddInputs add={add} tasks={tasks} setTasks={setTasks} />
      </div>
    </div>
  );
};

export default App;
