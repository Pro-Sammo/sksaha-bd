import React, { useEffect, useState } from "react";
import GoogleFontLoader from "react-google-font-loader";
import { motion, AnimatePresence } from "framer-motion";
import "./navbar.css";
import { RiMenu5Line } from "react-icons/ri";
import { RxCross1 } from "react-icons/rx";
import { Link } from "react-router-dom";
import logo1 from "../../assets/SSKC Logo-01.png";
import { AiOutlineCaretUp, AiOutlineCaretDown } from "react-icons/ai";
import {RiArrowRightSLine} from 'react-icons/ri'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDrawer = () => {
    setIsOpen((prev)=>!prev);
  };

  const closeAllSystem =() =>{
   setIsOpenDrop((prev) => !prev)
   setIsOpen((prev)=>!prev);
  }


  const [isOpenDrop, setIsOpenDrop] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    }

    return () => (document.body.style.overflow = "scroll");
  }, [isOpen]);

  return (
    <>
      <GoogleFontLoader
        fonts={[
          {
            font: "Poppins",
            weights: [400, "400i"],
          },
        ]}
        subsets={["cyrillic-ext", "greek"]}
      />
      <nav
        style={{ fontFamily: "Poppins" }}
        className=" pt-3 w-full flex h-14 justify-between px-11 items-center relative z-50"
      >
        <div className="lg:w-48 w-28 mt-5">
          <img src={logo1} alt="" srcset="" />
        </div>
        <div className="relative lg:hidden">
          <button onClick={toggleDrawer} className="px-4 py-20 text-lg">
            <AnimatePresence>
              {isOpen ? <RxCross1 size={25} /> : <RiMenu5Line size={25} />}
            </AnimatePresence>
          </button>
          <AnimatePresence>
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: isOpen ? 0 : "-100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed top-0 left-0 w-64 h-full backdrop-blur border-r-[1px] border-gray-300 z-40"
            >
              <div className=" mt-10 flex flex-col gap-12 items-center ">
                <motion.div
                  initial={{ opacity: 0, x: "-30px" }}
                  whileInView={{ opacity: 1, x: "0px" }}
                  transition={{ duration: 0.5 }}
                  className="gradient"
                  onClick={toggleDrawer}
                >
                  <Link to={"/"}>Home</Link>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: "-30px" }}
                  whileInView={{ opacity: 1, x: "0px" }}
                  transition={{ duration: 0.5 }}
                  className="gradient"
                  onClick={toggleDrawer}
                >
                  <Link to={"/about"}>About Us</Link>
                </motion.div>
                <div className="flex flex-col justify-center items-center">
                  <motion.div
                    initial={{ opacity: 0, x: "-30px" }}
                    whileInView={{ opacity: 1, x: "0px" }}
                    transition={{ duration: 0.5 }}
                    className="gradient flex items-center cursor-pointer "
                    onClick={() => setIsOpenDrop((prev) => !prev)}
                  >
                    Services
                    {isOpenDrop ? (
                      <AiOutlineCaretUp className="ml-2" />
                    ) : (
                      <AiOutlineCaretDown className="ml-2" />
                    )}
                  </motion.div>
                  <AnimatePresence>
                  {isOpenDrop && (
                    <motion.div
                    initial={{ opacity: 0, y: -100 }}
                    animate={{ opacity: 1, y:0 }}
                    exit={{ opacity: 0, scale: 0 }}
                    className=" flex flex-col gap-2 mt-2 w-60 font-light text-gray-500 backdrop-blur py-2 px-4 border-2 rounded-md shadow-lg ">
                      <div
                        onClick={closeAllSystem}
                        className="gradient cursor-pointer"
                      >
                        <Link to={"/audit"} className="flex items-center"><RiArrowRightSLine/> Audit & Assurance</Link>
                      </div>
                      <div
                        onClick={closeAllSystem}
                        className="gradient cursor-pointer"
                      >
                        <Link to={"/tax"} className="flex items-center"> <RiArrowRightSLine/>Tax & Regulatory</Link>
                      </div>
                      <div
                        onClick={closeAllSystem}
                        className="gradient cursor-pointer"
                      >
                        <Link to={"/business"} className="flex items-center"><RiArrowRightSLine/>Business Advisory</Link>
                      </div>
                      <div
                        onClick={closeAllSystem}
                        className="gradient cursor-pointer"
                      >
                        <Link to={"/managment"} className="flex items-center"> <RiArrowRightSLine/>Managment Consulting</Link>
                      </div>
                      <div
                        onClick={closeAllSystem}
                        className="gradient cursor-pointer"
                      >
                        <Link to={"/account"} className="flex items-center"> <RiArrowRightSLine/>Financial & Accounting Services</Link>
                      </div>
                      <div
                        onClick={closeAllSystem}
                        className="gradient cursor-pointer"
                      >
                        <Link to={"/hr"} className="flex items-center" > <RiArrowRightSLine/>HR Services</Link>
                      </div>
                    </motion.div>
                  )}
                  </AnimatePresence>
                </div>
                <motion.div
                  initial={{ opacity: 0, x: "-30px" }}
                  whileInView={{ opacity: 1, x: "0px" }}
                  transition={{ duration: 0.5 }}
                  className="gradient"
                  onClick={toggleDrawer}
                >
                  Client
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: "-30px" }}
                  whileInView={{ opacity: 1, x: "0px" }}
                  transition={{ duration: 0.5 }}
                  className="gradient"
                  onClick={toggleDrawer}
                >
                  Career
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: "-30px" }}
                  whileInView={{ opacity: 1, x: "0px" }}
                  transition={{ duration: 0.5 }}
                  className="gradient"
                  onClick={toggleDrawer}
                >
                  <Link to={"/contact"}>Contact us</Link>
                </motion.div>
                <div className="gradient"></div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
        <motion.div
          initial={{ opacity: 0, y: "-30px" }}
          animate={{ opacity: 1, y: "0px" }}
          transition={{ duration: 0.5 }}
          className="hidden lg:flex gap-12 items-center relative"
        >
          <div className="gradient">
            <Link to={"/"}>Home</Link>
          </div>
          <div className="gradient">
            <Link to={"/about"}>About Us</Link>
          </div>
          <div className="relative">
            <div
              onClick={() => setIsOpenDrop((prev) => !prev)}
              className="gradient flex items-center cursor-pointer "
            >
              Services
              {isOpenDrop ? (
                <AiOutlineCaretUp className="ml-2" />
              ) : (
                <AiOutlineCaretDown className="ml-2" />
              )}
            </div>

              <AnimatePresence>
            {isOpenDrop && (
              <motion.div
              initial={{ opacity: 0, y: -100 }}
              animate={{ opacity: 1, y:0 }}
              exit={{ opacity: 0, scale: 0 }}
              className="absolute top-7 w-60 font-light text-gray-500 backdrop-blur py-2 px-4 z-50 border-2 rounded-md shadow-lg">
                <div className="gradient cursor-pointer">
                  <Link to={"/audit"}>Audit & Assurance</Link>
                </div>
                <div className="gradient cursor-pointer">
                  <Link to={"/tax"}>Tax & Regulatory</Link>
                </div>
                <div className="gradient cursor-pointer">
                  <Link to={"/business"}>Business Advisory</Link>
                </div>
                <div className="gradient cursor-pointer">
                  <Link to={"/managment"}>Managment Consulting</Link>
                </div>
                <div className="gradient cursor-pointer">
                  <Link to={"/account"}>Financial & Accounting Services</Link>
                </div>
                <div className="gradient cursor-pointer">
                  <Link to={"/hr"}>HR Services</Link>
                </div>
              </motion.div>
            )}
            </AnimatePresence>
          </div>
          <div className="gradient">Client</div>
          <div className="gradient">Career</div>
          <div className="gradient">
            <Link to={"/contact"}>Contact us</Link>
          </div>
        </motion.div>
      </nav>
    </>
  );
};

export default Navbar;

//
