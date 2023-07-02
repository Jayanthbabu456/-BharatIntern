import Main from "./components/Main";
import Header from "./components/header";
function App() {
  return (
    <div className="relative h-screen w-full gradient overflow-hidden flex justify-center items-center">
      <div className="absolute left-[-220px] top-[-100px] w-[550px] h-[550px] rounded-full opacity-40 bg-gradient-to-r from-[#ff9a9e] to-[#f6416c]"></div>

      <div className="absolute bottom-[-100px] right-[-220px] w-[550px] h-[550px] rounded-full opacity-40  bg-gradient-to-r from-[#ff9a9e] to-[#f6416c]"></div>
      <div className="design">
        <Header />
        <Main />
      </div>
    </div>
  );
}

export default App;
