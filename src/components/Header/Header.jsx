import React from "react";

const Header = () => {
  return (
    <header className="flex justify-between items-center gap-7 py-5 px-10 border-b-2">
      <div className="flex justify-center items-center gap-3">
        <img
          className="w-[50px]"
          src="/assets/images/Bayer-logo-p.svg"
          alt="Logo"
        />
        <h2 className="text-[30px] font-bold">GLOBAL</h2>
      </div>
      <div className="flex justify-center items-center gap-3">
        <a
          className="text[16] bg-white text-black rounded-md px-6 py-3 hover:text-white hover:bg-black duration-300"
          href="#"
          target="_blank"
          title="LinkedIn"
        >
          LinkedIn
        </a>
        <a
          className="text[16] bg-white text-black rounded-md px-6 py-3 hover:text-white hover:bg-black duration-300"
          href="#"
          target="_blank"
          title="Facebook"
        >
          Facebook
        </a>
        <a
          className="text[16] bg-white text-black rounded-md px-6 py-3 hover:text-white hover:bg-black duration-300"
          href="#"
          target="_blank"
          title="Twitter"
        >
          Twiiter
        </a>
      </div>
    </header>
  );
};

export default Header;
