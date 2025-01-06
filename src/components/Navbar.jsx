import React, { useState } from "react";

const Navbar = () => {
    const [isNavMenuOpen, setIsNavMenuOpen] = useState(false)
  return (
    <div>
      <div className="flex justify-between items-center px-12 p-2">
        <div>Vedic Technologies</div>
        <div title="open menu" className={`border  cursor-pointer rounded-full size-8 center items-center ${isNavMenuOpen ? "border-red-500 bg-red-50 hover:bg-red-100" : "border-blue-500 bg-blue-50 hover:bg-blue-100"}`} onClick={() => setIsNavMenuOpen(!isNavMenuOpen)}>
            {isNavMenuOpen ? <i className="fa-solid fa-plus rotate-45 transition-all duration-300 ease-in-out"></i> : <i className="fa-solid fa-plus transition-all duration-300 ease-in-out"></i>}
          
        </div>
      </div>
    </div>
  );
};

export default Navbar;
