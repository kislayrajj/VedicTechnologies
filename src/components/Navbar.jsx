import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import "./custom/css/menuButton.css";
const Navbar = () => {
  const [isNavMenuOpen, setIsNavMenuOpen] = useState(false);
  const [checked, setChecked] = useState(false);

  const handleChange = () => {
    setChecked((prevChecked) => !prevChecked); // Toggle state
    console.log("clicked");
  };
  return (
    <div>
      <div className="flex justify-between items-center px-12 p-2">
        <div>Vedic Technologies</div>
        <div title="open menu" className={`cursor-pointer z-10`}>
          <label className="menu-button">
            <input
              type="checkbox"
              id="check"
              checked={checked}
              onChange={handleChange}
              className="checkbox"
              onClick={() => setIsNavMenuOpen(!isNavMenuOpen)}
            />
            <span></span>
            <span></span>
            <span></span>
          </label>
          {/* <MenuButton onClick /> */}
        </div>
        <AnimatePresence mode="wait">
          {isNavMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -500 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -500 }}
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
