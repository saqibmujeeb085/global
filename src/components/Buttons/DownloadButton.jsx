import React from "react";

const DownloadButton = (name, link) => {
  return (
    <a
      className="text[16] bg-white text-black rounded-md px-6 py-3 hover:text-white hover:bg-black duration-300 mt-10"
      href={link}
      download
    >
      Download File
    </a>
  );
};

export default DownloadButton;
