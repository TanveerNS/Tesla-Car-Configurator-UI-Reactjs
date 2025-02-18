import React from "react";
import logo from "../../assets/images/logo.svg";

const Header = () => {
  return (
    <header class="flex justify-between items-center px-10 py-6">
      <img src={logo} alt="Tesla" width="120" height="24" />
      <button>
        <i class="fa-solid fa-globe"></i> <span class="font-bold">IN</span>
      </button>
    </header>
  );
};

export default Header;
