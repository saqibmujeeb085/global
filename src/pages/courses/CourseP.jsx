import React from "react";
import Sidebar from "./../../components/Sidebar/Sidebar";
import VideoCard from "../../components/VideoCard/VideoCard";
import DownloadButton from "../../components/Buttons/DownloadButton";

const CourseP = () => {
  return (
    <div className="flex justify-between items-stretch">
      <div className="min-w-[300px] py-10 ps-[50px] bg-black sticky text-white">
        <Sidebar />
      </div>
      <div className="py-5 px-28">
        <VideoCard />
        <div className="flex w-full justify-end items-center">
          <DownloadButton />
        </div>
      </div>
    </div>
  );
};

export default CourseP;
