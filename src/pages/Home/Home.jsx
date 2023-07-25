import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex flex-col gap-5 justify-center items-center min-h-[90vh]">
      <h2 className="text-4xl">Hello Welcome To The Course</h2>
      <p className="text-[16px]"> Click the button to start Or continue😊</p>
      <Link
        className="text[16] bg-white text-black rounded-md px-6 py-3 hover:text-white hover:bg-black duration-300 mt-10"
        to="/course"
      >
        Let's Go!
      </Link>
    </div>
  );
};

export default Home;
