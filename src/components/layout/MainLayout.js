import React from "react";

const MainLayout = ({ children }) => {
  return <main class="flex flex-col md:flex-row justify-between px-4 md:px-10 py-6">{children}</main>;
};

export default MainLayout;
