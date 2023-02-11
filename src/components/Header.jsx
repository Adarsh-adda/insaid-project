import React, { useState } from "react";
import { Box, SwipeableDrawer } from "@mui/material";
import { motion } from "framer-motion";
import menu from "./../assets/menu.png";
import close from "./../assets/close.png";

import {
  ShoppingBagIcon,
  ShoppingCartIcon,
  UserIcon,
  Bars3BottomLeftIcon,
  ChatBubbleLeftIcon,
  XMarkIcon,
  ChatBubbleLeftEllipsisIcon,
  HomeIcon,
} from "@heroicons/react/24/outline";
import { Link, NavLink } from "react-router-dom";

const containerParent = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
  },
};
const containerChild = {
  hidden: { opacity: 1, rotate: 0 },
  visible: {
    opacity: 1,
    rotate: [0, 30, 20, 10, -15, 0],
    transition: {
      duration: 0.2,
      type: "spring",
      stiffness: 500,
    },
  },
};

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };
  const activeLink = "flex p-[5px] rounded-md bg-slate-800 ";
  const normalLink = "flex";

  return (
    <header className="bg-primary text-white py-3">
      <nav className="w-full sm:px-16 px-6 flex justify-between items-center">
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? activeLink : normalLink)}
        >
          <motion.div whileTap={{ scale: 0.9 }}>Home</motion.div>
        </NavLink>

        {/* desktop menu */}
        <div className="list-none sm:flex hidden flex-1 justify-end items-center">
          {/* shop */}
          <NavLink
            to="contact"
            className={({ isActive }) => (isActive ? activeLink : normalLink)}
          >
            <motion.ul
              variants={containerParent}
              initial="hidden"
              whileHover="visible"
              whileTap={{ scale: 0.9 }}
              className="flex items-center cursor-pointer"
            >
              <motion.li variants={containerChild}>
                <ChatBubbleLeftEllipsisIcon
                  color={"white"}
                  className="h-[22px] w-[22px] mt-[1px]"
                />
              </motion.li>
              <motion.li className="ml-2 font-semibold">Contact Us</motion.li>
            </motion.ul>
          </NavLink>
        </div>

        {/* mobile menu */}
        <div className="sm:hidden flex cursor-pointer">
          <img
            src={isMenuOpen ? close : menu}
            alt="menu"
            style={{ height: "30px", width: "30px", zIndex: "9999" }}
            onClick={toggleMenu}
          />
          {/* draweer */}
          <div>
            <React.Fragment key="left">
              <SwipeableDrawer
                anchor="left"
                open={isMenuOpen}
                onClose={toggleMenu}
                onOpen={toggleMenu}
              >
                <Box
                  p={2}
                  width="250px"
                  textAlign={"center"}
                  className="bg-primary text-white h-screen"
                  role="presentation"
                >
                  <nav className="flex flex-col justify-center">
                    <motion.ul
                      className="flex items-center cursor-pointer text-2xl mb-4"
                      onClick={toggleMenu}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Link to="/" className="flex">
                        <li className="flex items-center">
                          <HomeIcon
                            color="white"
                            className="mr-1 mt-[1px] h-[25px] w-[25px]"
                          />
                        </li>
                        <li className="ml-1">Home</li>
                      </Link>
                    </motion.ul>
                    <motion.ul
                      className="flex items-center cursor-pointer text-2xl mb-4"
                      onClick={toggleMenu}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Link to="contact" className="flex">
                        <li className="flex items-center">
                          <ChatBubbleLeftEllipsisIcon
                            color="white"
                            className="mr-1 mt-[1px] h-[25px] w-[25px]"
                          />
                        </li>
                        <li className="ml-1">Contact Us</li>
                      </Link>
                    </motion.ul>
                  </nav>
                </Box>
              </SwipeableDrawer>
            </React.Fragment>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
