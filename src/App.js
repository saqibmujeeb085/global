import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import CourseP from "./pages/courses/CourseP";

function App() {
  return (
    <div className="bg-[#10384f] text-slate-200 min-h-screen">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/course" element={<CourseP />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
