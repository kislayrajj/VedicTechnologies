import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const Navbar = () => {
  const [isNavMenuOpen, setIsNavMenuOpen] = useState(false);
  return (
    <div>
      <div className="flex justify-between items-center px-12 p-2">
        <div>Vedic Technologies</div>
        <div
          title="open menu"
          className={`border  cursor-pointer rounded-full size-8 center items-center z-10 ${
            isNavMenuOpen
              ? "border-red-500 bg-red-50 hover:bg-red-100"
              : "border-blue-500 bg-blue-50 hover:bg-blue-100"
          }`}
          onClick={() => setIsNavMenuOpen(!isNavMenuOpen)}>
          {isNavMenuOpen ? (
            <i className="fa-solid fa-plus rotate-45 transition-all duration-300 ease-in-out"></i>
          ) : (
            <i className="fa-solid fa-plus transition-all duration-300 ease-in-out"></i>
          )}
        </div>
        <AnimatePresence mode="wait">
          {isNavMenuOpen && (
            <motion.div
              initial={{ opacity: 0,  y: -500 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 ,  y: -500}}
              transition={{ duration: 0.2 }}
              className={`absolute top-0 left-0 flex justify-between w-[100vw] h-[100vh] bg-black bg-opacity-95 text-white ${
                isNavMenuOpen ? " " : ""
              }`}>
  
              <div className="text-3xl flex flex-col gap-4  w-1/2 p-12">
                <div>something</div>
                <div>something</div>
                <div>something</div>
              </div>
              <div className="text-xl flex flex-col gap-4 w-1/2 p-12">
                <div>Price</div>
                <div>Services</div>
                <div>Projects</div>
                <div>Contacts</div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Navbar;
